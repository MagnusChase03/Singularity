import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'
import pic from '../public/assets/dallas.png'

const appName = 'Singularity'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{appName}</title>
        <meta name="description" content="We got kicked out of our room so we made this!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={navStyle.navBar}>
        <ul>
          <li className={navStyle.navTitle}><a href='/'><img className={navStyle.logo} src="/assets/logo.png"></img></a></li>
          <li><Link href='/classInfo'><a>Class Information</a></Link></li>
          <li><Link href='/studentOrgs'><a>Student Organizations</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
        </ul>
      </nav>

      <main className={styles.main}>
        <Image 
        src={pic}
        height={600} // Desired size with correct aspect ratio
        width={1000} // Desired size with correct aspect ratio
        alt="Dallas Skyline"
        />
        <h1>Welcome to {appName}!</h1>
        <h3>We're happy to see you!</h3>
      </main>

      <footer className={navStyle.footer}>
        <h5>Created at HackUTD</h5>
        <a href="https://github.com/MagnusChase03/Hackathon">Github</a>
      </footer>
    </div>
  )
}
