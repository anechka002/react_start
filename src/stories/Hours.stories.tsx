import { useEffect, useState } from "react";

export default {
  title: 'Hours demo',
}

export const Hours = () => {
  console.log('Hours');
  const myDate = new Date()
  // console.log(myDate)
  let a = myDate.getHours()
  // console.log(a)
  let b = myDate.getMinutes()
  // console.log(b)
  let c = myDate.getSeconds()
  // console.log(c)
  const [counter, setCounter] = useState(c)


  useEffect(() => {
    // console.log('useEffect first render and every counter change')
    setInterval(() => {
      // console.log('tick: ' + counter)
      setCounter(prev => prev + 1)
    }, 1000)
  }, [c])

  return <>
    Time: {a}:{b}:{c} 
  </>
}