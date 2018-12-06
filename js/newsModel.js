import requestsLayer from './requestsLayer.js'

class newsModel {
    constructor(API_KEY,) {
        this.requestsLayer = new requestsLayer(
            `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`
        );
        this.currentChannel = null;
        this.articles = [];
    }
    async loadNews(channel,) {
        const data = await this.requestsLayer
            .request('GET', `&sources=${channel}`, );
        const { status, articles, message} = data;
        if (status === 'ok') {
            this.currentChannel = channel;
            this.articles = articles;
            return this.articles;
        } else {
            throw new Error(message);
        }
    }
}

export default newsModel;
