import { kanji } from "./data.js"
const form = document.querySelector("#form")
const hint = document.querySelector("#hint")
const userAnswer = document.querySelector("input")
const description = document.querySelector("#description")
const checkButton = document.querySelector("#checkButton")
const correctAnswer = document.querySelector("#correctAnswer")
let trueAnswer = 0
let remainingQuestion = document.querySelector("#remainingQuestion")
let incorrectQuestion = []

form.addEventListener("submit", (e) => {
  e.preventDefault()
})

let no = Math.floor(Math.random() * kanji.length)
remainingQuestion.textContent = kanji.length
correctAnswer.textContent = trueAnswer
hint.textContent = kanji[no].hint

const pointCount = (des, point) => {
  userAnswer.value = ""
  description.textContent = des
  trueAnswer += point
  correctAnswer.textContent = trueAnswer
  kanji[no] = kanji[kanji.length - 1]
  kanji.pop()
  no = Math.floor(Math.random() * kanji.length)
  if (kanji.length) {
    remainingQuestion.textContent = kanji.length
    hint.textContent = kanji[no].hint
  } else {
    remainingQuestion.textContent = kanji.length
    hint.textContent = "No Question"
    Swal.fire({
      title: "No Question",
      text: "Refresh The Page To Restart",
      icon: "info",
      confirmButtonText: "Ok Captain!"
    })
  }
}

checkButton.addEventListener("click", () => {
  if (userAnswer.value === kanji[no].answer) {
    Swal.fire({
      title: "Correct!",
      text: "You are correct",
      icon: "success",
      confirmButtonText: "Keep Going"
    })
    pointCount("Correct", 1)
  } else {
    Swal.fire({
      title: "Incorrect!",
      text: `The correct answer is ${kanji[no].answer}`,
      icon: "error",
      confirmButtonText: "Ok, I will remember it"
    })
    incorrectQuestion.push(kanji[no])
    console.log(incorrectQuestion)
    pointCount("Incorrect", 0)
  }
})
