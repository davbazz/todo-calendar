import { useState, useEffect } from "react"

const storedTodos = localStorage.getItem("todos")

function Todos() {
    const [inputText, setInputText] = useState('')
	const [todoId, setTodoId] = useState(0)
	const [todos, setTodos] = useState(
        storedTodos
        ? JSON.parse(storedTodos) 
        : [ { text: "Buy milk", id: -3, done: false },
            { text: "Wash a car", id: -2, done: false },
            { text: "Send an email", id: -1, done: false }]
    )

	const addTodo = () => {
        if (inputText.length > 0) {
            setTodos((todo:string) => [{text: inputText, id: todoId, done: false}, ...todo])
		    setTodoId(() => todoId + 1)
            setInputText('')
        }
	}

    const addTodoOnEnter = (event:any) => {
        if (event.key === "Enter") return addTodo()
    }

	const deleteTodo = (i:number) => {
		setTodos(() => todos.filter((todo:any) => todo.id !== i))
	}

    const completed = () => {

    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [addTodo, deleteTodo])


    return (
        <div className="mx-auto w-[20rem]">
            <h1 className="text-center text-5xl text-[#213547] font-semibold">TODOS</h1>
            <div className="flex justify-center items-center gap-[2rem] mt-8">
                <input 
                    type="text"
                    value={inputText}
                    onKeyUp={addTodoOnEnter}
                    onChange={e => setInputText(e.target.value)}
                    className="block border-[1px] border-[#213547] rounded-lg h-[2.4rem] w-[14rem] px-4 py-2 focus:outline-none"
                />
                <button 
                    onClick={addTodo}
                    className="block border-[1px] border-[#213547] rounded-lg h-[2.4rem] w-[4rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 16 16"
                        className="bi bi-cloud-plus w-6 h-6 fill-[#213547] mx-auto">
                        <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                    </svg>
                </button>
            </div>
            <ul className="flex flex-col gap-4 mt-12">
				{todos.map((todo:any) => (
                    <li key={todo.id} className="flex justify-between">
                        {/*<div onClick={completed}></div>*/}
                        <p className="max-w-[85%]">{todo.text}</p>
                        <button 
                            onClick={() => deleteTodo(todo.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 16 16"
                                className="bi bi-trash3 w-4 h-4 fill-[#213547]">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>   
                        </button>
                    </li>
				))}
			</ul>
        </div>
    )
}

export default Todos 