/**
 * Created by Jono on 17 02 21.
 */

import {loadEmployees} from './employeeService';

test('loadEmployees should return some data', () => {
  loadEmployees().then(employees => console.log(employees));
})

