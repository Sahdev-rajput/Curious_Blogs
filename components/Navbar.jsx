import React from 'react'
import Link from 'next/link'
import styles from "../styles/Navbar.module.css"

const navbar = () => {
  return (
    <>
    <main className="mainbar">
    <style jsx>
        {
            `
            .mainbar{
                margin-top:30px;
            }
            `
        }
    </style>
    <nav className={styles.mainbar}>
          <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
          </ul>
        </nav>
    </main>
    </>
  )
}

export default navbar