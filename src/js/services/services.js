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

const changeData = async (url, id, value) => {
    const newData = {
        id: id,
        value: value
    }
    const res = await fetch(url + id, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newData)
    });
    if (!res.ok) {
        throw new Error(`couldn't get data, status response is ${res.status}`)
    }
    else {
        return await res.json();
    }
}


export default postData;
export { getResource };
export { changeData };