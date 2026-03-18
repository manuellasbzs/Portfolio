function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener("scroll", function () {
    const elementos = document.querySelectorAll(".cartao-projeto");

    elementos.forEach(el => {
        const posicaoTopo = el.getBoundingClientRect().top;
        const alturaJanela = window.innerHeight * 0.8;

        if (posicaoTopo < alturaJanela) {
            el.classList.add("show");
        }
    });
});
