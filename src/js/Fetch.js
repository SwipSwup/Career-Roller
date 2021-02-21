class Fetch {
     constructor(url) {
         let tmp;
        fetch(url)
            .then(url => url.json())
            .then(data => console.log(data))
            .catch(console.error(url + ' is an invalid url'));
        this.data = tmp;
    }

    getJsonArray() {
         console.log(this.data);
         return JSON.stringify(this.data);
    }
}