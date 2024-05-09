import React, { KeyboardEvent, useEffect, useState } from 'react'
import s from './Select.module.css'

type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  value?: any
  onChange: (value: any) => void
  items: ItemType[]
}

export function Select(props: SelectPropsType) {
  const [active, setActive] = useState(false)
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])

  const selectedItem = props.items.find(el => el.value === props.value )

  const hoveredItem = props.items.find(el => el.value === hoveredElementValue )

  const toggleItems = () => {
    setActive(!active)
  }
  const onItemClicked = (value: any) => {
    props.onChange(value)
    toggleItems()
  }

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if(e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let index = 0; index < props.items.length; index++) {
        if(props.items[index].value === hoveredElementValue) {
          const pretendentElement = e.key === "ArrowDown"
            ? props.items[index + 1]
            : props.items[index - 1]

          if(pretendentElement) {
            props.onChange(pretendentElement.value)
            return;
          }
        }
      }
      if(!selectedItem) {
        props.onChange(props.items[0].value)
      }
    }

    if(e.key === "Enter" || e.key === "Escape") {
      setActive(false)
    }
  }

  return (
    <>
      <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
        {
          active && 
            <div className={s.items}>
              {props.items.map(el => <div 
                onMouseEnter={() => {setHoveredElementValue(el.value)}}
                className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                key={el.value}
                onClick={() => {onItemClicked(el.value)}}
                // onClick={() => {props.onChange(el.value); toggleItems()}}
                >{el.title}</div>)}
            </div>
        }
      </div>
    </>
  )
}

