import { action } from '@storybook/addon-actions';

import UncontrolledAccordion from './UncontrolledAccordion';

export default {
  title: 'UncontrolledAccordion stories',
  component: UncontrolledAccordion,
};

export const CollapsedAccordion = () => {
  return <UncontrolledAccordion titleValue='UncontrolledAccordion'/>
}