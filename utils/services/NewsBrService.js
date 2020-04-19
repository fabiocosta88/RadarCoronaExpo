import axios from 'axios';
import { endpointsNews } from '../../shared/global';

export default async function getTopNewsBr() {
    const apiKey = '0f0ecd6476234a62b8661b1be945b153';
    const q = 'covid OR corona';
    const language = 'pt';
    const domains = 'globo.com,terra.com.br';
    const pageSize = '20';
    try {
        const {
            host,
            routes: { topCoronaNewsBr },
        } = endpointsNews;
        const response = await axios.get(`${host}${topCoronaNewsBr}`, {
            params: {
                apiKey,
                q,
                language,
                domains,
                pageSize,
            },
        });
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
