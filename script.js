let questions = [
    {
        question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, dolorum labore. Ea sequi labore, aliquid autem soluta vitae atque animi similique! Vero nihil sequi quia aut minus! Est, cupiditate praesentium.",
        option1: "Option 1 jfvjjkfvjkfjvdkjfr jefrnkrfnkrfekjnf rfrnfrekjfjbfvbv fdjkvbdkjvjdfjvd kjvjkvfbkvhvfvfvkvjkvf",
        option2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        option3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, illo?",
        option4: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis explicabo ipsum laborum perspiciatis mollitia aliquid! Minus accusamus illum corporis esse nisi quaerat, quos quae libero similique doloremque fugiat cum!",
        ans: "op2"
    },
    {
        question: "what is javascript ?",
        option1: "option 1",
        option2: "option 2",
        option3: "option 3",
        option4: "option 4",
        ans: "op3"
    },
    {
        question: "how to sort an Array ?",
        option1: "option 1",
        option2: "option 2",
        option3: "option 3",
        option4: "option 4",
        ans: "op4"
    }
]

// console.log(questions[0]);
// console.log(questions[0].question);

let answersArr = document.getElementsByName("op");

let qno = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = questions[qno]
    document.querySelector("#qstn").innerText = currentQuizData.question;
    document.querySelector("label[for='op1']").innerText = currentQuizData.option1;
    document.querySelector("label[for='op2']").innerText = currentQuizData.option2;
    document.querySelector("label[for='op3']").innerText = currentQuizData.option3;
    document.querySelector("label[for='op4']").innerText = currentQuizData.option4;

    if (qno == questions.length - 1) {
        document.querySelector("#submitBtn").innerText = "Submit";
    }

}

function deselectAnswers() {
    answersArr.forEach(answer => answer.checked = false)
}

function getSelected() {
    let answer

    answersArr.forEach(ans => {
        if (ans.checked) {
            answer = ans.id
        }
    })

    return answer
}

document.querySelector("#submitBtn").addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === questions[qno].ans) {
            score++
        }

        qno++

        if (qno < questions.length) 
        {
            loadQuiz()
        } 
        else 
        {
            document.querySelector("#qstn").innerHTML = `
                You answered ${score}/${questions.length} questions correctly
                <button  onclick="location.reload()">Reload</button>
            `
            document.querySelector("form").style.display = "none";

        }
    }
})