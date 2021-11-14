import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'

const appName = 'Singularity'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>{appName}</title>
                <meta name="description" content="We got kicked out of our room so we made this!" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/css/bootstrap.css" />
                <link rel="stylesheet" href="/css/main.css" />
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

                            <h1>About Us</h1>
                            <hr />
                            <p>
                                Our team, <b>Won</b>, is consisted of three members<b> Kevin Harvey, Kolbe Mosher, and Zachary Ness</b>.
                                We are a group of dedicated programmers who love what we do, so participating in the Hackathon was a given.
                                Though we were the first group to arrive and got an amazing room setup, our room had to be used for sponsers
                                due to the fact that the police did not unlock all of the rooms needed. Our goal was to create an app that
                                would be general enough to help all students at UTD.
                            </p><br /><br />

                            <div class="container-fluid">

                                <div class="row">

                                    <div class="col-sm-4">

                                        <img src="assets/Zach.jpg" /><br />

                                    </div>
                                    <div class="col-sm-8">

                                        <h3>Zachary Ness</h3><hr />
                                        <p>
                                            Yo, I'm Zachary Ness. I am a freshman majoring in computer science, and I have been programming
                                            on Linux since I was six year old. This is all due to my father being a software developer and
                                            wanting to get me into programming. Once I was introduced to coding, I just could not get enough
                                            of it. To this day, I still use Arch Linux and am constatly trying to learn more level programming.
                                            Recently, I have been learning x86 assembly to help build on my understanding to write better C code.
                                        </p>

                                    </div>

                                </div><br /><br />
                                <div class="row">

                                    <div class="col-sm-8">

                                        <h3>Kevin Harvey</h3><hr />
                                        <p>
                                            I'm a freshman Computer Science major passionate about software development and networking. 
                                            In my free time I enjoy tinkering with my 3D printer and creating animations in Blender. In the future
                                            I hope to spend my days as a software engineer and nights as a hobbyist of all things technology.
                                        </p>

                                    </div>
                                    <div class="col-sm-4">

                                        <img src="assets/kevin.jpg" id="kevin" /><br />

                                    </div>

                                </div><br /><br />
                                <div class="row">

                                    <div class="col-sm-4">

                                        <img src="assets/kolbe.jpg" /><br />

                                    </div>
                                    <div class="col-sm-8">

                                        <h3>Kolbe Mosher</h3><hr />
                                        <p>
                                            Hi My Name is Kolbe, Mosher, I am a freshman computer science major, and I mainly code in python and nodejs. 
                                            In my freetime I enjoy working on side projects and playing video games.
                                            I started programming when I was about 12 and used a raspberry pi for all my python scripts.
                                        </p>

                                    </div>

                                </div>


                            </div>

                        </div>

                        <div class="col-sm-1"></div>

                    </div>

                </div>

            </main>

            <footer className={navStyle.footer}>
                <h5>Created at HackUTD</h5>
                <a href="https://github.com/MagnusChase03/Hackathon">Github</a>
            </footer>
        </div>
    )
}