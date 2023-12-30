let arr = [];

const subCourses = () => {
    event.preventDefault();

    let courses = document.getElementById("cource").value;

    arr.push(courses);

    let print;

    print = print + '<ul>'

    arr.map((v, i) => {
        print = print + '<li>' + v + ' <button onclick="remove()">r</button></li>';
    });

    print = print + '</ul>'


    document.getElementById("displayCourses").innerHTML = print;

    document.getElementById("cource").value = '';

}

const remove = (i) => {
    arr.splice(i, 1);
    subCourses();
}
