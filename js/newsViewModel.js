import newsProxy from './newsProxy.js'

class newsViewModel {
    constructor() {
        this.channel = '';
        this.newsContainer = document.getElementById('news-container');
        this.errorContainer = document.getElementById('error-container');
        this.newsProxy = new newsProxy(this.errorContainer,);
    }
    getNews() {
        [...this.errorContainer.childNodes].forEach(el => el.remove());
        this.newsProxy.loadNews(this.channel,)
            .then(articles => {
                if(articles){
                    [...this.newsContainer.childNodes].forEach(el => el.remove());
                    for(let article of articles) {
                        this.createArticleElement(article,);
                    }
                }
            });
    }
    setChannel(value,) {
        this.channel = value;
    }
    createArticleElement(article,) {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
        <h1>${article.title}</h1>
        ${article.author ? `<h4>By ${article.author}</h4>` : ''}
        <h4>${article.publishedAt}</h4>
        <h3>${article.description}</h3>
        <p>${article.content}</p>
        `;
        this.newsContainer.appendChild(articleElement);
    }
}

export default newsViewModel;
