import React, {useMemo, useState } from "react"

export default {
  title: 'useState demo',
}

function generateData() {
  console.log('generateDate')
  return 546377
}

export const Example1 = () => {
  console.log('Example');
  // const initValue = useMemo(generateData, [])
  const [counter, setCounter] = useState(generateData)

  // const changer = (prev: number) => {
  //   return prev + 1
  // }

  return <>
    <button onClick={() => {setCounter(prev => prev + 1)}}>+</button>
    {counter}
  </>
}

