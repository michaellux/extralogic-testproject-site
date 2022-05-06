import Edit from '@/components/pages/EditFormPage';
import Filled from '@/components/pages/FilledFormPage';

const routes = [
  {
    path: '/edit',
    name: 'EditFormPage',
    component: Edit,
  },
  {
    path: '/filled',
    name: 'FilledFormPage',
    component: Filled,
  },
];
export default routes;
