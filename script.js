const gradingMode = () => document.getElementById('grading-mode').value;

const labelImageData = [
  { label: 'Heart', x: 200, y: 180, correctX: 120, correctY: 100 },
  { label: 'Lung', x: 200, y: 60, correctX: 210, correctY: 80 },
];

const freeTextData = [
  { text:'Trail of Semen, 1st is Part, 2nd is Function'},
  { question: 'S', answer: 'Seminiferous Tubules' },  // Part question
  { question: 'S', answer: 'Sperm Created' },         // Function question
  { question: 'R', answer: 'Rete Testes' },
  { question: 'R', answer: 'Transport' },
  { question: 'E', answer: 'Efferent Ducts' },
  { question: 'E', answer: 'Transport' },
  { question: 'E', answer: 'Epididymis' },
  { question: 'E', answer: 'Long-Term Storage' },
  { question: 'V', answer: 'Vas Deferens' },
  { question: 'V', answer: 'Transport' },
  { question: 'A', answer: 'Ampulla' },
  { question: 'A', answer: 'Short-Term Storage' },
  { question: 'S', answer: 'Seminal Vesicle' },
  { question: 'S', answer: 'Adds Fructose' },
  { question: 'E', answer: 'Ejaculatory Ducts' },
  { question: 'E', answer: 'Propels Semen' },
  { question: 'P', answer: 'Prostate Gland' },
  { question: 'P', answer: 'Activates Tails' },
  { question: 'B', answer: 'Bulbourethral Gland' },
  { question: 'B', answer: 'Cleans Urethra' },
  { question: 'U', answer: 'Urethra' },
  { question: 'U', answer: 'Transport' },
  {text: 'Male Hormones'},
  { question: '1.', answer: 'Androgen' },
  { question: '2.', answer: 'Testosterone' },

  { text: 'Composition of Seminal Fluids' },
  { question: '1.', answer: 'Water' },
  { question: '2.', answer: 'Protein' },
  { question: '3.', answer: 'Salt' },
  { question: '4.', answer: 'Mucin' },
  { question: '5.', answer: 'Fructose' },
  { question: '6.', answer: 'Semen' },

  { text: 'Functions of Semen' },
  { question: '1.', answer: 'Protection' },
  { question: '2.', answer: 'Lubrication' },
  { question: '3.', answer: 'Activation' },
  { question: '4.', answer: 'Nutrition' },
  { question: '5.', answer: 'Transport' }
];

const mcqData = [
  { question: 'What is the purpose of the scrotum?', options: ['To regulate temperature', 'To protect sperm', 'To produce hormones'], answer: 'To regulate temperature' },
  { question: 'What is the main function of the Dartos Muscle?', options: ['Squeezes to make it a tight package', 'Relaxes to allow scrotum to stay away from the body', 'Stores sperm'], answer: 'Squeezes to make it a tight package' },
  { question: 'Which of the following is NOT a function of the scrotum?', options: ['Regulating temperature', 'Protecting sperm', 'Producing testosterone'], answer: 'Producing testosterone' },

  { question: 'Where does sperm get created?', options: ['Seminiferous Tubules', 'Epididymis', 'Vas Deferens'], answer: 'Seminiferous Tubules' },
  { question: 'What part is responsible for sperm storage long-term?', options: ['Epididymis', 'Ampulla', 'Seminal Vesicle'], answer: 'Epididymis' },
  { question: 'Which part of the male reproductive system is responsible for adding fructose to sperm?', options: ['Seminal Vesicle', 'Prostate Gland', 'Bulbourethral Gland'], answer: 'Seminal Vesicle' },

  { question: 'What is the function of the Prostate Gland?', options: ['Activates tails of sperm', 'Produces semen', 'Protects sperm'], answer: 'Activates tails of sperm' },

  { question: 'Which part of the male reproductive system cleans the urethra and reduces acidity?', options: ['Bulbourethral Gland', 'Prostate Gland', 'Epididymis'], answer: 'Bulbourethral Gland' },

  { question: 'Testicular torsion occurs when the testicles become twisted. True or False?', options: ['True', 'False'], answer: 'True' },

  { question: 'What hormone is primarily produced in the Leydig cells of the testes?', options: ['Testosterone', 'Estrogen', 'Progesterone'], answer: 'Testosterone' },

  { question: 'What is the primary purpose of the penis?', options: ['Reproduction, urination, and pleasure', 'Sperm storage', 'Regulating temperature'], answer: 'Reproduction, urination, and pleasure' },

  { question: 'The scrotum must maintain a temperature of 1-3º below core body temperature for sperm to live. True or False?', options: ['True', 'False'], answer: 'True' },

  { question: 'What part of the male reproductive system is responsible for transporting sperm from the testes to the urethra?', options: ['Vas Deferens', 'Seminal Vesicle', 'Epididymis'], answer: 'Vas Deferens' },

  { question: 'The testicle is large and white in appearance. True or False?', options: ['True', 'False'], answer: 'True' },

  { question: 'Which part of the male reproductive system is responsible for short-term sperm storage?', options: ['Ampulla', 'Seminal Vesicle', 'Epididymis'], answer: 'Ampulla' },

  { question: 'What part produces androgens like testosterone?', options: ['Leydig cells in the Interstitial Tissue', 'Sertoli cells', 'Semen'], answer: 'Leydig cells in the Interstitial Tissue' },
  { question: 'What part of the male reproductive system stores sperm for long-term?', options: ['Epididymis', 'Seminiferous Tubules', 'Vas Deferens'], answer: 'Epididymis' },
  { question: 'Which part of the male reproductive system is involved in the transport of sperm?', options: ['Vas Deferens', 'Seminal Vesicle', 'Ampulla'], answer: 'Vas Deferens' },
  { question: 'What is the main function of the Sertoli Cells?', options: ['Provides nutrients to sperm', 'Produces testosterone', 'Activates sperm'], answer: 'Provides nutrients to sperm' },
  { question: 'Which of the following is a function of the Bulbourethral Gland?', options: ['Cleans the urethra', 'Activates sperm', 'Adds fructose'], answer: 'Cleans the urethra' },

  { question: 'Testicular torsion requires immediate treatment to avoid permanent damage. True or False?', options: ['True', 'False'], answer: 'True' },

  { question: 'Where does sperm mature?', options: ['Epididymis', 'Vas Deferens', 'Seminal Vesicle'], answer: 'Epididymis' },

  { question: 'Which part of the male reproductive system adds fructose to sperm?', options: ['Seminal Vesicle', 'Prostate Gland', 'Bulbourethral Gland'], answer: 'Seminal Vesicle' },

  { question: 'The prostate gland is responsible for the production of semen. True or False?', options: ['True', 'False'], answer: 'False' },

  { question: 'What does the Ampulla function as in the male reproductive system?', options: ['Short-term sperm storage', 'Sperm production', 'Sperm transport'], answer: 'Short-term sperm storage' },

  { question: 'Which part of the male reproductive system helps in sperm activation?', options: ['Prostate Gland', 'Seminal Vesicle', 'Epididymis'], answer: 'Prostate Gland' }

];

