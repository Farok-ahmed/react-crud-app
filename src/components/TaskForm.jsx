import {useState,useEffect} from "react";


const TaskForm = ({onSubmit,initialData}) => {
    const [task, setTask] = useState({
        name:"",
        email:"",
        phone:""
    })

    useEffect(() => {
        if (initialData) {
            setTask(initialData);
        }
    }, [initialData]);
    const handleSubmit=(e)=>{
        e.preventDefault()
        onSubmit(task)
        setTask({
            name:"",
            email:"",
            phone:""})
    }
    console.log(task)
    const handleChange=(e)=>{
        const {name,value} = e.target
        setTask((prevState)=>({
            ...prevState,[name]:value
        }))
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    name="name"
                    value={task.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2 mr-2 mb-2"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={task.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border p-2 mr-2 mb-2"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    value={task.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="border p-2 mr-2 mb-2"
                    required
                />
                <button type="submit"
                        className="bg-blue-500 text-white p-2 rounded">
                    {initialData ? 'Update Task' : 'Add Task'}
                </button>
            </form>
        </div>
    );
};

export default TaskForm;