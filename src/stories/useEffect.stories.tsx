import React, {useEffect, useMemo, useState } from "react"

export default {
  title: 'useEffect demo',
}

export const SimpleExample = () => {
  console.log('SimpleExample');

  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)

  // useEffect(() => {
  //   // debugger
  //   console.log('useEffect')
  //   document.title = counter.toString()
  //   // api.getUsers().then('')
  //   // setInterval
  //   // indexedDB
  //   // document.getElementId
  //   // document.title = 'User '
  // }, [])

  useEffect(() => {
    // debugger
    console.log('useEffect every time') // useEffect срабатывает всегда после отрисовки
    document.title = counter.toString()
  })

  useEffect(() => {
    console.log('useEffect only first render (componentDidMount)') // useEffect срабатывает только первый рендер
    document.title = counter.toString()
  }, [])

  useEffect(() => {
    console.log('useEffect first render and every counter change') // useEffect срабатывает в первый рендер и при изменении counter
    document.title = counter.toString()
  }, [counter])

  return <>
    Hello  
    <button onClick={() => {setFake(prev => prev + 1)}}>fake+</button>
    {fake}
    <button onClick={() => {setCounter(prev => prev + 1)}}>counter+</button>
    {counter}
  </>
}

export const SetTimeoutExample = () => {
  console.log('SetTimeoutExample');

  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)


  useEffect(() => {
    console.log('useEffect first render and every counter change')
    setTimeout(() => {
      console.log('setTimeout')
      document.title = counter.toString()
    }, 1000)
  }, [counter])

  return <>
    Hello  
    <button onClick={() => {setFake(prev => prev + 1)}}>fake+</button>
    {fake}
    <button onClick={() => {setCounter(prev => prev + 1)}}>counter+</button>
    {counter}
  </>
}

export const SetIntervalExample = () => {
  console.log('SetIntervalExample');

  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)


  // useEffect(() => {
  //   console.log('useEffect first render and every counter change')
  //   setInterval(() => {
  //     console.log('tick: ' + counter)
  //     setCounter(prev => prev + 1)
  //   }, 1000)
  // }, [])

  return <>
    Hello!  
    {/* <button onClick={() => {setFake(prev => prev + 1)}}>fake+</button> */}
    fake: {fake}
    {/* <button onClick={() => {setCounter(prev => prev + 1)}}>counter+</button> */}
    counter: {counter}
  </>
}

