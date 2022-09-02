import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'

const About = () => {

    const [state, setState] = useState({
        data:[]
    })


    async function fetch_data() {
        await axios.get('http://127.0.0.1:3000/api/hello').then(resp => {
            //console.log(resp.data)
            setState({
                data:resp.data
            })
        })
    }

    useEffect(() => {
        fetch_data()
    }, [])



    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <main id="main">

                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Developers List</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Inner Page</li>
                            </ol>
                        </div>

                    </div>
                </section>

                <section id="doctors" class="doctors section-bg">
                    <div class="container">

                        <div class="section-title">
                            <h2>Developers</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div class="row">

                            {state.data.map((i, id)=>(
                                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" >
                                    <div class="member-img">
                                        <img src="/assets/img/doctors/doctors-1.jpg" class="img-fluid" alt="" />
                                        <div class="social">
                                            <a href=""><i class="bi bi-twitter"></i></a>
                                            <a href=""><i class="bi bi-facebook"></i></a>
                                            <a href=""><i class="bi bi-instagram"></i></a>
                                            <a href=""><i class="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>{i.name}</h4>
                                        <span>{i.profession}</span>
                                    </div>
                                </div>
                            </div>

                            ))}

                            

                           

                        </div>

                    </div>
                </section>







            </main>

        </>
    )
}

export default About