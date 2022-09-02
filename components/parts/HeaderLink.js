import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


const HeaderLink = () => {
    return (
        <>

            <Head>


                <link href="/assets/img/favicon.png" rel="icon" />
                <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />


                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                    rel="stylesheet" />


                <link href="/assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
                <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
                <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
                <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />


                <link href="/assets/css/style.css" rel="stylesheet" />


            </Head>

            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
                    <div className="align-items-center d-none d-md-flex">
                        <i className="bi bi-clock"></i> Monday - Saturday, 8AM to 10PM
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-phone"></i> Call us now +1 5589 55488 55
                    </div>
                </div>
            </div>

            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <a href="index.html" className="logo me-auto"><img src="/assets/img/logo.png" alt="" /></a>


                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            

                            <li>
                                <Link href="/">
                                <a className="nav-link">Home</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/about">
                                <a className="nav-link">About</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/service">
                                <a className="nav-link">Service</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/pages">
                                <a className="nav-link">Pages</a>
                                </Link>
                            </li>

                            


                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            
                            <li>
                                <Link href="/contact">
                                <a className="nav-link">Contact</a>
                                </Link>
                            </li>

                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>



                    <a href="#appointment" className="appointment-btn"><span className="d-none d-md-inline">Make an</span> Appointment</a>

                </div>
            </header>

        </>



    )
}

export default HeaderLink