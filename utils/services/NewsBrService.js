import axios from 'axios';
import { endpointsNews } from '../../shared/global';

export default async function getTopNewsBr() {
    const q = 'corona';
    const country = 'br';
    const apiKey = '0f0ecd6476234a62b8661b1be945b153';
    const category = 'health';
    const pageSize = '10';
    try {
        const {
            host,
            routes: { topCoronaNewsBr },
        } = endpointsNews;
        const response = await axios.get(`${host}${topCoronaNewsBr}`, {
            params: {
                q,
                country,
                apiKey,
                category,
                pageSize,
            },
        });
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
