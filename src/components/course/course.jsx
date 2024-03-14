import {useState} from 'react'
import authSvc from '../../service/auth.service';
const Course = async() => {
    const [data, setData] =useState();
    const [courseData, setCourseData] =useState({
        lesson_id: '',
        lesson_title: '',
        lesson_desc: '',
        lesson_cr: ''
    })

    const handleChange = (e) =>{
        const{name, value} =e.target;
        setCourseData(prevState => ({
            ...prevState,
            [name]:value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await authSvc.course(courseData);
            console.log(response)
            if(response.data.success) {
                toast.success("Course details added successfully.")
            }
            else {
                console.log(response.data.message)
            }
        }catch(exception){
            toast.error("failed")
        }
    }
    const displayResponse = await authSvc.courseDisplay();
       
    setData(displayResponse)
   
    return(
        <>
        
        <div className="card">
            <div className="card-create">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                    <label htmlFor="lesson-id">
                        Lesson No:
                    </label>
                    <input type="number" name="lesson_id"  onChange={handleChange}/>
                    </div>

                    <div className="field">
                    <label htmlFor="lesson-title">
                        Lesson Title:
                    </label>
                    <input type="text" name="lesson_title"  onChange={handleChange}/>
                    </div>

                    <div className="field">
                    <label htmlFor="lesson-desc">
                        Lesson Description:
                    </label>
                    <textarea type="text" name="lesson_desc"  onChange={handleChange}/>
                    </div>

                    <div className="field">
                    <label htmlFor="lesson-cr">
                        Lesson Description:
                    </label>
                    <input type="number" name="lesson_cr"  onChange={handleChange}/>
                    </div>

                    <div className="field">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <div className='display'>
                {data.map((item)=> (
                    <courseDisplay  item={item}/>
                ))}
            </div>
           
        </div>
        </>
    );
}

export function courseDisplay ({item}) {
    
    return(
        <div className="card-display">
           <div className='row'>
           <div className="id">{item.id}</div>
            <div className="title">{item.title}</div>
           </div>
            <div className="desc">{item.description}
            </div>
            <div className="cr">{item.credit_hour}</div>
           </div>
    );
}
export default Course;