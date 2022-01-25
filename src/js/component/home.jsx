import React, { useState } from "react";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState([
		"Make the bed",
		"Brush my teeth",
		"Make food",
	]);

	const deleteTodo = (idToDelete) => {
		setTodos((currentTodos) =>
			currentTodos.filter((todo) => todo.id !== idToDelete)
		);
	};
	return (
		<div className="text-center mt-5">
			<input
				type="text"
				onChange={(e) => setTodo(e.target.value)}
				value={[...todo, currentTodos]}
			/>
			<button onClick={deleteTodo} />
		</div>
	);
};

export default Home;
