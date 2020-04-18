import axios from 'axios';
import { endpointsNews } from '../../shared/global';

export default async function getTopNewsBr() {
    const apiKey = '0f0ecd6476234a62b8661b1be945b153';
    const pageSize = '15';
    const sources = 'globo'
    try {
        const {
            host,
            routes: { topCoronaNewsBr },
        } = endpointsNews;
        const response = await axios.get(`${host}${topCoronaNewsBr}`, {
            params: {
                apiKey,
                pageSize,
                sources
            },
        });
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