// --- Render Functions ---
const toggleBtn = document.getElementById("toggle-image-btn");
const diagramImg = document.getElementById("diagram-img");

toggleBtn.addEventListener("click", () => {
  if (diagramImg.src.includes("anatomydiagram.png")) {
    diagramImg.src = "answerkey.png";
    toggleBtn.textContent = "Show Diagram";
  } else {
    diagramImg.src = "anatomydiagram.png";
    toggleBtn.textContent = "Show Answer Key";
  }
});

function renderFreeText() {
  const section = document.getElementById('free-text-section');


  freeTextData.forEach((item, index) => {
    const block = document.createElement('div');
    block.className = 'free-text-block';

    if (item.question) {
      const question = document.createElement('div');
      question.className = 'question';
      question.textContent = item.question;

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'free-input';  // Add this line
      input.dataset.index = index;

      input.oninput = () => {
        if (gradingMode() === 'instant') checkFreeText(input);
      };

      block.appendChild(question);
      block.appendChild(input);
    } else if (item.text) {
      const info = document.createElement('div');
      info.className = 'info-text';
      info.textContent = item.text;
      block.appendChild(info);
    }

    section.appendChild(block);
  });
}

function checkFreeText(input) {
  const index = input.dataset.index;
  const correct = freeTextData[index].answer.toLowerCase();
  const user = input.value.trim().toLowerCase();

  if (user !== correct) {
    input.classList.add('wrong');  // Add wrong class
    if (gradingMode() != 'instant') {
      input.value = freeTextData[index].answer;  // Show the correct answer
    }
  } else {
    input.classList.remove('wrong');  // Remove wrong class if correct
    input.classList.add('correct');  // Add correct class if user input is correct
  }
}

function renderMCQ() {
  const section = document.getElementById('mcq-section');
  mcqData.forEach((item, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'mcq-block';
    wrapper.innerHTML = `<div>${item.question}</div>`;
    item.options.forEach(option => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="radio" name="mcq-${index}" value="${option}" />
        ${option}
      `;
      label.querySelector('input').onchange = (e) => {
        if (gradingMode() === 'instant') checkMCQ(index);
      };
      wrapper.appendChild(label);
    });
    section.appendChild(wrapper);
  });
}

function checkMCQ(index) {
  const selected = document.querySelector(`input[name="mcq-${index}"]:checked`);
  if (!selected) return;
  const correct = mcqData[index].answer;
  selected.parentElement.classList.toggle('correct', selected.value === correct);
  selected.parentElement.classList.toggle('wrong', selected.value !== correct);
}

// --- Grading ---
function gradeQuiz() {
  if (gradingMode() === 'instant') return;

    document.querySelectorAll('.free-input').forEach(input => checkFreeText(input));
  mcqData.forEach((_, i) => checkMCQ(i));
}

// --- Init ---

renderFreeText();
renderMCQ();
