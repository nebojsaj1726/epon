import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Pagination from "./Pagination";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);

  useEffect(() => {
    const fetchTodos = async () => {
      await axios
        .get("http://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          setTodos(response.data);
        })
        .catch((error) => console.log(error));
    };
    fetchTodos();
  }, []);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderTable = () => {
    return currentTodos.map((todo) => {
      return (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.title}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="text-center mb-5">Todos</h2>
        <table className="table mb-4">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
        <Pagination
          todosPerPage={todosPerPage}
          totalTodos={todos.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Todos;
