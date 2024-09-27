import TaskForm from "./TaskForm.jsx";
import {useState} from "react";
import TaskList from "./TaskList.jsx";


const TaskManager = () => {
    const [tasks, setTasks] = useState([])
    const [editingTask, setEditingTask] = useState(null)

    const addTask = (task)=>{
        setTasks([...tasks,{...task,id: Date.now()}])
    }

    const updateTask = (updateTask) => {
      const newTask = tasks.map((task)=>task.id===updateTask.id ? updateTask : task)
        setTasks(newTask)
        setEditingTask(null)
    }
    const deleteTask = (id) => {
      const newTask = tasks.filter((task)=>task.id !== id)
        setTasks(newTask)
    }

    const editTask = (task) => {
        setEditingTask(task)
    }

    return (
        <div
            className="bg-slate-900 h-screen flex flex-col items-center pt-32">
            <h1 className="text-white text-2xl font-extrabold capitalize py-8">Welcome
                to my Crud App</h1>
            <div className="w-[1200px] bg-slate-500">
                <TaskForm onSubmit={editingTask ? updateTask : addTask} initialData={editingTask}/>
                <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask}/>
            </div>
        </div>
    );
};

export default TaskManager;