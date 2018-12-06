class requestsLayer  {
    constructor(url, ){
        this.url = url;
    }
    async request(type, query, body, ){
        const request = {
            method : type,
        };
        if (body) {
            request.body = JSON.stringify(body);
        }
        const response = await fetch(this.url + query, request);
        const data = await response.json();
        return data;
    }
}

export default requestsLayer;
