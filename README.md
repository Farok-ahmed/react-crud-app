# React CRUD Application Documentation

# React Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




## Overview

This application is a simple CRUD (Create, Read, Update, Delete) task manager built with React. It allows users to add, view, edit, and delete tasks. Each task has an id, name, email, and phone number associated with it.

## Components

The application is composed of three main components:

1. TaskManager
2. TaskForm
3. TaskList

### TaskManager Component

File: `TaskManager.jsx`

This is the main component that orchestrates the entire application.

```jsx
import React, { useState } from 'react';
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    // ... (function definitions)

    return (
        <div className="bg-slate-900 h-screen flex flex-col items-center pt-32">
            <h1 className="text-white text-2xl font-extrabold capitalize py-8">
                Welcome to my Crud App
            </h1>
            <div className="w-[1200px] bg-slate-500">
                <TaskForm 
                    onSubmit={editingTask ? updateTask : addTask} 
                    initialData={editingTask}
                    key={editingTask ? editingTask.id : 'new'}
                />
                <TaskList 
                    tasks={tasks} 
                    onDelete={deleteTask} 
                    onEdit={editTask}
                />
            </div>
        </div>
    );
};
```

#### State:
- `tasks`: An array that holds all the tasks.
- `editingTask`: Holds the task currently being edited, or null if no task is being edited.

#### Functions:
1. `addTask(task)`: Adds a new task to the `tasks` array.
   ```javascript
   const addTask = (task) => {
       setTasks([...tasks, { ...task, id: Date.now() }]);
   };
   ```

2. `updateTask(updatedTask)`: Updates an existing task in the `tasks` array.
   ```javascript
   const updateTask = (updatedTask) => {
       const newTasks = tasks.map((task) => 
           task.id === updatedTask.id ? updatedTask : task
       );
       setTasks(newTasks);
       setEditingTask(null);
   };
   ```

3. `deleteTask(id)`: Removes a task from the `tasks` array based on its id.
   ```javascript
   const deleteTask = (id) => {
       const newTasks = tasks.filter((task) => task.id !== id);
       setTasks(newTasks);
   };
   ```

4. `editTask(task)`: Sets the `editingTask` state to the task being edited.
   ```javascript
   const editTask = (task) => {
       setEditingTask(task);
   };
   ```

### TaskForm Component

File: `TaskForm.jsx`

This component renders a form for adding new tasks or editing existing ones.

Key props:
- `onSubmit`: Function to call when the form is submitted (either `addTask` or `updateTask`).
- `initialData`: Data of the task being edited (if any).

### TaskList Component

File: `TaskList.jsx`

This component renders the list of all tasks and provides options to edit or delete each task.

Key props:
- `tasks`: Array of all tasks to display.
- `onDelete`: Function to call when deleting a task.
- `onEdit`: Function to call when editing a task.

## Workflow

1. When the application loads, the TaskManager component initializes with an empty tasks array.
2. The TaskForm allows users to input new task details.
3. When a new task is submitted, the `addTask` function is called, which updates the `tasks` state.
4. The TaskList component re-renders to display the new task.
5. To edit a task, the user clicks an edit button, which calls `editTask` and populates the form with the task's current data.
6. When the edit form is submitted, `updateTask` is called to modify the existing task.
7. To delete a task, the user clicks a delete button, which calls `deleteTask` to remove the task from the array.

## Styling

The application uses Tailwind CSS for styling. Key classes:
- `bg-slate-900`: Dark background for the main container
- `text-white`: White text color
- `w-[1200px]`: Sets a fixed width for the task container

## Potential Improvements

1. Add form validation for email and phone fields.
2. Implement data persistence using local storage or a backend API.
3. Add sorting and filtering functionality to the task list.
4. Improve error handling and user feedback.
5. Implement pagination or infinite scrolling for large numbers of tasks.