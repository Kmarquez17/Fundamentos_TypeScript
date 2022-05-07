import _ from 'lodash';

const data = [
  {
    userName: 'Kevin',
    role: 'admin',
  },
  {
    userName: 'Alberto',
    role: 'vendedor',
  },
  {
    userName: 'Isa',
    role: 'vendedor',
  },
  {
    userName: 'Maria',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item)=>item.role);
console.log(rta)
