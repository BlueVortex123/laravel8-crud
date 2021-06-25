/*
import EmployeesIndex from './components/employees/Index';
import EmployeesCreate from './components/employees/Create';
import EmployeesEdit from './components/employees/Edit';
*/





export const routes = [
    {
        path: '/employees',
        name: 'EmployeesIndex',
        component: require('./components/employees/Index.vue').default 
       
    },

    {
        path: '/employees/create',
        name: 'EmployeesCreate',
        component: require('./components/employees/Create.vue').default        
    },

    {
        path: '/employees/:id',
        name: 'EmployeesEdit',
        component: require('./components/employees/Edit.vue').default        
    },


];