const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');

// SAMPLE QUESTIONS
const quizQuestions = [
    {
        question: "1. A vehicle fails an emissions test due to a rich fuel mixture. Which component is MOST likely causing the condition?",
        answers: {
            a: "Faulty oxygen sensor",
            b: "Weak fuel pump",
            c: "Vacuum leak",
            d: "Restricted catalytic converter"
        },
        correctAnswer: "a"
    },
    {
        question: "2. A customer states the engine misfires under load. Which tool should be used FIRST?",
        answers: {
            a: "Fuel pressure gauge",
            b: "Compression tester",
            c: "Scan tool live data",
            d: "Digital multimeter"
        },
        correctAnswer: "c"
    },
    {
        question: "3. Technician A says worn spark plug electrodes can cause a weak spark. Technician B says incorrect plug heat range can cause detonation. Who is correct?",
        answers: {
            a: "Tech A",
            b: "Tech B",
            c: "Both A and B",
            d: "Neither A nor B"
        },
        correctAnswer: "c"
    },
    {
        question: "4. A vehicle exhibits slow cranking after sitting overnight. Battery tests good. What is the NEXT step?",
        answers: {
            a: "Check for parasitic draw",
            b: "Replace starter motor",
            c: "Load-test alternator",
            d: "Inspect battery cables"
        },
        correctAnswer: "a"
    },
    {
        question: "5. Which condition would MOST likely cause overheating at idle but normal temperature at highway speeds?",
        answers: {
            a: "Restricted radiator",
            b: "Sticking thermostat",
            c: "Inoperative cooling fan",
            d: "Air in cooling system"
        },
        correctAnswer: "c"
    },
    {
        question: "6. A vehicle with electronic throttle has poor acceleration. Which should be inspected first?",
        answers: {
            a: "Mass airflow sensor",
            b: "Throttle body carbon buildup",
            c: "Fuel filter restriction",
            d: "MAP sensor hose"
        },
        correctAnswer: "b"
    },
    {
        question: "7. A transmission slips only when hot. Which is the MOST likely cause?",
        answers: {
            a: "Low ATF level",
            b: "Torque converter clutch failure",
            c: "Faulty shift solenoid",
            d: "Worn clutch packs"
        },
        correctAnswer: "d"
    },
    {
        question: "8. A grinding noise occurs when braking and turning left. Which component is MOST suspect?",
        answers: {
            a: "Left hub bearing",
            b: "Right hub bearing",
            c: "Front brake pads",
            d: "CV axle"
        },
        correctAnswer: "a"
    },
    {
        question: "9. A battery keeps draining overnight. Tech finds a 500mA draw. What is an acceptable spec?",
        answers: {
            a: "5–20 mA",
            b: "50–80 mA",
            c: "150–200 mA",
            d: "300–500 mA"
        },
        correctAnswer: "a"
    },
    {
        question: "10. A vehicle pulls right under braking. Which is MOST likely?",
        answers: {
            a: "Sticking right caliper",
            b: "Sticking left caliper",
            c: "Air in brake system",
            d: "Low brake fluid"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const output = [];

    quizQuestions.forEach((q, index) => {
        const answers = [];

        for (letter in q.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${index}" value="${letter}">
                    ${letter}: ${q.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${q.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    let numCorrect = 0;

    quizQuestions.forEach((q, index) => {
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (document.querySelector(selector) || {}).value;

        if (userAnswer === q.correctAnswer) {
            numCorrect++;
        }
    });

    resultsContainer.innerHTML = `You scored ${numCorrect} out of ${quizQuestions.length}.`;
}

buildQuiz();
submitBtn.addEventListener('click', showResults);
