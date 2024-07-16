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
    console.log('component rendered with ')
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


  useEffect(() => {
    // console.log('useEffect first render and every counter change')
    const interval = setInterval(() => {
      // console.log('tick: ' + counter)
      setCounter(prev => prev + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return <>
    Hello!  
    {/* <button onClick={() => {setFake(prev => prev + 1)}}>fake+</button> */}
    fake: {fake}
    {/* <button onClick={() => {setCounter(prev => prev + 1)}}>counter+</button> */}
    counter: {counter}
  </>
}

export const ResetIntervalExample = () => {
  
  const [counter, setCounter] = useState(0)
  
  console.log('ResetIntervalExample ' + counter);

  useEffect(() => {
    console.log('useEffect ' + counter)

    return () => {
      console.log('сбросить эффект ' + counter)
    }
  }, [counter])
  
  const onClickHandler = () => {
    // debugger
    setCounter(prev => prev + 1)
  }

  return <>
    Hello!  counter: <button onClick={onClickHandler}>{counter}</button>  
  </>
}

export const KeysTrackerExample = () => {
  
  const [text, setText] = useState('')

  console.log('KeysTrackerExample ' + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key)
      setText(text + e.key)
    }

    window.addEventListener('keypress', handler)

    return () => {
      window.removeEventListener('keypress', handler)
    }
  }, [text])

  return <>
    Type text: {text} 
  </>
}

export const SetTimeoutExample1 = () => {
  
  const [text, setText] = useState('')

  console.log('Component rendered with ' + text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('TIMEOUT EXPIRED')
      setText('3 seconds passed')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [text])

  return <>
    text: {text} 
  </>
}

