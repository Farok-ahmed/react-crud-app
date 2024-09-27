import CrudForm from "./CrudForm.jsx";
import {useState} from "react";
import uuid4 from "uuid4";
import CrudList from "./CrudList.jsx";
import {toast} from "react-toastify";


const CrudManager = () => {
    const [crudTasks, setCrudTasks] = useState([])
    const [crudEditing, setCrudEditing] = useState(null)
    const addCrud = (crudTask) => {
      setCrudTasks([...crudTasks,{...crudTask,id: uuid4()}]
      )
        toast.success("Successfully Added Data ")
    }
    const crudUpdate = (crudUpdate) => {
      setCrudTasks(crudTasks.map((task)=>task.id === crudUpdate.id ? crudUpdate : task))
        setCrudEditing(null)
        toast.info("Successfully Update Data ")
    }
    const crudEdit = (task) => {
        setCrudEditing(task)
    }
    const CrudDelete = (id) => {
      setCrudTasks(crudTasks.filter((task)=>task.id !==id))
        toast.error("Successfully Delete Data ")
    }
    return (
        <div
            className="bg-slate-900 h-screen flex flex-col items-center pt-32">
            <h1 className="text-white text-2xl font-extrabold capitalize py-8">Welcome
                to my Crud App</h1>
            <div className="w-[1200px] bg-slate-500">
               <CrudForm onSubmit={ crudEditing ? crudUpdate : addCrud} initialData={crudEditing} />
                <CrudList crudTasks={crudTasks} CrudDelete={CrudDelete} crudEdit={crudEdit}/>
            </div>
        </div>
    );
};

export default CrudManager;