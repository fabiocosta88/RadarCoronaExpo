import axios from 'axios';
import { endpointsNews } from '../../shared/global';

export default async function getTopNewsBr() {
    const apiKey = '0f0ecd6476234a62b8661b1be945b153';
    const qinTitle = 'covid';
    const domains = 'terra.com.br,globo.com';
    const pageSize = '10';
    const sortBy = 'publishedAt';
    try {
        const {
            host,
            routes: { topCoronaNewsBr },
        } = endpointsNews;
        const response = await axios.get(`${host}${topCoronaNewsBr}`, {
            params: {
                qinTitle,
                apiKey,
                pageSize,
                domains,
                sortBy,
            },
        });
        return response.data.articles;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
