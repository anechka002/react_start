import { ChangeEvent, useState } from "react";
import { Select } from "./Select";
import { action } from '@storybook/addon-actions';

export default {
  title: 'Select stories', 
  component: Select
};

export const WithValue = () => {
  const [value, setValue] = useState('2')

  return (
    <div>
      <Select 
        items={[
          {title: 'Minsk', value: '1'},
          {title: 'Moscow', value: '2'},
          {title: 'Kiev', value: '3'},
        ] }
        value={value} 
        onChange={setValue}
      />
    </div>
  )
}

export const WithoutValue = () => {
  const [value, setValue] = useState(null)
  return (
    <Select 
        items={[
          {title: 'Minsk', value: 1},
          {title: 'Moscow', value: 2},
          {title: 'Kiev', value: 3},
        ]}
        value={value}
        onChange={setValue}
      />
  )
}