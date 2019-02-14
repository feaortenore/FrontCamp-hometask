import { Source } from '../models/source.model';

export let news: Source[] = [
    {
        id: "1",
        name: "test",
        isInternal: false,
        list: [
            {
                id: "1",
                heading: "1"
            },
            {
                id: "2",
                heading: "2"
            },
            {
                id: "3",
                heading: "3"
            },
            {
                id: "4",
                heading: "4"
            },
            {
                id: "5",
                heading: "5"
            }
        ]
    },
    {
        id: "my_news",
        name: "my_news_test",
        isInternal: true,
        list: [
            {
                id: "10",
                heading: "m1"
            },
            {
                id: "9",
                heading: "m2"
            },
            {
                id: "8",
                heading: "m3"
            },
            {
                id: "7",
                heading: "m4"
            },
            {
                id: "6",
                heading: "m5"
            }
        ]
    }
];
