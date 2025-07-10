import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || []
    setTodos(savedTodos)
  }, [])

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleAdd = () => {
    if (todo.trim() === "") return
    setTodos([...todos, { todo, isCompleted: false }])
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  const handleEdit = (index) => {
    setEditIndex(index)
    setTodo(todos[index].todo)
  }

  const handleUpdate = () => {
    if (todo.trim() === "") return
    const updatedTodos = [...todos]
    updatedTodos[editIndex].todo = todo
    setTodos(updatedTodos)
    setEditIndex(null)
    setTodo("")
  }

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos]
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted
    setTodos(updatedTodos)
  }

  return (
    <>
      <Navbar />

      <div className="container max-w-[90%] mx-auto my-5 rounded-xl p-3 bg-violet-400 min-h-[80vh] shadow-xl">
        <h2 className="addTodo text-lg font-bold text-white">Add a Todo</h2>

        {}
        <div className="flex flex-wrap gap-3 mt-2">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Add Todo"
            className="flex-1 min-w-[200px] rounded-2xl bg-white px-5 py-2"
          />

          {editIndex === null ? (
            <button
              onClick={handleAdd}
              className="bg-violet-800 hover:bg-violet-950 px-4 py-2 text-sm font-bold text-white rounded-md"
            >
              Add
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="bg-violet-800 hover:bg-violet-950 px-4 py-2 text-sm font-bold text-white rounded-md"
            >
              Update
            </button>
          )}
        </div>

        <h2 className="text-lg font-bold my-5 text-white">Your todos</h2>

        {todos.length === 0 && <div className="text-white">No todos to display</div>}

        {todos.map((item, index) => (
          <div key={index} className="todo bg-violet-500 p-3 my-2 rounded-md">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className={item.isCompleted ? "line-through text-white" : "text-white"}>
                {item.todo}
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleToggleComplete(index)}
                  className="bg-violet-800 hover:bg-violet-950 px-3 py-1 text-sm font-bold text-white rounded-md"
                >
                  {item.isCompleted ? "Uncheck" : "Check"}
                </button>

                <button
                  onClick={() => handleEdit(index)}
                  className="bg-violet-800 hover:bg-violet-950 px-3 py-1 text-sm font-bold text-white rounded-md"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(index)}
                  className="bg-violet-800 hover:bg-violet-950 px-3 py-1 text-sm font-bold text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Cards />
    </>
  )
}

export default App


