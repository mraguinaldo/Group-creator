const main = document.querySelector("#main");
const rest = document.querySelector(".rest");
const modal = document.querySelector(".modal");
const openModal = document.querySelector("#open__Modal");
const closeModal = document.querySelector("#close__Modal");

openModal.addEventListener("click", () => {
  modal.classList.toggle("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.toggle("active");
});

const ESTUDANTES = [
  { id: 0, name: "Agostinho Cambriz" },
  { id: 1, name: "Catarino Ribeiro" },
  { id: 2, name: "Adilson Miguel" },
  { id: 3, name: "Edgar Barros" },
  { id: 4, name: "Daniel Gustavo" },
  { id: 5, name: "Aristides Gongo" },
  { id: 6, name: "Sérgio Garcia" },
  { id: 7, name: "Leví Hernandes" },
  { id: 8, name: "João Tembo" },
  { id: 9, name: "José João" },
  { id: 10, name: "Eduardo Lelo" },
  { id: 11, name: "Nguinamau Afonso" },
  { id: 12, name: "Jacinta Tchilala" },
  { id: 13, name: "Josimar" },
  { id: 14, name: "Ernesto Ramiro" },
  { id: 15, name: "Conceição Calunga" },
  { id: 16, name: "Svénia Domingos" },
  { id: 17, name: "Samuel Máquina" },
  { id: 18, name: "Vladimiro Pinto" },
  { id: 19, name: "Edgelson Damião" },
  { id: 20, name: "Cristovão Tchipuapua" },
  { id: 21, name: "António Mendes" },
  { id: 22, name: "José Ferreira" },
  { id: 23, name: "José Massaki" },
  { id: 24, name: "Gelson Saúl" },
  { id: 25, name: "Josiane De Jesus" },
  { id: 26, name: "Neusa Dala" },
  { id: 27, name: "Tabita Eduardo" },
  { id: 28, name: "Jemima Iyani" },
  { id: 29, name: "Edmar Mátias" },
  { id: 30, name: "Simão Domingos" },
  { id: 31, name: "Geovane Ambriz" },
  { id: 32, name: "Manuel Guange" },
  { id: 33, name: "Isabel António" },
  { id: 34, name: "Mara Buila" },
  { id: 35, name: "Ana Maria" },
  { id: 36, name: "Edgar Rafael" },
  { id: 37, name: "Horácio " },
];

const GROUPS = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
};

for (let i = 0; i < 6; i++) {
  for (const groupName in GROUPS) {
    if (GROUPS[groupName].length < 6) {
      const randomNumber = Math.floor(Math.random() * ESTUDANTES.length);
      GROUPS[groupName].push(ESTUDANTES[randomNumber]);
      ESTUDANTES.splice(randomNumber, 1);
    }
  }
}

for (const groupName in GROUPS) {
  console.log(groupName);
  let divGroup = document.createElement("nav");
  divGroup.className = "group";

  let group = document.createElement("h2");
  group.textContent = "Grupo ".concat(groupName);

  divGroup.appendChild(group);

  GROUPS[groupName].forEach((estudante) => {
    console.log(estudante);
    let aluno = document.createElement("li");
    aluno.textContent = estudante.name;

    divGroup.appendChild(aluno);

    main.appendChild(divGroup);
  });
}

ESTUDANTES.forEach((estudante) => {
  let aluno = document.createElement("li");
  aluno.textContent = estudante.name;

  rest.appendChild(aluno);
});