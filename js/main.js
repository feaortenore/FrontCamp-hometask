const apiKey = '1d143d74c3f949b287751439d8842708';
const newsElement = document.getElementById('news-container');

class newsContainer {
    constructor() {
        this.channel = '';
    }
    getNews() {
        [...newsElement.childNodes].forEach(el => el.remove());     
        const url = `https://newsapi.org/v2/top-headlines?sources=${this.channel}&apiKey=${apiKey}`;
        const req = new Request(url);
        fetch(req)
            .then(response => {
                return response.json();
            })
            .then(json => {
                if(json.status === 'ok'){
                    for (let article of json.articles) {
                        newsElement.appendChild(this.createArticle(article))
                    }
                } else {
                    const messageElement = document.createElement('h3');
                    messageElement.innerHTML = json.message;
                    newsElement.appendChild(messageElement)
                }
            });
    }
    setChannel(value) {
        this.channel = value;
    }
    createArticle(article) {
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
};

window.container = new newsContainer();
