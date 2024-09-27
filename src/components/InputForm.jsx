import {useEffect, useState} from "react";


const InputForm = ({onSubmit,initialData}) => {
    const [value, setValue] = useState({name:"",email:"",phone:""})
    const handleSubmit = (e) => {
      e.preventDefault()
        if (value){
            onSubmit(value)
            setValue({name:"",email:"",phone:""})
        }

    }
    useEffect(() => {
        if (initialData){
            setValue(initialData)
        }
    }, [initialData]);
    const handleChange = (e) => {
      const {name,value} = e.target
        setValue((prevState)=>({
            ...prevState,[name]:value
        }))

    }

    return (
            <form onSubmit={handleSubmit} className="flex justify-between gap-3 py-8 px-5">
                <input type="text" name="name" value={value.name} onChange={handleChange} className="py-1 px-5 text-black w-full outline-none rounded-md" placeholder="Enter Your name" />
                <input type="email" name="email" value={value.email} onChange={handleChange} className="py-1 px-5 text-black w-full outline-none rounded-md" placeholder="Enter Your Email" />
                <input type="text" name="phone" value={value.phone} onChange={handleChange} className="py-1 px-5 text-black w-full outline-none rounded-md" placeholder="Enter Your Phone" />
                <button className="bg-slate-300 text-black py-2 px-5 rounded-md">
                    {initialData ? 'Update' : 'Create'}
                </button>
            </form>

    );
};

export default InputForm;