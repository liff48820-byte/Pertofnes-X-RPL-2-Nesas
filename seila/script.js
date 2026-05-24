// bagian skill
function SkillSaya() {
    const skills = [
        "Desain Kemasan Produk",
        "Membuat berbagai desain menggunakan CorelDRAW seperti kemasan produk donat. melalui proses ini, saya belajar mengatur warna, komposisis,serta menyesuaikan agar terlihat rapi dan menarik."
    ];

    let list = document.getElementById("skillList");

    for(let i = 0; i < skills.length; i++){
        setTimeout(() => {
            let li = document.createElement("li");
            li.textContent = skills[i];
            li.style.opacity = "0";
            li.style.transform = "translateY(20px)";
            li.style.transition = "0.5s";

            list.appendChild(li);

            setTimeout(() => {
                li.style.opacity = "1";
                li.style.transform = "translateY(0)";
            }, 100);

        }, i * 400);
    }
}

// pesan waktu popup 
function pesanwaktu(){
    let jam = new Date().getHours();
    let pesan = "";

    if(jam < 12){
        pesan = "🌸 Selamat pagi, semoga harimu manis seperti pink ini!";
    } else if(jam < 18){
        pesan = "☀️ Selamat siang, semangat melihat portfolio saya!";
    } else {
        pesan = "🌙 Selamat malam, terima kasih sudah berkunjung!";
    }

    alert(pesan);
}

function popupsemua() {
    const popup = document.getElementById("popup");
    const popupMedia = document.getElementById("popupMedia");
    const popupDesc = document.getElementById("popupDesc");
    const closeBtn = document.querySelector(".close");

    const items = document.querySelectorAll(".card img, .skill-box img, video");

    const deskripsi = [
        {
            title: "Kemasan Produk Donat",
            text: "Ini adalah hasil desain kemasan produk donat yang pernah saya buat. Dalam proses pembuatannya, saya belajar menyesuaikan warna, gambar, dan tampilan kemasan agar terlihat lebih menarik dan rapi. Menurut saya, membuat desain kemasan cukup menantang karena harus kreatif dalam mengatur konsep dan tampilannya, tetapi pengalaman tersebut sangat seru dan menambah pengetahuan saya tentang desain produk."
        },
        {
            title: "Pengalam Mendaki Gunung Tampomas",
            text: "Saya pernah mendaki Gunung Tampomas sebanyak tiga kali bersama teman-teman SMP. Pengalaman tersebut menjadi salah satu momen yang sangat berkesan karena kami dapat menikmati perjalanan, pemandangan alam, serta kebersamaan selama pendakian. Selain menyenangkan, kegiatan ini juga mengajarkan kerja sama, semangat, dan rasa saling membantu satu sama lain."
        },
        {
            title: "Lomba Paskibra",
            text: "Waktu masih SMP, saya pernah ikut lomba paskibra di GOR Tajimalela bersama teman-teman satu tim. Walaupun latihannya cukup melelahkan, kami tetap semangat dan saling mendukung satu sama lain. Alhamdulillah, tim kami mendapat juara Harapan 3 dan Perintis 11. Pengalaman itu jadi salah satu kenangan seru dan berkesan buat saya karena bisa belajar disiplin dan kerja sama bersama teman-teman."
        },
        {
            title: "Skill CorelDRAW",
            text: "Membuat berbagai desain menggunakan CorelDRAW seperti kemasan produk donat. melalui proses ini, saya belajar mengatur warna, komposisi, serta menyesuaikan agar terlihat rapi dan menarik."
        },
        {
            title: "Video",
            text: "Dokumentasi video"
        }
    ];

    for(let i = 0; i < items.length; i++){
        items[i].addEventListener("click", function(){

            popup.style.display = "flex";

            if(items[i].tagName === "IMG"){
                popupMedia.innerHTML =
                    `<img src="${items[i].src}">`;
            } else {
                popupMedia.innerHTML = `
                    <video controls autoplay>
                        <source src="video.mp4" type="video/mp4">
                    </video>
                `;
            }

            popupDesc.innerHTML = `
                <h3>${deskripsi[i].title}</h3>
                <p>${deskripsi[i].text}</p>
            `;
        });
    }

    closeBtn.onclick = function(){
        popup.style.display = "none";
    };

    popup.onclick = function(e){
        if(e.target === popup){
            popup.style.display = "none";
        }
    };
}
function efekketik() {
    const text = "Halo, saya Seilla Marcelina. Saya suka desain";
    const target = document.querySelector(".hero p");

    let index = 0;
    let hapus = false;

    function ketik() {
        if (!hapus) {
            target.innerHTML = text.substring(0, index);
            index++;

            if (index > text.length) {
                hapus = true;
                setTimeout(ketik, 1500); // jeda sebelum hapus
                return;
            }
        } else {
            target.innerHTML = text.substring(0, index);
            index--;

            if (index < 0) {
                hapus = false;
                index = 0;
            }
        }

        setTimeout(ketik, hapus ? 60 : 100);
    }

    ketik();
}
// ini bagian buat jalanin
SkillSaya();
pesanwaktu();
popupsemua();
efekketik();