import { action } from '@storybook/addon-actions';

import Accordion from './Accordion';
import { useState } from 'react';

export default {
  title: 'Accordion stories',
  component: Accordion
};

const onChangeHandler = action('onChange')
const onClickCallback = action('clicked')

export const CollapsedAccordion = () => {
    return <Accordion 
      onClick={onClickCallback}
      items={[]}
      titleValue={'Collapsed Accordion'} 
      collapsed={true} 
      onChange={ onChangeHandler }
  />
}

export const OpenedAccordion = () => {
  return <Accordion 
    items={[{title: 'Anna', value: 1}, {title: 'Victor', value: 2}]}
    onClick={onClickCallback}
    titleValue={'Opened Accordion'} 
    collapsed={false} 
    onChange={ onChangeHandler }
  />
}

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false)
  return <Accordion 
    items={[{title: 'Anna', value: 1}, {title: 'Victor', value: 2}]}
    // onClick={onClickCallback}
    onClick={(value) => {alert(`po mne s id:${value} click `)}}
    titleValue={'Accordion'} 
    collapsed={collapsed} 
    onChange={ () => {
    setCollapsed(!collapsed)
    } }
  />
}