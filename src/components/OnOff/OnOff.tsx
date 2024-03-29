import React from 'react'

type OnOffPropsType = {
  value: true | false
}

function OnOff(props: OnOffPropsType) {
  return (
    <>
    {props.value ? <Button selected={true}/> : <Button selected={false}/>}
    </>
  )
}

type ButtonPropsType = {
  selected: boolean
}
function Button (props: ButtonPropsType) {
  
      if(props.selected) {
        return (
          <div style={{display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '10px'}}>
            <button style={{backgroundColor: 'green'}}>on</button>
            <button>off</button>
            <div style={{backgroundColor: 'green', borderRadius: '50%', width: '15px', height: '15px'}}></div>
          </div>
        )     
      } else {
        return (
          <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
            <button>on</button>
            <button style={{backgroundColor: 'red'}}>off</button>
            <div style={{backgroundColor: 'red', borderRadius: '50%', width: '15px', height: '15px'}}></div>
          </div>
        )
      }
  
}

export default OnOff