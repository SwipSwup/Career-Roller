const title = document.getElementById("career-title");
const place = document.getElementById("career-place");
const desc = document.getElementById("career-desc");

let courses = [];

window.onload = () => fetchData('../../resources/Careers.json');

function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.map(course => courses.push(new Course(
                course["Titel"],
                course["Place"],
                course["Description"]
            )));
        })
}

function setRandomJob() {
    const rdmCourse = courses[Math.floor(Math.random() * courses.length)];
    title.innerHTML = rdmCourse.getTitle();
    place.innerHTML = rdmCourse.getPlace();
    desc.innerHTML = rdmCourse.getDesc();
}

class Course {
    constructor(title, place, description) {
        this.title = title;
        this.place = place;
        this.description = description;
    }

    getTitle = () => this.title;

    getPlace = () => this.place;

    getDesc = () => this.description;
}