const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        const id = link.getAttribute('href').substring(1);
        const section = document.getElementById(id);

        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
            });
        }
    })
})