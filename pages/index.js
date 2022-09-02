import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/parts/Hero'

import React, { useState, useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    console.log("Use Effect")

  }, [])



  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Hero />

      <main id="main">


        <section id="featured-services" class="featured-services">
          <div class="container" >

            <div class="row">
              <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div class="icon-box">
                  <div class="icon"><i class="fas fa-heartbeat"></i></div>
                  <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                  <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div class="icon-box">
                  <div class="icon"><i class="fas fa-pills"></i></div>
                  <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                  <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div class="icon-box">
                  <div class="icon"><i class="fas fa-thermometer"></i></div>
                  <h4 class="title"><a href="">Magni Dolores</a></h4>
                  <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div class="icon-box">
                  <div class="icon"><i class="fas fa-dna"></i></div>
                  <h4 class="title"><a href="">Nemo Enim</a></h4>
                  <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="cta" class="cta">
          <div class="container">

            <div class="text-center">
              <h3>In an emergency? Need help now?</h3>
              <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a class="cta-btn scrollto" href="#appointment">Make an Make an Appointment</a>
            </div>

          </div>
        </section>

        <section id="counts" class="counts">
          <div class="container">

            <div class="row no-gutters">

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="fas fa-user-md"></i>
                  <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter"></span>

                  <p><strong>Doctors</strong> consequuntur quae qui deca rode</p>
                  <a href="#">Find out more &raquo;</a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="far fa-hospital"></i>
                  <span data-purecounter-start="0" data-purecounter-end="26" data-purecounter-duration="1" class="purecounter"></span>
                  <p><strong>Departments</strong> adipisci atque cum quia aut numquam delectus</p>
                  <a href="#">Find out more &raquo;</a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="fas fa-flask"></i>
                  <span data-purecounter-start="0" data-purecounter-end="14" data-purecounter-duration="1" class="purecounter"></span>
                  <p><strong>Research Lab</strong> aut commodi quaerat. Aliquam ratione</p>
                  <a href="#">Find out more &raquo;</a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="fas fa-award"></i>
                  <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" class="purecounter"></span>
                  <p><strong>Awards</strong> rerum asperiores dolor molestiae doloribu</p>
                  <a href="#">Find out more &raquo;</a>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="features" class="features">
          <div class="container">

            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1">
                <div class="icon-box mt-5 mt-lg-0">
                  <i class="bx bx-receipt"></i>
                  <h4>Est labore ad</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div class="icon-box mt-5">
                  <i class="bx bx-cube-alt"></i>
                  <h4>Harum esse qui</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
                <div class="icon-box mt-5">
                  <i class="bx bx-images"></i>
                  <h4>Aut occaecati</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
                <div class="icon-box mt-5">
                  <i class="bx bx-shield"></i>
                  <h4>Beatae veritatis</h4>
                  <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                </div>
              </div>
              <div class="image col-lg-6 order-1 order-lg-2"
                style={{ backgroundImage: "url(/assets/img/features.jpg)" }}></div>
            </div>

          </div>
        </section>

        <section id="services" class="services">
          <div class="container">

            <div class="section-title">
              <h2>Services</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 icon-box" >
                <div class="icon"><i class="fas fa-heartbeat"></i></div>
                <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" >
                <div class="icon"><i class="fas fa-pills"></i></div>
                <h4 class="title"><a href="">Dolor Sitema</a></h4>
                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" >
                <div class="icon"><i class="fas fa-hospital-user"></i></div>
                <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" >
                <div class="icon"><i class="fas fa-dna"></i></div>
                <h4 class="title"><a href="">Magni Dolores</a></h4>
                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box">
                <div class="icon"><i class="fas fa-wheelchair"></i></div>
                <h4 class="title"><a href="">Nemo Enim</a></h4>
                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
              <div class="col-lg-4 col-md-6 icon-box" >
                <div class="icon"><i class="fas fa-notes-medical"></i></div>
                <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
                <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>

          </div>
        </section>

        <section id="gallery" class="gallery">
          <div class="container">

            <div class="section-title">
              <h2>Gallery</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            

          </div>
        </section>


        

        <section id="pricing" class="pricing">
          <div class="container">

            <div class="section-title">
              <h2>Pricing</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row">

              <div class="col-lg-3 col-md-6">
                <div class="box">
                  <h3>Free</h3>
                  <h4><sup>$</sup>0<span> / month</span></h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li class="na">Pharetra massa</li>
                    <li class="na">Massa ultricies mi</li>
                  </ul>
                  <div class="btn-wrap">
                    <a href="#" class="btn-buy">Buy Now</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
                <div class="box featured">
                  <h3>Business</h3>
                  <h4><sup>$</sup>19<span> / month</span></h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li class="na">Massa ultricies mi</li>
                  </ul>
                  <div class="btn-wrap">
                    <a href="#" class="btn-buy">Buy Now</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <div class="box">
                  <h3>Developer</h3>
                  <h4><sup>$</sup>29<span> / month</span></h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div class="btn-wrap">
                    <a href="#" class="btn-buy">Buy Now</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <div class="box">
                  <span class="advanced">Advanced</span>
                  <h3>Ultimate</h3>
                  <h4><sup>$</sup>49<span> / month</span></h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div class="btn-wrap">
                    <a href="#" class="btn-buy">Buy Now</a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="contact" class="contact">
          <div class="container">

            <div class="section-title">
              <h2>Contact</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

          </div>

          <div>
            <iframe style={{ border: "0", width: "100%", height: "350px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
          </div>

          <div class="container">

            <div class="row mt-5">

              <div class="col-lg-6">

                <div class="row">
                  <div class="col-md-12">
                    <div class="info-box">
                      <i class="bx bx-map"></i>
                      <h3>Our Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-box mt-4">
                      <i class="bx bx-envelope"></i>
                      <h3>Email Us</h3>
                      <p>info@example.com<br />contact@example.com</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-box mt-4">
                      <i class="bx bx-phone-call"></i>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                    </div>
                  </div>
                </div>

              </div>

              <div class="col-lg-6">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <div class="row">
                    <div class="col form-group">
                      <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div class="col form-group mt-3">
                      <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>
      </main>

    </>
  )
}


export default Home