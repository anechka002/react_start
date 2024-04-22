import { action } from '@storybook/addon-actions';

import UncontrolledOnOff from './UncontrolledOnOff';

export default {
  title: 'UncontrolledOnOff stories',
  component: UncontrolledOnOff,
};

const onChangeHandler = action('onChange')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={onChangeHandler}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={onChangeHandler}/>


