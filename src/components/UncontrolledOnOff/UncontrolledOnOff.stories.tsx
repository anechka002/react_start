import { action } from '@storybook/addon-actions';

import UncontrolledOnOff from './UncontrolledOnOff';

export default {
  title: 'UncontrolledOnOff stories',
  component: UncontrolledOnOff,
};

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
  return <UncontrolledOnOff onChange={onChangeHandler}/>
}