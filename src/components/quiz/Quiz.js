import React from "react";

import "./Quiz.css";

class Quiz extends React.Component {

    state = {
        questions:
            [
                {
                    question: "What is my first name?",
                    answers: ["Diana", "Maria", "Nico"],
                    correctAnswer: "Nico"
                },
                {
                    question: "Which are my studies?",
                    answers: ["pharmacy", "law", "psichology"],
                    correctAnswer: "law"
                },
                {
                    question: "What do I like?",
                    answers: ["sweet", "sour", "tea"],
                    correctAnswer: "sweet"
                }
            ],
        index: -1,
        guessedAnswersCount: 0,
        savedValueFromRadio: ""
    }

    getNextQuestion = () => {
        if (this.state.index >= 0 && this.state.index <= this.state.questions.length - 1) {
            if (this.state.savedValueFromRadio === this.state.questions[this.state.index].correctAnswer) {
                this.setState({ guessedAnswersCount: this.state.guessedAnswersCount + 1 });
            }
        }
        this.setState({ index: this.state.index + 1 });
    }

    getAnswerValue = (event) => {
        this.setState({ savedValueFromRadio: event.target.value })
    }


    render() {

        let currentState = this.state.questions[this.state.index];
        let content;

        if (this.state.index === -1) {
            content = <button onClick={this.getNextQuestion} className="custom-styled-btn">Start quiz</button>;
        } else if (this.state.index >= 0 && this.state.index <= this.state.questions.length - 1) {
            content = <div>
                
                <p>{currentState.question}</p>

                <input type="radio" name="answer" value={currentState.answers[0]} id="quest1"
                    onChange={this.getAnswerValue}></input>
                <label for="quest1">{currentState.answers[0]}</label>

                <input type="radio" name="answer" value={currentState.answers[1]}
                    onChange={this.getAnswerValue}></input>
                <label for="quest2">{currentState.answers[1]}</label>

                <input type="radio" name="answer" value={currentState.answers[2]}
                    onChange={this.getAnswerValue}></input>
                <label for="quest3">{currentState.answers[2]}</label>

                <button className="custom-styled-btn" onClick={this.getNextQuestion}>
                    {this.state.index === this.state.questions.length - 1 ? 'See Result' : 'Next question'}
                </button>

            </div>
        } else {
            content = <p>You guessed {this.state.guessedAnswersCount} out of 3.</p>
        }


        return (
            <div>
                <div className="quiz-container animated heartBeat">
                    <p className="quiz-title">How well do you know me after reading my CV?</p>
                    {content}
                </div>
            </div>
        )
    }
}

export default Quiz;