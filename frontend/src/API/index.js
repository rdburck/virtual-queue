import axios from 'axios';

const getCustomer = (data) => axios.get('/api/customer/data', data);
const postCustomer = (data) => axios.post('/api/customer/data', data);
const deleteCustomer = (data) => axios.delete('/api/customer/data', data);

export default {
    getCustomer,
    postCustomer,
    deleteCustomer
};

