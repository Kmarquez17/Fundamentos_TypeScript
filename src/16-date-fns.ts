import { subDays, format } from 'date-fns';

const date = new Date(1997, 6, 1);
const rta = subDays(date,30);
const str = format(rta, 'dd/MM/yyyy');

console.log(rta)
console.log(str)