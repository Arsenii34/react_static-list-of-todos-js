
export const TodoList = ({todosFromServer, usersFromServer}) => {
  return (
     <section className="TodoList">
    {todosFromServer.map(todo =>
    <TodoInfo
      users={usersFromServer}
      key={todo.id}
      todo={todo}
    />)}
    </section>
  )
};
