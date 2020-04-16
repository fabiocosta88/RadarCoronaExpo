import axios from 'axios';
import { endpointsCoronaTracker } from '../../shared/global';

export default async function getBrasilTotals() {
    try {
        const {
            host,
            routes: { brazilTotals },
        } = endpointsCoronaTracker;
        const response = await axios.get(`${host}${brazilTotals}`);
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
