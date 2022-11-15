const baseURL = 'http://localhost:9000/api/planets'


export const postPlanetData = (payload) =>{
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-type': 'application/json' }
    })
    .then(res => res.json())
}