import axios from 'axios';
import { endpointsNews } from '../../shared/global';

export default async function getTopNewsBr() {
    const country = 'br';
    const apiKey = '0120b718a9734ca990ad1f8e1b087fe7';
    const category = 'health';
    const pageSize = '10';
    try {
        const {
            host,
            routes: { topCoronaNewsBr },
        } = endpointsNews;
        const response = await axios.get(`${host}${topCoronaNewsBr}`, {
            params: {
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
