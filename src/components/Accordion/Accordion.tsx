import React, { useState } from 'react';

type ItemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
  // console.log('Accordion rendering');
  
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {props.collapsed === false && <AccordionBody onClick={props.onClick} items={props.items} />}
    </div>
  )
}
// function Accordion2(props: AccordionPropsType) {
//   // console.log('Accordion rendering');
//   if(props.collapsed) {
//     return (
//       <div>
//         <AccordionTitle title={props.titleValue}/>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <AccordionTitle title={props.titleValue}/>
//         <AccordionBody />
//       </div>
//     )
//   }
// }

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
  // console.log('AccordionTitle rendering');
  return (
    <h3 onClick={(e)=>props.onChange()}>==={props.title}===</h3>
  )
}

type AccordionBodyType = {
  items: ItemType[]
  onClick: (value: any) => void
}

function AccordionBody({items, onClick}: AccordionBodyType) {
  // console.log('AccordionBody rendering');
  return (
    // <ul>
    //   {items.map((el, index) => <li onClick={() => onClick(el.value)} key={index}>{el.title}</li>)}
    // </ul>
      // <List numbers={numbers}/>
      <List items={items} onClick={onClick}/>
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
  // numbers: NumbersType[]
  items: ItemType[]
  onClick: (value: any) => void
}
function List(props: ListPropsType) {
  return (
    <>
      <ul>
        {props.items.map((n)=>{
          return (          
              <li onClick={() => props.onClick(n.value)} key={n.value}>{n.title}</li>                  
          )
        })}
      </ul>
    </>
  )
}

export default Accordion;