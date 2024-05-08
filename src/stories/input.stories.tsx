// exportimport { Button } from './Button';
import React, { ChangeEvent, useRef, useState } from 'react'
import {action} from '@storybook/addon-actions'
import OnOff from '../components/OnOff/OnOff';

export default {
  title: 'input', 
  // component: OnOff
};

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value
    setValue(actualValue)
  }

  return <>
    <input onChange={onChange} /> actual value: - {value} </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return <>
    <input ref={inputRef}  /> <button onClick={save}>save</button> - actual value: {value} </>
}

export const ControlledInputWithFixedValue = () => <input value={'Hello'}/>;

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
  const [value, setValue] = useState(true)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked)
  }

  return <input type='checkbox' checked={value} onChange={onChange}/>
  // return <input type='checkbox' checked={value} onChange={action('xochu')}/>
}

export const ControlledSelect = () => {
  const [value, setValue] = useState<string | undefined>(undefined)

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <select value={value} onChange={onChange}>
      <option>none</option>
      <option value={'1'}>Minsk</option>
      <option value={'2'}>Moskow</option>
      <option value={'3'}>Kiev</option>
    </select>
  )
}

