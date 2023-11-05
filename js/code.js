const main = document.querySelector("#main");
const studentAreaWithoutGroups = document.querySelector(
  ".student__Area__Without__Groups"
);
const modal = document.querySelector(".modal");
const btnToggleTheme = document.getElementById("btn__Toggle__Theme");
const buttonsModal = Array.from(
  document.querySelectorAll(".btn__toggle__modal__state")
);
const icon = document.querySelector(".icon");

//FUNÇÃO PARA MUDAR O ESTADO DO MODAL
const toggleModalState = () => {
  modal.classList.toggle("active");
};

buttonsModal.map((button) => {
  button.addEventListener("click", toggleModalState);
});

//FUNÇÃO PARA ALTERAR O TEMA
const toggleTheme = () => {
  document.body.classList.toggle("dark");

  const iconType = {
    moon: "./img/moon.svg",
    sun: "./img/sun-dim.svg",
  };

  const { moon, sun } = iconType;

  let isDarkMood = icon.getAttribute("src") == moon;

  if (isDarkMood) {
    return icon.setAttribute("src", sun);
  }
  return icon.setAttribute("src", moon);
};

btnToggleTheme.addEventListener("click", toggleTheme);

//LISTA DOS ESTUDANTES
const STUDENTS = [
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


//GERANDO ESTUDANTES ALEATÓRIOS
for (let i = 0; i < 6; i++) {
  for (const groupName in GROUPS) {
    if (GROUPS[groupName].length < 6) {
      const randomNumber = Math.floor(Math.random() * STUDENTS.length);
      GROUPS[groupName].push(STUDENTS[randomNumber]);
      STUDENTS.splice(randomNumber, 1);
    }
  }
}

//FUNÇÃO PARA GERAR GRUPOS DE ESTUDANTES
const generateGroup = (groupName) => {
  let groupCreated = document.createElement("nav");
  groupCreated.className = "group";

  let group = document.createElement("h2");
  group.textContent = "Grupo ".concat(groupName);

  groupCreated.appendChild(group);

  return groupCreated;
};

//FUNÇÃO PARA GERAR ESTUDANTES
const generateStudent = (studant) => {
  let createdStudent = document.createElement("li");
  createdStudent.textContent = studant.name;

  return createdStudent;
};

//REPRESENTAÇÃO DOS GRUPOS GERADOS
for (const groupName in GROUPS) {
  let groupCreated = generateGroup(groupName);

  GROUPS[groupName].forEach((student) => {
    let newStudent = generateStudent(student);

    groupCreated.appendChild(newStudent);

    main.appendChild(groupCreated);
  });
}

//REPRESENTAÇÃO DOS ESTUDANTES SEM GRUPO
const listStudentsWithoutGroup = () => {
  STUDENTS.forEach((estudante) => {
    let student = document.createElement("li");
    student.textContent = estudante.name;

    studentAreaWithoutGroups.appendChild(student);
  });
};

listStudentsWithoutGroup();