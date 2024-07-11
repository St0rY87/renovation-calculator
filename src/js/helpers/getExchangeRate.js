import { getResource } from "../services/services";

const getExchangeRate = (state, url) => {
    getResource(url)
        .then(data => {
            state.exchangeRate = Number(data[0].buy)
        })
}
export default getExchangeRate;