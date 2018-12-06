import newsModel from './newsModel.js'

const API_KEY = '1d143d74c3f949b287751439d8842708';

class newsProxy {
    constructor(errorContainer,) {
        this.newsModel = new newsModel(API_KEY,);
        this.errorContainer = errorContainer;
        this.lodingChannel = null;
    }
    async loadNews(channel,) {
        try {
            if (!channel) {
                throw new Error('No channel selected');
            } else if (this.lodingChannel) {
                throw new Error(
                    `Now we are loading the news for 
                    '${this.lodingChannel}' 
                    wait till the end of loading`);
            } else if (this.newsModel.currentChannel === channel) {
                throw new Error(`News for '${channel}' already loaded`);
            } else {
                this.lodingChannel = channel;
                const articles = await this.newsModel.loadNews(channel,);
                this.lodingChannel = null;
                return articles;
            }
        } catch(error) {
            this.lodingChannel = null;
            const errorHandlerSingelton = require('./errorHandlerSingelton.js').default;
            errorHandlerSingelton().errorHandler(error, this.errorContainer);
        }
    }
}

export default newsProxy;
