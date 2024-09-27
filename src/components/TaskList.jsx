import React from 'react';

const TaskList = ({tasks,onEdit,onDelete}) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}
                    className="mb-2 p-2 border">
                    <div>
                        <strong>Name:</strong> {task.name}
                    </div>
                    <div>
                        <strong>Email:</strong> {task.email}
                    </div>
                    <div>
                        <strong>Phone:</strong> {task.phone}
                    </div>
                    <button
                        onClick={() => onEdit(task)}
                        className="bg-yellow-500 text-white p-1 rounded mr-2 mt-2"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(task.id)}
                        className="bg-red-500 text-white p-1 rounded mt-2"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;