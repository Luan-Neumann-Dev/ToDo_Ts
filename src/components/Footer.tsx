import React from 'react'
import Styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
        <p>
            <span>React + TS / To Do</span> @2024
        </p>
        <p>Luan Henrique Neumann</p>
    </footer>
  )
}

export default Footer