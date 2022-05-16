import axios from 'axios';

const domicilieService = axios.create({
    baseURL: 'https://627d8c954268bf47ad4c5bb8.mockapi.io/api/kation',

    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});

export const saveDomicilie = (domicilie) => {
    return domicilieService.post('Domicilie', { ...domicilie })
}

export const getDomicilie = () => {
    return domicilieService.get("Domicilie");
}



