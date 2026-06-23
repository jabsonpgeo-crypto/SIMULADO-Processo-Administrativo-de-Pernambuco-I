const quizData = [
    {
        question: "Qual é a capital do Brasil?",
        a: "São Paulo",
        b: "Rio de Janeiro",
        c: "Brasília",
        d: "Salvador",
        correct: "c"
    },
    {
        question: "Qual linguagem de programação é usada para interatividade web?",
        a: "HTML",
        b: "CSS",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Qual destes animais é um mamífero?",
        a: "Pinguim",
        b: "Canguru",
        c: "Jacaré",
        d: "Salmão",
        correct: "b"
    }
];

// Seletores do DOM
const quizContainer = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

// Função que carrega a pergunta atual
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// Função para desmarcar os botões de rádio entre as perguntas
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Função para capturar a alternativa selecionada
function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// Lógica de clique no botão "Enviar"
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
        // Verifica se a resposta está correta
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        
        currentQuiz++;
        
        // Avança para a próxima pergunta ou exibe o resultado
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `
                <h2>Você respondeu corretamente ${score}/${quizData.length} questões!</h2>
                <button onclick="location.reload()">Refazer Quiz</button>
            `;
        }
    }
});
