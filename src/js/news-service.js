export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
     }

    fetchArticles(searchQuery) {
        console.log(this);
        const options = {
            headers: {
                Authorization: 'e716f8e9f4f24672a7f4cad11d604d9d',
            },
        };

        const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
            fetch(url, options)
            .then(r => r.json())
                .then(data => {
                    this.page += 1;
                });
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}