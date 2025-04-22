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
                    <h2 className={styles.modalTitle}>To-Do List</h2>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <img
                            src={getImageUrl("nav/close.png")}
                            alt="close"
                            className={styles.closeIcon}
                        />
                    </button>
                </div>
                <div className={styles.inputArea}>
                    <input
                        type="text"
                        placeholder="Write your task..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className={styles.taskInput}
                        onKeyPress={(e) => e.key === 'Enter' && addTask()}
                    />
                    <button onClick={addTask} className={styles.addButton}>
                        Add Task
                    </button>
                </div>
                <ul className={styles.taskList}>
                    {tasks.map((task, index) => (
                        <li key={index} className={styles.taskItem}>
                            <span
                                className={`${styles.taskText} ${task.completed ? styles.completed : ''}`}
                                onClick={() => toggleTask(index)}
                            >
                                {task.text}
                            </span>
                            <button 
                                className={styles.deleteButton}
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};