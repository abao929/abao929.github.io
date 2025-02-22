import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./Quiz.module.sass"

type Question = {
  question: string
  answers: string[]
  correctIndex: number
}

let getQuestions = async () => {
  return axios.get("./quiz-data.json").then((response) => {
    console.log(response)
    return response.data
  })
}

export default function Quiz() {
  const [allQuestions, setAllQuestions] = useState<Question[][]>([])
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionIdx, setQuestionIdx] = useState(0)
  const [numCorrect, setNumCorrect] = useState(0)
  const [end, setEnd] = useState(false)

  const letterMap = new Map<number, string>([
    [0, "a"],
    [1, "b"],
    [2, "c"],
    [3, "d"],
  ])

  const checkQuestion = (idx: number, correct: number) => {
    console.log("answered: %d, correct was %d", idx, correct)
    if (idx !== correct) {
      setEnd(true)
    }
    setQuestionIdx(questionIdx + 1)
  }

  useEffect(() => {
    getQuestions().then((res) => {
      console.log(res)
      setAllQuestions(res)
    })
  }, [])
  if (end) {
    return (
      <div className={styles.container}>
        <div className={styles.endContainer}>
          <div className={styles.title}>Sorry you have lost :(</div>
        </div>
      </div>
    )
  }
  if (questions.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Who wants to be a millionaire?</div>
        <div className={styles.selectContainer}>
          {allQuestions.map((questions, i) => (
            <div
              className={styles.selectQuestion}
              onClick={() => {
                setQuestions(questions)
              }}
            >
              Quiz {i + 1}
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (questionIdx === questions.length) {
    return (
      <div className={styles.container}>
        <div className={styles.endContainer}>
          <div className={styles.title}>Congrats you won!</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.questionContainer}>
          <div className={styles.title}>Question {questionIdx + 1}</div>
          <div className={styles.question}>
            {questions[questionIdx].question}
          </div>
          <div className={styles.answers}>
            {questions[questionIdx].answers.map((answer, idx) => (
              <div
                key={idx}
                className={styles.answer}
                onClick={(e) =>
                  checkQuestion(idx, questions[questionIdx].correctIndex)
                }
              >
                {letterMap.get(idx)}.&nbsp;&nbsp;&nbsp;{answer}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
