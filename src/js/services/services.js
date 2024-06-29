console.log('hello from services')
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'apllication/json'
        },
        body: data
    })

    return await res.json();
}

const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`couldn't get data, status response is ${res.status}`)
    }
    return await res.json();
}
export default postData;
export { getResource };