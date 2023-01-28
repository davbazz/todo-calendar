import { useState } from "react"

function Todos() {
    const [inputText, setInputText] = useState('')
	const [todoId, setTodoId] = useState(0)
	const [todos, setTodos] = useState([
		{text: "Buy milk", id: -3, active: true},
		{text: "Wash a car", id: -2, active: true},
		{text: "Send as email", id: -1, active: true},
	])
	const [deletedTodos, setDeletedTodos] = useState(0)

	const addTodo = () => {
		setTodos((todo) => [...todo, {text: inputText, id: todoId, active: true}])
		setTodoId(() => todoId + 1)
	}

	const deleteTodo = (i:number) => {
		setTodos(() => todos.filter(({id}) => id !== i))
		setDeletedTodos(() => deletedTodos + 1)
	}

    return (
        <div>
            <h1>TODOS</h1>
			<input 
				type="text"
				value={inputText}
				onChange={e => setInputText(e.target.value)}
			/>
			<button onClick={addTodo}>add todo</button>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<p>{todo.text}</p>
						<button 
                            onClick={() => deleteTodo(todo.id)}>
                            delete
                        </button>
					</li>
				))}
			</ul>
        </div>
    )
}

export default Todos 