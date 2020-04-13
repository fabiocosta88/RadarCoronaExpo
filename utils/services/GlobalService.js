import axios from "axios";
import { endpoints } from "../../shared/global";

export default async function getGlobalTotals() {
    try {
        const {
            host,
            routes: { globalTotals },
        } = endpoints;
        const response = await axios.get(`${host}${globalTotals}`);
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : "";
        return { error: msg };
    }
}
