function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.querySelectorAll('.details-container').forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('active');
    });
});

// For projects
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        project.classList.toggle('active');
    });
});

// For courses
document.querySelectorAll('.course').forEach(course => {
    course.addEventListener('click', () => {
        course.classList.toggle('active');
    });
});