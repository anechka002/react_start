import React, { useState } from 'react'

type UncontrolledOnOffType = {
  onChange: (value: boolean) => void
  defaultOn?: boolean 
}

function UncontrolledOnOff(props: UncontrolledOnOffType) {
  // console.log('OnOff rendering');

  let [value, setValue] = useState(props.defaultOn ? props.defaultOn : false)
  // console.log('value:', value)

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

  const onClicked = () => {
    setValue(true)
    props.onChange(true)
  }

  const offClicked = () => {
    setValue(false)
    props.onChange(false)
  }
  return (
    <div>
      <div style={onStyle} onClick={onClicked}>on</div>
      <div style={offStyle} onClick={offClicked}>off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}

export default UncontrolledOnOff