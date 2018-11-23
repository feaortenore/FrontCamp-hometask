const apiKey = '1d143d74c3f949b287751439d8842708';
const newsElement = document.getElementById('news-container');

class newsContainer {
    constructor() {
        this.channel = '';
    }
    /*getNews() {
        [...newsElement.childNodes].forEach(el => el.remove());
        const url = `https://newsapi.org/v2/top-headlines?sources=${
            this.channel
        }&apiKey=${apiKey}`;
        this.loadNews(url,).then(data => {
            const {status, articles, message, ...rest} = data;
            if (status === 'ok') {
                for (let article of articles) {
                    newsElement.appendChild(this.createArticle(article));
                }
            } else {
                const messageElement = document.createElement('h3');
                messageElement.innerHTML = message;
                newsElement.appendChild(messageElement);
            }
        });
    }
    async loadNews(url,) {
        new Promise()
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }*/
    //removed bocouse of async issues till the webpack added
    getNews() {
        [...newsElement.childNodes].forEach(el => el.remove());
        const url = `https://newsapi.org/v2/top-headlines?sources=${
            this.channel
        }&apiKey=${apiKey}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {status, articles, message, ...rest} = data;
                if (status === 'ok') {
                    for (let article of articles) {
                        newsElement.appendChild(this.createArticle(article, ));
                    }
                } else {
                    const messageElement = document.createElement('h3');
                    messageElement.innerHTML = message;
                    newsElement.appendChild(messageElement);
                }
            });
    }
    setChannel(value, ) {
        this.channel = value;
    }
    createArticle(article, ) {
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

window.container = new newsContainer();
