import React, { useState, useEffect } from "react";
import styles from "./TodoModal.module.css";
import { getImageUrl } from "../../utils";

export const TodoModal = ({ isOpen, onClose }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (storedTasks) setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() === "") return;
        const task = { text: newTask, completed: false };
        setTasks([...tasks, task]);
        setNewTask("");
    };

    const toggleTask = (index) => {
        const updated = [...tasks];
        updated[index].completed = !updated[index].completed;
        setTasks(updated);
    };

    const deleteTask = (index) => {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2>To-Do List</h2>
                    <img
                        className={styles.closeBtn}
                        src={getImageUrl("nav/close.png")}
                        alt="close"
                        onClick={onClose}
                    />
                </div>
                <div className={styles.inputArea}>
                    <input
                        type="text"
                        placeholder="write the task..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button onClick={addTask}>Add</button>
                </div>
                <ul className={styles.taskList}>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span
                                className={task.completed ? "done" : ""}
                                onClick={() => toggleTask(index)}
                            >
                                {task.text}
                            </span>
                            <button className={styles.deleteBtn} onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
