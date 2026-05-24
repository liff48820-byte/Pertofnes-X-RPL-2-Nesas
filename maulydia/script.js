// Pesan saat website dibuka
window.onload = function () {
    alert("Selamat datang di website portofolio saya!");
};

// Scroll halus
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const tujuan = document.querySelector(
            this.getAttribute("href")
        );

        tujuan.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Menu aktif saat scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});