import React from "react"
import { useState } from "react"

export default {
  title: 'React.memo demo'
}

const Counter = (props: {count: number}) => {
  return (
    <div>{props.count}</div>
  )
}

const UsersSecret = (props: {users: Array<string>}) => {
  // console.log('users')
  return (
    <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
  )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
  // console.log('Example1')
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(['Anna', 'Valera', 'Artem'])


  const addUser = () => {
    const newUser = [...users, 'Alex' + new Date().getTime()]
    setUsers(newUser)
    // console.log(1);
  }

  return (
    <>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={addUser}>add</button>
    <Counter count={count}/>
    <Users users={users}/>
    </>
  )
}