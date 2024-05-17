import React from "react"
import { useMemo, useState } from "react"

export default {
  title: 'useMemo'
}

export const DifficultCountingExample = () => {
  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resA = 1;
  let resB = 1;

  resA = useMemo(() => {
    let tempResA = 1;
    for (let index = 1; index <= a; index++) {
      let fake = 0;
      while(fake < 1000000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResA = tempResA * index
    }
    return tempResA;
  }, [a])

  for (let index = 1; index <= b; index++) {
    resB = resB * index
  }
  return (
    <>
    <input onChange={(e)=>{setA(+e.currentTarget.value)}} />
    <input onChange={(e)=>{setB(Number(e.currentTarget.value))}} />
    <hr />
    <div>Result for a: {resA}</div>
    <div>Result for b: {resB}</div>
    </>
  )
}

const UsersSecret = (props: {users: Array<string>}) => {
  // console.log('users')
  return (
    <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
  )
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
  // console.log('HelpsToReactMemo')
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(['Anna', 'Valera', 'Artem', 'Kosty'])

  const newArray = useMemo(() => {
    const newArr = users.filter(u => u.toLowerCase().indexOf('a') > -1)
    return newArr
  }, [users])

  const addUser = () => {
    const newUser = [...users, 'Alex' + new Date().getTime()]
    setUsers(newUser)
    // console.log(1);
  }

  return (
    <>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={addUser}>add user</button>
    {count}   
    <Users users={newArray}/>
    </>
  )
}