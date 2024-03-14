import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import authSvc from "../../service/auth.service";
const LogInForm = () => {
    const[formData, setFormData] = useState({
        email: '',
        password: '',
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
    const handleSubmit =async (e) => {
        e.preventDefault();
        try{
            const loginResponse = await authSvc.login(formData);
            console.log(loginResponse)
            if(loginResponse.data.success){
                this.props.history.push('/Course');
            }
            else{
                console.log('LogIn Failed:', loginResponse.data.message)
            }

        }catch(exception) {
            toast.error("Error Logging in")
        }
    }
    return(
        
        <>
        <div className="login_form">
            <h2>LogIn Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="email" name="email" onChange={handleChange}/>
                </div>

                <div className="field">
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password" name="password" id="login-pass" onChange={handleChange}/>
                </div>

                <div className="field">
                    <button>Submit</button>
                </div>


            </form>
        </div>
        </>
    );
}

export default LogInForm;