const quizData = [
    {
        question: "Which of the following best describes Gender Inequality?",
        options: [
            "A discrimination known for unequal treatment among genders",
            "It shows how unequal the number in population of people who have different genders",
            "It is the same as Cyberbullying",
            "It makes people think they have no impact in their life."
        ],
        correct: 0
    },
    {
        question: "Here are the characteristics of Gender Inequality EXCEPT:",
        options: ["Concerning", "Hate", "Peace", "Discrimination"],
        correct: 2
    },
    {
        question: "Which SDG focuses on Gender Equality?",
        options: ["SDG 1", "SDG 5", "SDG 4", "SDG 13"],
        correct: 1
    },
    {
        question: "What do girls have limited access to?",
        options: ["Love", "Money", "Violence", "Education"],
        correct: 3
    },
    {
        question: "What is an example of Gender Inequality?",
        options: [
            "Unequal payment among the two different genders",
            "More love among individuals",
            "Men and Women playing the same sports",
            "Shared responsibilities at home"
        ],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContent = document.getElementById("myQuiz");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");
const quizSection = document.getElementById("quiz");
const resultsSection = document.getElementById("results");
const restartButton = document.getElementById("restart");

function displayQuestion() {
    const questionData = quizData[currentQuestionIndex];
    let optionsHtml = "";
    questionData.options.forEach((option, index) => {
        optionsHtml += `
            <li>
                <button onclick="checkAnswer(${index})">${option}</button>
            </li>
        `;
    });

    quizContent.innerHTML = `
        <div class="question">${questionData.question}</div>
        <ul class="options">${optionsHtml}</ul>
    `;

    
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = true;
    submitButton.disabled = currentQuestionIndex !== quizData.length - 1;
}

function checkAnswer(selected) {
    const questionData = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll(".options button");

    buttons.forEach((button, index) => {
        if (index === questionData.correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        button.disabled = true; 
    }); 



    if (selected === questionData.correct) {
        score = score + 1;
    }

    
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
});

prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});

submitButton.addEventListener("click", () => {
    quizSection.classList.remove("active");
    resultsSection.classList.add("active");

    let resultMessage = `You scored ${score} out of ${quizData.length}. `;
    if (score === 5) {
        resultMessage += "That is a perfect score! Excellent Work!";
    } else if (score === 4) {
        resultMessage += "Good job!";
    } else if (score === 3) {
        resultMessage += "That is the passing score!";
    } else {
        resultMessage += "Please try again.";
    }
    resultsSection.textContent = resultMessage;
});

restartButton.addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    resultsSection.classList.remove("active");
    quizSection.classList.add("active");
    displayQuestion();
});


displayQuestion();