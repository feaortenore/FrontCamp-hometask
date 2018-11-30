class newsContainer {
    constructor(newsElement, API_KEY,) {
        this.channel = '';
	this.newsElement = newsElement;
        this.API_KEY = API_KEY;
    }
    getNews() {
        [...this.newsElement.childNodes].forEach(el => el.remove());
        const url = `https://newsapi.org/v2/top-headlines?sources=${
            this.channel
        }&apiKey=${this.API_KEY}`;
        this.loadNews(url,).then(data => {
            const { status, articles, message, ...rest } = data;
            if (status === 'ok') {
                for (let article of articles) {
                    this.newsElement.appendChild(this.createArticle(article,));
                }
            } else {
                const messageElement = document.createElement('h3');
                messageElement.innerHTML = message;
                this.newsElement.appendChild(messageElement);
            }
        });
    }
    async loadNews(url,) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    setChannel(value,) {
        this.channel = value;
    }
    createArticle(article,) {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
        <h1>${article.title}</h1>
        ${article.author ? `<h4>By ${article.author}</h4>` : ''}
        <h4>${article.publishedAt}</h4>
        <h3>${article.description}</h3>
        <p>${article.content}</p>
        `;
        return articleElement;
    }
}

export default newsContainer;