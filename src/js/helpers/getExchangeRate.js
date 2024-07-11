import { getResource } from "../services/services";

const getExchangeRate = (state, url) => {
    getResource(url)
        .then(data => {
            state.exchangeRate = Number(data[0].buy) || 0;
            console.log(state)
        })
}
export default getExchangeRate;