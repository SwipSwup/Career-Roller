let title;
let place;
let desc;

let courses;

window.onload = () => {
    courses = [];

    title = document.getElementById("career-title");
    place = document.getElementById("career-place");
    desc = document.getElementById("career-desc");

    fetchData('../../resources/Careers.json');
}

function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => data)
        .then(data => {
            data.map(course => courses.push(new Course(
                course["Titel"],
                course["Place"],
                course["Description"]
            )));
        })
}

function setRandomJob() {
    const course = courses[Math.floor(Math.random() * courses.length)];
    title.innerHTML = course.getTitle();
    place.innerHTML = course.getPlace();
    desc.innerHTML = course.getDesc();
}

class Course {
    constructor(title, place, description) {
        this.title = title;
        this.place = place;
        this.description = description;
    }

    getTitle() {
        return this.title;
    }

    getPlace() {
        return this.place;
    }

    getDesc() {
        return this.description;
    }
}