// Add the required props
export const TodoInfo = ({todo, users}) =>{
  return (
   <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
        <h2 className="TodoInfo__title">{todo.title}</h2>
        {users.map(user => user.id === todo.userIdс ? (
         <UserInfo
           user={user}
         />)
         : null
        )

        }
      </article>


  )
};
