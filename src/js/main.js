const title = document.getElementById("career-title");
const place = document.getElementById("career-place");
const desc = document.getElementById("career-desc");

let courses = [];

window.onload = () => fetchData('../../resources/careers.json');

function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => data.map(course => courses.push(course)))
}

function setRandomJob() {
    const rdmCourse = courses[Math.floor(Math.random() * courses.length)];
    title.innerHTML = rdmCourse['Titel'];
    place.innerHTML = rdmCourse['Province'];
    desc.innerHTML = rdmCourse['Description'];
}