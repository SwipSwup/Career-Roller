//import {Course} from "./Course";

class CareerLoader {
    constructor(url) {
        this.courses = [];

        this.loadJson(url).then(data => {
            data.map(course => this.courses.push(new Array(
                course.title,
                course.place,
                course.description
            )));
        }).then(() => console.log(this.courses))
    }

    loadJson(url) {
        return fetch(url)
            .then(response => response.json())
            .then(data => data);
    }

    getData() {
        return this.courses;
    }
}
