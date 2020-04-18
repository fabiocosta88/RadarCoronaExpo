import axios from 'axios';
import { endpointsCoronaVale } from '../../shared/global';

export default async function getValeTotals(city) {
    try {
        const {
            host,
            routes: { cities },
        } = endpointsCoronaVale;
        const response = await axios.get(`${host}${cities}${city}.json`);
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
