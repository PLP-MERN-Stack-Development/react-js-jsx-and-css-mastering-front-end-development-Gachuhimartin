import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';

const TaskManager = () => {
    const [tasks, setTasks] = useLocalStorage('tasks', []);
    const [taskInput, setTaskInput] = useState('');
    const [filter, setFilter] = useState('All');

    const addTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
            setTaskInput('');
        }
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'Active') return !task.completed;
        if (filter === 'Completed') return task.completed;
        return true;
    });

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
            <div className="flex mb-4">
                <input 
                    type="text" 
                    value={taskInput} 
                    onChange={(e) => setTaskInput(e.target.value)} 
                    className="border p-2 flex-grow"
                    placeholder="Add a new task"
                />
                <Button onClick={addTask} className="ml-2">Add Task</Button>
            </div>
            <div className="mb-4">
                <Button onClick={() => setFilter('All')} className="mr-2">All</Button>
                <Button onClick={() => setFilter('Active')} className="mr-2">Active</Button>
                <Button onClick={() => setFilter('Completed')} className="mr-2">Completed</Button>
            </div>
            <div>
                {filteredTasks.map(task => (
                    <Card key={task.id} className="mb-2">
                        <div className="flex justify-between items-center">
                            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
                            <div>
                                <Button onClick={() => toggleTaskCompletion(task.id)} className="mr-2">
                                    {task.completed ? 'Undo' : 'Complete'}
                                </Button>
                                <Button onClick={() => deleteTask(task.id)} className="text-red-500">Delete</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TaskManager;