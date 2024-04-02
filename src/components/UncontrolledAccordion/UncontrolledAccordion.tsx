import React, { useState } from 'react'

type AccordionPropsType = {
  titleValue: string
  // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log('Accordion rendering');

  let [collapsed, setCollapsed] = useState(true)
  console.log("collapsed: ", collapsed)
  return (
    <div>
      <AccordionTitle title={props.titleValue}/>
      <button onClick={()=>{setCollapsed(false)}}>TOGGLE</button>
      {collapsed === false && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  // console.log('AccordionTitle rendering');
  return (
    <h1>==={props.title}===</h1>
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