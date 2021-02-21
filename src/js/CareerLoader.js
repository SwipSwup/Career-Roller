//import {Course} from "./Course";

class CareerLoader {
    constructor(url) {
        this.courses = [];

        this.loadJson(url).then(data => {
            data.map(course => this.courses.push(new Course(
                course["Titel"],
                course["Place"],
                course["Description"]
            )));
            // console.log(data);
            // console.log(Object.keys( data[1]));
            // console.log(data[1]["Titel"]);
            // for (let index in data) {
            //     console.log()
            //}
            // console.log(course.place),
            // console.log(course.description),

        }).then(() => console.log(this.courses))
    }

    loadJson(url) {
        return fetch(url)
            .then(response => response.json())
            .then(data => data);
    }

    async getRandomCourse() {
        return this.courses[Math.floor(Math.random() * this.courses.length)];
    }
}

class Course {
    constructor(title, place, description) {
        this.title = title;
        this.place = place;
        this.description = description;
    }
}
