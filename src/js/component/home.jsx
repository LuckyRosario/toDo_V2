import React, { useState } from "react";

//create your first component
export default function Home() {
	const [todos, setTodos] = useState([
		"Make the bed",
		"Brush my teeth",
		"Make food",
	]);
	const addTodo = (e) => {
		if (e.keyCode == 13) {
			let task = e.target.value;
			const newTodos = [...todos, task];
			setTodos(newTodos);
			e.target.value = "";
		}
	};
	const deleteTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	return (
		<div className="text-center mt-5">
			<input
				type="text"
				placeholder={
					todos.length === 0 ? "No tasks." : "What needs to be done?"
				}
				onKeyDown={addTodo}
			/>
			<ul>
				{todos.map((todo, index) => (
					<li className="todo-item" key={index}>
						{todo}
						<button className="delete" onClick={deleteTodo}>
							x
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
