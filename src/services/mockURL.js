import axios from 'axios';

const domicilieService = axios.create({
    baseURL: 'https://627d8c954268bf47ad4c5bb8.mockapi.io/api/kation',

    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});

export default{
    getEvents(){
        return domicilieService.get("Domicilie");
    },
};

