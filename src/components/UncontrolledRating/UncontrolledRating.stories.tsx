import { action } from '@storybook/addon-actions';

import UncontrolledRating from './UncontrolledRating';

export default {
  title: 'UncontrolledRating stories',
  component: UncontrolledRating,
};

export const CollapsedAccordion = () => {
  return <UncontrolledRating/>
}