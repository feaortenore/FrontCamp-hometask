import { News } from './news.model';

export interface Source {
    id: string;
    name: string;
    isInternal: boolean;
    list?: News[]; 
};
