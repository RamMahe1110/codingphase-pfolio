import { useState } from 'react'

export default function Home() {
  const [darkMode, setdarkMode] = useState(false)
  return (
    <div className="home home-dark">
      <header
        className={`home__header ${
          darkMode ? 'clr-wht bg-dark-bl bd-btm-lt-bl' : ''
        } `}
      >
        <div className="home__header-content">
          <div className="home__header-logo-cont">
            <div className="home__header-logo-cont-img-cont">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/f4f396d63bd5e4abc40e7473d10f6537ca7effce/2db05/assets/client-4.jpg"
                alt="My Image"
              />
            </div>
            <span className="home__header-logo-cont-name">James Cordon</span>
          </div>
          <div className="home__header-info">
            <span className="home__header-info-lt">
              CALL ME (+706) 898-0751
            </span>
            <span className="home__header-info-bd">
              HAYLEN.DESIGN@GMAIL.COM
            </span>
            <div className="home__header-info-theme-switch">
              {darkMode ? (
                <img
                  onClick={() => {
                    setdarkMode(false)
                  }}
                  src="./sun.svg"
                  alt="light mode button"
                />
              ) : (
                <img
                  onClick={() => {
                    setdarkMode(true)
                  }}
                  src="./moon.svg"
                  alt="dark mode button"
                />
              )}
            </div>
          </div>
        </div>
      </header>
      <section className={`home__hero ${darkMode ? 'bg-med-bl' : ''}`}>
        <div className="home__hero-content">
          <div className="info-cta">
            <h1 className={`info-cta__title ${darkMode ? 'clr-wht' : ''}`}>
              James Cordon
            </h1>
            <p className={`info-cta__desc ${darkMode ? 'clr-wht' : ''}`}>
              I’m James Cordon, a freelance Interaction & Visual Product
              Designer based in Toronto, Canada. “Design is thinking made
              visual”. I would love to work on more interesting projects with
              you.
            </p>
            <form
              className={`info-cta__form ${darkMode ? 'bg-glass-wht' : ''}`}
            >
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
      <section className={`home__info ${darkMode ? 'bg-med-bl' : ''}`}>
        <div className="main-container">
          <div className="home__info-content">
            <div className="home__info-content-sub">
              <h2
                className={`section-heading-prim ${darkMode ? 'clr-wht' : ''}`}
              >
                <span className="section-heading-prim-main">23</span>
                <span className="section-heading-prim-sub">
                  Years of Experience
                </span>
              </h2>
            </div>
            <div className="home__info-content-main">
              <p
                className={`home__info-content-main-desc ${
                  darkMode ? 'clr-wht' : ''
                }`}
              >
                I have been freelancing for over 23 years which has given me the
                opportunity to work with so many awesome people in the
                community.
                <span className="home__info-content-main-desc-hl">
                  I did really enjoy it.
                </span>
              </p>
              <div className="home__info-content-main-services">
                <div
                  className={`home__info-content-main-services-item ${
                    darkMode ? 'bg-avg-bl bd-none bd-lt-bl' : ''
                  }`}
                >
                  <div
                    className={`home__info-content-main-services-item-title ${
                      darkMode ? 'clr-wht' : ''
                    }`}
                  >
                    Branding
                  </div>
                  <div
                    className={`home__info-content-main-services-item-desc ${
                      darkMode ? 'clr-lt-wht' : ''
                    } `}
                  >
                    I have been freelancing for over 23 years which has given me
                    the opportunity.
                  </div>
                </div>
                <div
                  className={`home__info-content-main-services-item ${
                    darkMode ? 'bg-avg-bl bd-none bd-lt-bl' : ''
                  }`}
                >
                  <div
                    className={`home__info-content-main-services-item-title ${
                      darkMode ? 'clr-wht' : ''
                    }`}
                  >
                    Web Design
                  </div>
                  <div
                    className={`home__info-content-main-services-item-desc ${
                      darkMode ? 'clr-lt-wht' : ''
                    } `}
                  >
                    I have been freelancing for over 23 years which has given me
                    the opportunity.
                  </div>
                </div>
                <div
                  className={`home__info-content-main-services-item ${
                    darkMode ? 'bg-avg-bl bd-none bd-lt-bl' : ''
                  }`}
                >
                  <div
                    className={`home__info-content-main-services-item-title ${
                      darkMode ? 'clr-wht' : ''
                    }`}
                  >
                    Marketing
                  </div>
                  <div
                    className={`home__info-content-main-services-item-desc ${
                      darkMode ? 'clr-lt-wht' : ''
                    } `}
                  >
                    I have been freelancing for over 23 years which has given me
                    the opportunity.
                  </div>
                </div>
                <div
                  className={`home__info-content-main-services-item ${
                    darkMode ? 'bg-avg-bl bd-none bd-lt-bl' : ''
                  }`}
                >
                  <div
                    className={`home__info-content-main-services-item-title ${
                      darkMode ? 'clr-wht' : ''
                    }`}
                  >
                    SEO
                  </div>
                  <div
                    className={`home__info-content-main-services-item-desc ${
                      darkMode ? 'clr-lt-wht' : ''
                    } `}
                  >
                    I have been freelancing for over 23 years which has given me
                    the opportunity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`home__skills ${darkMode ? 'bg-med-bl' : ''}`}>
        <div className="main-container">
          <div className="home__skills-content">
            <div className="home__skills-content-sub">
              <h2
                className={`section-heading-sec ${darkMode ? 'clr-wht' : ''}`}
              >
                <span className="section-heading-sec-main">
                  Take a look at my skills
                </span>
              </h2>
            </div>
            <div className="home__skills-content-main">
              <div className="home__skills-list">
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  Html5
                </span>
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  Css3
                </span>
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  Javascript
                </span>
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  Sass
                </span>
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  React
                </span>
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  Redux
                </span>
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  Node
                </span>
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  Php
                </span>
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  Laravel
                </span>
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  SQL
                </span>
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  GIT
                </span>
                <span
                  className={`home__skills-list-item  ${
                    darkMode ? 'clr-lt-wht bg-glass-wht' : ''
                  }`}
                >
                  Linux
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`home__projects ${darkMode ? 'bg-med-bl' : ''}`}>
        <div className="main-container">
          <h2 className="section-heading-sec">
            <span
              className={`section-heading-sec-main ${
                darkMode ? 'clr-wht' : ''
              }`}
            >
              Take a look at my Projects
            </span>
          </h2>
          <div className="home__projects-list">
            <div
              className={`home__projects-list-item ${
                darkMode ? 'bg-avg-bl bd-none' : ''
              }`}
            >
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4
                className={`home__projects-list-item-title ${
                  darkMode ? 'clr-wht' : ''
                }`}
              >
                App Re-design for Twilio{' '}
              </h4>
              <p
                className={`home__projects-list-item-desc ${
                  darkMode ? 'clr-lt-wht' : ''
                }`}
              >
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
            <div
              className={`home__projects-list-item ${
                darkMode ? 'bg-avg-bl bd-none' : ''
              }`}
            >
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4
                className={`home__projects-list-item-title ${
                  darkMode ? 'clr-wht' : ''
                }`}
              >
                App Re-design for Twilio{' '}
              </h4>
              <p
                className={`home__projects-list-item-desc ${
                  darkMode ? 'clr-lt-wht' : ''
                }`}
              >
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
            <div
              className={`home__projects-list-item ${
                darkMode ? 'bg-avg-bl bd-none' : ''
              }`}
            >
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4
                className={`home__projects-list-item-title ${
                  darkMode ? 'clr-wht' : ''
                }`}
              >
                App Re-design for Twilio{' '}
              </h4>
              <p
                className={`home__projects-list-item-desc ${
                  darkMode ? 'clr-lt-wht' : ''
                }`}
              >
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
            <div
              className={`home__projects-list-item ${
                darkMode ? 'bg-avg-bl bd-none' : ''
              }`}
            >
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4
                className={`home__projects-list-item-title ${
                  darkMode ? 'clr-wht' : ''
                }`}
              >
                App Re-design for Twilio{' '}
              </h4>
              <p
                className={`home__projects-list-item-desc ${
                  darkMode ? 'clr-lt-wht' : ''
                }`}
              >
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
            <div
              className={`home__projects-list-item ${
                darkMode ? 'bg-avg-bl bd-none' : ''
              }`}
            >
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4
                className={`home__projects-list-item-title ${
                  darkMode ? 'clr-wht' : ''
                }`}
              >
                App Re-design for Twilio{' '}
              </h4>
              <p
                className={`home__projects-list-item-desc ${
                  darkMode ? 'clr-lt-wht' : ''
                }`}
              >
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
            <div
              className={`home__projects-list-item ${
                darkMode ? 'bg-avg-bl bd-none' : ''
              }`}
            >
              <div className="home__projects-list-item-img-cont">
                <img src="./projects/twilio.png" alt="project image" />
              </div>
              <h4
                className={`home__projects-list-item-title ${
                  darkMode ? 'clr-wht' : ''
                }`}
              >
                App Re-design for Twilio{' '}
              </h4>
              <p
                className={`home__projects-list-item-desc ${
                  darkMode ? 'clr-lt-wht' : ''
                }`}
              >
                This has been a huge project for me. I was able to create a very
                awesome app for them...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`home__brands ${darkMode ? 'bg-med-bl' : ''}`}>
        <div className="main-container">
          <div className="home__brands-content">
            <h2 className={`section-heading-sec ${darkMode ? 'clr-wht' : ''}`}>
              <span className="section-heading-sec-main">
                I have worked at companies like
              </span>
            </h2>
            <div className="home__brands-list">
              <div className="home__brands-list-item">
                <img src="/png/fb.png" alt="facebook" />
              </div>
              <div className="home__brands-list-item">
                <img src="/png/insta.png" alt="facebook" />
              </div>
              <div className="home__brands-list-item">
                <img src="/png/spotify.png" alt="facebook" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`home__contact ${darkMode ? 'bg-med-bl' : ''}`}>
        <div className="main-container">
          <div className="home__contact-content">
            <div className="info-cta">
              <h2 className={`info-cta__title-sm ${darkMode ? 'clr-wht' : ''}`}>
                Are you interested in working with me?
              </h2>
              <p className={`info-cta__desc ${darkMode ? 'clr-wht' : ''}`}>
                Send me an email, and we can talk more about the project and
                your needs. Looking forward to hearing from you soon. Thanks...
              </p>
              <form
                className={`info-cta__form  info-cta__form-border ${
                  darkMode ? 'bg-glass-wht bd-none' : ''
                }`}
              >
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
      <div
        className={`footer__main-footer ${
          darkMode ? 'bg-dark-bl bd-top-lt-bl' : ''
        }`}
      >
        <div className="main-container">
          <div
            className={`footer__main-footer-content ${
              darkMode ? 'clr-wht' : ''
            }`}
          >
            <div className="footer__main-footer-content-user">
              <div className="footer__main-footer-content-user-main">
                <span className="footer__main-footer-content-user-main-img-cont">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/f4f396d63bd5e4abc40e7473d10f6537ca7effce/2db05/assets/client-4.jpg"
                    alt="User"
                  />
                </span>
                <span className="footer__main-footer-content-user-main-name">
                  James Bitch
                </span>
              </div>
              <div className="footer__main-footer-content-user-info">
                <span className="footer__main-footer-content-user-info-item">
                  CALL ME (+706) 898-0751
                </span>
                <span className="footer__main-footer-content-user-info-item-hl">
                  HAYLEN.DESIGN@GMAIL.COM
                </span>
              </div>
            </div>
            <div className="footer__main-footer-content-nav-cont">
              <ul className="footer__main-footer-content-nav">
                <li className="footer__main-footer-content-nav-title">
                  Browse
                </li>
                <div className="footer__main-footer-content-nav-links-cont">
                  <li className="footer__main-footer-content-nav-link">
                    <a href="#">About</a>
                  </li>
                  <li className="footer__main-footer-content-nav-link">
                    <a href="#">Skills</a>
                  </li>
                  <li className="footer__main-footer-content-nav-link">
                    <a href="#">Projects</a>
                  </li>
                  <li className="footer__main-footer-content-nav-link">
                    <a href="#">Partners</a>
                  </li>
                  <li className="footer__main-footer-content-nav-link">
                    <a href="#">Contact</a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="footer__main-footer-content-final-msg">
              <h5 className="footer__main-footer-content-final-msg-title">
                Thanks
              </h5>
              <p className="footer__main-footer-content-final-msg-desc">
                If you have any questions or inquiries, feel free to contact me
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
