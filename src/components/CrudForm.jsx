import {useEffect, useState} from "react";

const init = {name:"",email:"",phone:""}


const CrudForm = ({onSubmit,initialData}) => {

    const [value, setValue] = useState({...init})
    const [errors, setErrors] = useState({})

    const validate=()=>{
        let formError = {};
        if (!value.name){
            formError.name = "Name is required"
        }
        if (!value.email){
            formError.email = "Email is required"
        }
        if (!value.phone){
            formError.phone = "Phone is required"
        }
        return formError;
    }

    const handleSubmit = (e) => {
      e.preventDefault()
        const formErrors = validate();
      if (Object.keys(formErrors).length ===0){
          onSubmit(value)
          setValue({...init})
      }else {
          setErrors(formErrors);
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
        if (errors[name]) {
            setErrors({ ...errors, [name]: undefined });
        }
    }

    return (
        <form onSubmit={handleSubmit}  className="flex justify-center items-center gap-3 p-5">
            <div>
                <input
                    type="text"
                    name="name"
                    value={value.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="py-2 px-5 outline-none text-black bg-white w-full "/>
                {errors.name && <p className="text-red-600">{errors.name}</p>}
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="py-2 px-5 outline-none text-black bg-white w-full"/>
                {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>
            <div>
                <input
                    type="number"
                    name="phone"
                    value={value.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Phone Number"
                    className="py-2 px-5 outline-none text-black bg-white w-full"/>
                {errors.phone && <p className="text-red-600">{errors.phone}</p>}
            </div>
            <button
                className="bg-slate-300 py-2 px-4 font-bold ">{initialData ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default CrudForm;