import axios from 'axios';

export const AxiosplusAuth = axios.create({
    headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem('token')}`,
    }
})