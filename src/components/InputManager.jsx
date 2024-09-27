import InputForm from "./InputForm.jsx";
import {useState} from "react";
import InputList from "./InputList.jsx";


const InputManager = () => {
    const [inputDatas, setInputDatas] = useState([])
    const [editingData, setEditingData] = useState(null)

    // Create Input Filed
    const createInputData = (inputData) => {
      setInputDatas([
          ...inputDatas,{...inputData,id:Date.now()}
      ])
    }
    // edite Input Filed
    const editInput = (edit)=>{
        setEditingData(edit)
    }

    // update Input Filed
    const updateInput = (updateInput) => {
      setInputDatas(inputDatas.map((inputData)=>inputData.id === updateInput.id ? updateInput : inputData))
        setEditingData(null)
    }
    // Delete Input Filed
    const inputDelete = (id) => {
      const newInput = inputDatas.filter((inputData)=>inputData.id !==id)
        setInputDatas(newInput)
    }

    return (
        <div
            className="bg-slate-900 h-screen flex flex-col items-center pt-32">
            <h1 className="text-white text-2xl font-extrabold capitalize py-8">Welcome
                to my Crud App</h1>
            <div className="w-[1200px] bg-slate-500">
                <InputForm onSubmit={ editingData ? updateInput : createInputData} initialData={editingData} />
                <InputList inputDatas={inputDatas} inputDelete={inputDelete} editInput={editInput} />
            </div>
        </div>
    );
};

export default InputManager;