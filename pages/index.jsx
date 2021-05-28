export default function Home() {
  return (
    <div className="home">
      <header className="home__header">
        <div className="home__header-content">
          <div className="home__header-logo-cont">
            <div className="home__header-logo-cont-img-cont">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/f4f396d63bd5e4abc40e7473d10f6537ca7effce/2db05/assets/client-4.jpg"
                alt="My Image"
              />
            </div>
            <span className="home__header-logo-cont-name">James B</span>
          </div>
          <div className="home__header-info">
            <span className="home__header-info-lt">
              CALL ME (+706) 898-0751
            </span>
            <span className="home__header-info-bd">
              HAYLEN.DESIGN@GMAIL.COM
            </span>
          </div>
        </div>
      </header>
      <section className="home__hero">
        <div className="home__hero-content">
          <div className="info-cta">
            <h1 className="info-cta__title">James Cordon</h1>
            <p className="info-cta__desc">
              I’m James Cordon, a freelance Interaction & Visual Product
              Designer based in Toronto, Canada. “Design is thinking made
              visual”. I would love to work on more interesting projects with
              you.
            </p>
            <form className="info-cta__form">
              <input
                placeholder="Enter your email..."
                type="text"
                className="info-cta__form-input"
              />
              <button className="info-cta__form-btn">Hire Me</button>
            </form>
          </div>
        </div>
      </section>
      <section className="home__info">
        <div className="main-container">
          <div className="home__info-content">
            <div className="home__info-content-sub">
              <h2 className="section-heading-prim">
                <span className="section-heading-prim-main">23</span>
                <span className="section-heading-prim-sub">
                  Years of Experience
                </span>
              </h2>
            </div>
            <div className="home__info-content-main">
              <p className="home__info-content-main-desc">
                I have been freelancing for over 23 years which has given me the
                opportunity to work with so many awesome people in the
                community.
                <span className="home__info-content-main-desc-hl">
                  I did really enjoy it.
                </span>
              </p>
              <div className="home__info-content-main-services">
                <div className="home__info-content-main-services-item">
                  <div className="home__info-content-main-services-item-title">
                    Branding
                  </div>
                  <div className="home__info-content-main-services-item-desc">
                    I have been freelancing for over 23 years which has given me
                    the opportunity.
                  </div>
                </div>
                <div className="home__info-content-main-services-item">
                  <div className="home__info-content-main-services-item-title">
                    Web Design
                  </div>
                  <div className="home__info-content-main-services-item-desc">
                    I have been freelancing for over 23 years which has given me
                    the opportunity.
                  </div>
                </div>
                <div className="home__info-content-main-services-item">
                  <div className="home__info-content-main-services-item-title">
                    Marketing
                  </div>
                  <div className="home__info-content-main-services-item-desc">
                    I have been freelancing for over 23 years which has given me
                    the opportunity.
                  </div>
                </div>
                <div className="home__info-content-main-services-item">
                  <div className="home__info-content-main-services-item-title">
                    SEO
                  </div>
                  <div className="home__info-content-main-services-item-desc">
                    I have been freelancing for over 23 years which has given me
                    the opportunity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home__skills">
        <div className="main-container">
          <div className="home__skills-content">
            <div className="home__skills-content-sub">
              <h2 className="section-heading-sec">
                <span className="section-heading-sec-main">
                  Take a look at my skills
                </span>
              </h2>
            </div>
            <div className="home__skills-content-main">
              <div className="home__skills-list">
                <span className="home__skills-list-item">Html5</span>
                <span className="home__skills-list-item">Css3</span>
                <span className="home__skills-list-item">Javascript</span>
                <span className="home__skills-list-item">Sass</span>
                <span className="home__skills-list-item">React</span>
                <span className="home__skills-list-item">Redux</span>
                <span className="home__skills-list-item">Node</span>
                <span className="home__skills-list-item">Php</span>
                <span className="home__skills-list-item">Laravel</span>
                <span className="home__skills-list-item">SQL</span>
                <span className="home__skills-list-item">GIT</span>
                <span className="home__skills-list-item">Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home__projects">
        <div className="main-container">
          <h2 className="section-heading-sec">
            <span className="section-heading-sec-main">
              Take a look at my Projects
            </span>
          </h2>
          <div className="home__projects-list">
            <div className="home__projects-list-item">
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4 className="home__projects-list-item-title">
                App Re-design for Twilio{' '}
              </h4>
              <p className="home__projects-list-item-desc">
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
            <div className="home__projects-list-item">
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4 className="home__projects-list-item-title">
                App Re-design for Twilio{' '}
              </h4>
              <p className="home__projects-list-item-desc">
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
            <div className="home__projects-list-item">
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4 className="home__projects-list-item-title">
                App Re-design for Twilio{' '}
              </h4>
              <p className="home__projects-list-item-desc">
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
            <div className="home__projects-list-item">
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4 className="home__projects-list-item-title">
                App Re-design for Twilio{' '}
              </h4>
              <p className="home__projects-list-item-desc">
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
            <div className="home__projects-list-item">
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4 className="home__projects-list-item-title">
                App Re-design for Twilio{' '}
              </h4>
              <p className="home__projects-list-item-desc">
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
            <div className="home__projects-list-item">
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4 className="home__projects-list-item-title">
                App Re-design for Twilio{' '}
              </h4>
              <p className="home__projects-list-item-desc">
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home__brands">
        <div className="main-container">
          <div className="home__brands-content">
            <h2 className="section-heading-sec">
              <span className="section-heading-sec-main">
                I have worked at companies like
              </span>
            </h2>
            <div className="home__brands-list">
              <div className="home__brands-list-item">
                <img src="/png/fb.png" alt="facebook"/>
              </div>
              <div className="home__brands-list-item">
                <img src="/png/insta.png" alt="facebook"/>
              </div>
              <div className="home__brands-list-item">
                <img src="/png/spotify.png" alt="facebook"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home__contact">
        <div className="main-container">
          <div className="home__contact-content">
            <div className="info-cta">
              <h2 className="info-cta__title-sm">
                Are you interested in working with me?
              </h2>
              <p className="info-cta__desc">
                Send me an email, and we can talk more about the project and
                your needs. Looking forward to hearing from you soon. Thanks...
              </p>
              <form className="info-cta__form info-cta__form-border">
                <input
                  placeholder="Enter your email..."
                  type="text"
                  className="info-cta__form-input"
                />
                <button className="info-cta__form-btn">Hire Me</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
