function taskAllowed() {
    event.preventDefault();

    let task = document.getElementById("task").value;
    let disp = document.getElementById("dispList");

    let display = '<div><i class="fa-solid fa-circle-dot"></i>' + task + '</div>';
    
    disp.innerHTML = disp.innerHTML + display;

    document.getElementById("task").value = '';

}
        