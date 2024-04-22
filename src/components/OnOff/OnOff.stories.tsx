import { action } from '@storybook/addon-actions';
import OnOff from './OnOff';
import { useState } from 'react';

export default {
  title: 'OnOff stories',
  component: OnOff
};

const callBack = action('clicked')

export const OnMode = () => <OnOff value={true} onChange={callBack} />;
export const OffMode = () => <OnOff value={false} onChange={callBack} />;
export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <OnOff value={value} onChange={setValue} />
}