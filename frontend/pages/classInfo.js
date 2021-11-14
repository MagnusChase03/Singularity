import styles from '../styles/ClassInfo.module.css'
import navStyle from '../styles/Nav.module.css'
import Head from 'next/head'
import Link from 'next/link'
import SearchForm from './components/searchForm'
const appName = 'Singularity'

export default function ClassInfo() {
  return (
    <div>
      <Head>
        <title>{appName}</title>
        <meta name="description" content="We got kicked out of our room so we made this!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/main.css" />
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

          <div class="container-fluid">

            <div class="row">

              <div class="col-sm-1"></div>

              <div class="col-sm-10" id="content">

                <h1>Class Information</h1><hr />

                <SearchForm />

              </div>

              <div class="col-sm-1"></div>

            </div>

        </div>

      </main >

      <footer className={navStyle.footer}>
        <h5>Created at HackUTD</h5>
        <a href="https://github.com/MagnusChase03/Hackathon">Github</a>
      </footer>
    </div >
  )
}
