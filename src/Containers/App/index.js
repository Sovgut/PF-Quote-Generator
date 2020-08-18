import React, { Component } from "react"
import styles from "./App.module.css"

import { quotesStorage } from "./storage/quotes"
import Quote from "../../Components/Quote"

class App extends Component {
  state = {
    selectedQuote: null,
    firstLinearColor: `rgb(255, 255, 255)`,
    secondLinearColor: `rgb(255, 255, 255)`,
    deg: 45,
  }

  componentDidMount() {
    this.nextQuote()
  }

  nextColor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
  }

  nextDeg() {
    return Math.floor(Math.random() * 360)
  }

  nextQuote = () => {
    const index = Math.floor(Math.random() * quotesStorage.length)
    this.setState({
      selectedQuote: quotesStorage[index],
      firstLinearColor: this.nextColor(),
      secondLinearColor: this.nextColor(),
      deg: this.nextDeg(),
    })
  }

  render() {
    const {
      selectedQuote,
      deg,
      firstLinearColor,
      secondLinearColor,
    } = this.state
    if (!selectedQuote) return null

    console.log(
      `linear-gradient(${deg}, ${firstLinearColor}, ${secondLinearColor})`
    )
    return (
      <div
        className={styles.root}
        style={{
          background: `linear-gradient(${deg}deg, ${firstLinearColor}, ${secondLinearColor})`,
        }}
      >
        <Quote
          content={selectedQuote.quoteText}
          author={selectedQuote.quoteAuthor}
          onNext={this.nextQuote}
        />
      </div>
    )
  }
}
export default App
