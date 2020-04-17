import axios from 'axios';
import { endpointsCoronaVale } from '../../shared/global';

export default async function getValeTotals() {
    try {
        const {
            host,
            routes: { valeTotals },
        } = endpointsCoronaVale;
        const response = await axios.get(`${host}${valeTotals}`);
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
