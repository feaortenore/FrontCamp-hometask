import '../sass/main.sass';
import newsContainer from './newsContainer.js'

const API_KEY = '1d143d74c3f949b287751439d8842708';
const newsElement = document.getElementById('news-container');

window.container = new newsContainer(newsElement, API_KEY,);
