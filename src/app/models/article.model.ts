export interface Article {
    _id?: string;
    author?: string;
    title: string;
    description?: string;
    url: string;
    urlToImage?: string;
    publishedAt: string | Date;
    content?: string;
}
