// FUNCTION
function showMessage() {
  alert("Selamat datang di portofolio saya!");
}

// DATA SKILL
const skills = [
  "HTML",
  "CSS",
  "Fotografer",
  "Editor",
  "Desainer"
];

const skillContainer = document.getElementById("skillContainer");

// LOOPING FOR
for (let i = 0; i < skills.length; i++) {

  let icon = "💻";

  // PENGKONDISIAN IF ELSE
  if (skills[i] === "HTML") {
    icon = "🌐";
  } else if (skills[i] === "CSS") {
    icon = "🎨";
  } else if (skills[i] === "Fotografer") {
    icon = "📸";
  } else if (skills[i] === "Editor") {
    icon = "✂️";
  } else {
    icon = "🖌️";
  }

  skillContainer.innerHTML += `
    <div class="card">
      <h3>${icon} ${skills[i]}</h3>
      <p></p>
    </div>
  `;
}