import axios from 'axios';
import { endpointsNews } from '../../shared/global';

export default async function getTopNewsBr() {
    const apiKey = '693d7fef99a2444c9aff590e9f9ee574';
    const q = 'covid OR corona';
    const language = 'pt';
    const domains = 'globo.com,terra.com.br';
    const pageSize = '20';
    const sortBy = 'publishedAt';
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
                sortBy,
            },
        });
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
