import { useState } from "react";
import { toast } from "react-toastify";
import authSvc from "../../service/auth.service";

const RegistrationForm = () => {
    const[formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]:value
        }));

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
       const validateErrors = validateForm(formData);
       if(Object.keys(validateErrors).length>0){
        setErrors(validateErrors);
       }
       else {
        try{
            const loginResponse = await authSvc.signup(formData);
            console.log(loginResponse)
            if(loginResponse.data.success)
            {
                this.props.history.push('/LogIn')
            }
            else{
                console.log('Signup Failed: ', loginResponse.data.message)
            }

        }catch(exception) {
            toast.error("Error Logging in")
        }
        console.log(formData);
       }
    }

    const validateForm = (data) => {
        let errors = {};
        if(!/\S+@\S+\.\S+/.test(data.email)) {
           errors.email= 'Invalid email address';
        }
        if(data.password.length < 6) {
            errors.password = "Password must be at least 6 characters long.";
            if(!/\d/.test(data.password)){
                errors.password = "Password must contain at least one numerical character.";
            }
        }
        if(data.password !== data.confirm_password)
        {
            errors.confirm_password = "Password don't match."
        }
        return errors;
    }

    return(
        <>
        <div className="registration_form">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="email" name="email" onChange={handleChange}/>
                    <span className="error">{errors.email}</span>
                </div>

                <div className="field">
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password" name="password" id="pass" onChange={handleChange}/>
                    <span className="error">{errors.password}</span>
                </div>

                <div className="field">
                    <label htmlFor="confirm-password">
                       Confirm Password:
                    </label>
                    <input type="password" name="confirm_password" id="confirm-pass" onChange={handleChange}/>
                    <span className="error">{errors.confirm_password}</span>
                </div>

                <div className="field">
                    <button>Submit</button>
                </div>


            </form>
        </div>
        </>
    );
}

export default RegistrationForm;