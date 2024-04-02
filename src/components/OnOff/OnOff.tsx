import React, { useState } from 'react'

function OnOff() {
  console.log('OnOff rendering');

  let [value, setValue] = useState(false)
  console.log('value:', value)

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: value ? 'green' : 'white'
  }
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    margin: '2px',
    backgroundColor: value ? 'white' : 'red'
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    border: '1px solid black',
    borderRadius: '50%',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: value ? 'green' : 'red',
    marginLeft: '5px',
  }
  return (
    <div>
      <div onClick={()=>{setValue(true)}} style={onStyle}>on</div>
      <div onClick={()=>{setValue(false)}} style={offStyle}>off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}

export default OnOff