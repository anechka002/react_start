import React, { useState } from 'react'

type AccordionPropsType = {
  titleValue: string
  // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
  // console.log('Accordion rendering');

  let [collapsed, setCollapsed] = useState(true)
  // console.log("collapsed: ", collapsed)

  const onClickCollapsed = (value: boolean) => {
    setCollapsed(value)
  }

  return (
    <div>
      <AccordionTitle onClickCollapsed={() => onClickCollapsed(!collapsed)} title={props.titleValue}/>
      {/* <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button> */}
      {collapsed === false && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClickCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  // console.log('AccordionTitle rendering');
  return (
    <h3 onClick={props.onClickCollapsed}>==={props.title}===</h3>
  )
}

function AccordionBody() {
  // console.log('AccordionBody rendering');
  return (
      <List numbers={numbers}/>
  )
}

type NumbersType = {
  id: number
  num: number
}
const numbers = [
  {id: 1, num: 1},
  {id: 2, num: 2},
  {id: 3, num: 3}
]

type ListPropsType = {
  numbers: NumbersType[]
}
function List(props: ListPropsType) {
  return (
    <>
      <ul>
        {props.numbers.map((n)=>{
          return (          
              <li key={n.id}>{n.num}</li>                  
          )
        })}
      </ul>
    </>
  )
}

export default UncontrolledAccordion