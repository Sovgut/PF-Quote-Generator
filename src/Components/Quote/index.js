import React from "react"
import styles from "./Quote.module.css"

/**
 * @param {{ content: string, author: string, onNext: Function }} props
 */
export default function Quote(props) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>{props.content}</div>
        <div className={styles.author}>- {props.author}</div>
      </div>
      <div className={styles.footer}>
        <button className={styles.next} onClick={props.onNext}>
          Next
        </button>
      </div>
    </div>
  )
}
