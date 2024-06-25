'use client'
import styles from './page.module.css'
import { add } from 'shared-utils'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Web</h1>
      <button onClick={() => alert(add(1, 2))}>Add</button>
    </div>
  )
}
