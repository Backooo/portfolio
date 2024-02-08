import FadeIn from "../../FadeIn.tsx";
import "./style.css";

export const Index = (): JSX.Element => {
  return (
    <div className="index">
      <div className="div">
        <div className="contact">
          <div className="contact-2">
            <div className="frame">
              <a href="mailto:cihanb08@gmail.com" className="text-wrapper">contact me here!</a>
            </div>
            <p className="developed-by-emin">
              Developed by Emin Bayat
              <br />
              <span style={{ fontSize: '0.7em' }}>All rights reserved @ 2024</span>
            </p>
          </div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-2">PROJECTS</div>
          <p className="past-personal-and">past personal and course projects</p>
        </div>
        <div className="overlap">
          <div className="frame-3">
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-3">February 2024</div>
                <a href="https://github.com/Backooo/portfolio" target="_blank" rel="noopener noreferrer">
                <div className="text-wrapper-4">Portfolio</div>
                </a>
              </div>
              <div className="div-wrapper">
                <p className="p">
                  I coded this portfolio website to showcase my resume, skills, and projects, serving as a space to
                  enhance my expertise in React, TypeScript, HTML/CSS, and Figma, the latter of which was used for its
                  design. This way I was able to merge my technical proficiency and creative flair.
                </p>
              </div>
            </div>
            <p className="div-2">
              <span className="span">Skills:</span>
              <span className="text-wrapper-5">&nbsp;</span>
              <span className="text-wrapper-6">React, TypeScript, HTML, CSS, Figma</span>
            </p>
          </div>
        </div>
        <div className="overlap-group">
          <div className="frame-3">
            <div className="frame-4">
              <div className="frame-4">
                <div className="frame-5">
                  <div className="text-wrapper-3">December 2023</div>
                  <a href="https://github.com/Backooo/recognize_emotions" target="_blank" rel="noopener noreferrer">
                  <div className="text-wrapper-4">Emotion Recognizer</div>
                  </a>
                </div>
                <p className="text-wrapper-7">
                  Very small Python project that leverages the webcam to identify emotions, utilizing OpenCV for face
                  detection, TensorFlow for a pre-trained deep learning model, and NumPy for numerical computations. It
                  aims to provide
                  <br />a technological blend for effective emotion recognition.
                </p>
              </div>
            </div>
            <p className="div-2">
              <span className="span">Skills:</span>
              <span className="text-wrapper-5">&nbsp;</span>
              <span className="text-wrapper-6">Python, OpenCV, NumPy, Tensorflow</span>
            </p>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-3">
            <div className="frame-6">
              <div className="frame-5">
                <div className="text-wrapper-3">November 2023</div>
                <a href="https://github.com/Backooo/spotify_data_analysis" target="_blank" rel="noopener noreferrer">
                <div className="text-wrapper-4">Spotify Data Analysis</div>
                </a>
              </div>
              <p className="text-wrapper-7">
                This project offers a custom Spotify Wrapped experience, allowing users to visualize their top artists,
                songs, and genres at any time of the year. Utilizing Spotipy for API interactions and Matplotlib for
                visualization, it is also able to generate a personalized playlist of the user&#39;s top 50 tracks.
              </p>
            </div>
            <p className="div-2">
              <span className="span">Skills:</span>
              <span className="text-wrapper-5">&nbsp;</span>
              <span className="text-wrapper-6">Python, Spotipy, Matplotlib, Dotenv, Spotify API</span>
            </p>
          </div>
        </div>
        <div className="overlap-2">
          <div className="frame-3">
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-3">May 2023</div>
                <a href="https://github.com/Backooo/Weather-Station-Database-Project" target="_blank" rel="noopener noreferrer">
                <div className="text-wrapper-4">Weather Station</div>
                </a>
              </div>
              <div className="div-wrapper">
                <p className="p">
                  This small university project transforms an EER Diagram into a working SQL database, showcasing the
                  application of database design principles. It features SQL queries and a SQLite database file,
                  emphasizing foundational relational database management skills using SQLite and SQL.
                </p>
              </div>
            </div>
            <p className="div-2">
              <span className="span">Skills:</span>
              <span className="text-wrapper-5">&nbsp;</span>
              <span className="text-wrapper-6">SQL, SQLite, Theoretical DBMS Knowledge</span>
            </p>
          </div>
        </div>
        <div className="overlap-3">
          <div className="frame-3">
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-3">December 2022</div>
                <a href="https://github.com/Backooo/PalletManager" target="_blank" rel="noopener noreferrer">
                <div className="text-wrapper-4">Pallet Manager</div>
                </a>
              </div>
              <div className="div-wrapper">
                <p className="p">
                  A past Java course project that implements a theoretical Pallet-Management system for Santa Claus. It
                  simulates the efficient handling and storage of Christmas gifts, utilizing class extension and
                  inheritance, data structure manipulation, and algorithm optimization within a festive scenario.
                </p>
              </div>
            </div>
            <p className="div-2">
              <span className="span">Skills:</span>
              <span className="text-wrapper-5">&nbsp;</span>
              <span className="text-wrapper-6">Java, OOP</span>
            </p>
          </div>
        </div>
        <div className="overlap-4">
          <div className="frame-3">
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-3">January 2024</div>
                <a href="https://github.com/Backooo/Death-Stacks" target="_blank" rel="noopener noreferrer">
                <div className="text-wrapper-4">Death Stacks</div>
                </a>
              </div>
              <div className="div-wrapper">
                <p className="crafted-in-java-this">
                  Crafted in Haskell, this project implements the rules for a bot for the Death Stacks board game. Employing functional programming,
                  version control, and rigorous testing, it models sound logic for the rules of the board game as well as showcasing Haskell's capabilities
                  in a practical yet educational scenario.
                </p>
              </div>
            </div>
            <p className="div-2">
              <span className="span">Skills:</span>
              <span className="text-wrapper-5">&nbsp;</span>
              <span className="text-wrapper-6">Haskell, Cabal, Git,<br/>Testing</span>
            </p>
          </div>
        </div>
        <div className="and-what-else">
          <div className="and-what-else-2">
            <div className="text-wrapper-2">AND WHAT ELSE?</div>
            <div className="frame-7">
              <div className="frame-8">
                <img
                  className="jupyter-logo"
                  alt="Jupyter logo"
                  src="/portfolio/jupyter-logo-1.png"
                />
                <div className="text-wrapper-8">Jupyter Notebook</div>
              </div>
              <div className="frame-9">
                <img
                  className="img"
                  alt="Microsoft excel logo"
                  src="/portfolio/microsoft-excel-logo--2013-2019--1.png"
                />
                <div className="text-wrapper-8">Excel and Office</div>
              </div>
              <div className="frame-10">
                <img
                  className="element-figma-logo"
                  alt="Figma logo"
                  src="/portfolio/1667px-figma-logo-1.png"
                />
                <div className="text-wrapper-2">Figma</div>
              </div>
              <div className="frame-11">
                <img
                  className="img"
                  alt="Git icon"
                  src="/portfolio/git-icon-1.png"
                />
                <div className="text-wrapper-8">Git</div>
              </div>
              <div className="frame-12">
                <img
                  className="latex-project-logo"
                  alt="Latex project logo"
                  src="/portfolio/latex.svg"
                />
                <div className="text-wrapper-8">LaTeX</div>
              </div>
              <div className="frame-13">
                <img
                  className="element-SAP-logo"
                  alt="Element SAP logo"
                  src="/portfolio/2560px-sap-logo-1.png"
                />
                <div className="text-wrapper-2">SAP NetWeaver Database</div>
              </div>
              <div className="frame-14">
                <img
                  className="img"
                  alt="Pngimg"
                  src="/portfolio/photoshop.png"
                />
                <div className="text-wrapper-8">Adobe Photoshop</div>
              </div>
              <div className="frame-15">
                <img
                  className="img"
                  alt="Davinci resolve"
                  src="/portfolio/Davinci.png"
                />
                <div className="text-wrapper-8">DaVinci Resolve</div>
              </div>
            </div>
          </div>
        </div>
        <FadeIn>
        <div className="skills">
          <div className="overlap-5">
            <div className="bubbles">
              <div className="overlap-6">
                <div className="frame-16">
                  <div className="frame-17">
                    <div className="ellipse" />
                    <div className="text-wrapper-9">SQL</div>
                  </div>
                  <div className="frame-18">
                    <div className="ellipse-2" />
                    <div className="frame-19">
                      <img
                        className="img-2"
                        alt="Sqlite square icon"
                        src="/portfolio/sqlite-square-icon-1.png"
                      />
                      <div className="text-wrapper-10">SQLite</div>
                    </div>
                  </div>
                </div>
                <div className="frame-20">
                  <div className="frame-17">
                    <div className="frame-17">
                      <div className="ellipse-3" />
                      <div className="frame-21">
                        <img
                          className="img-3"
                          alt="Javascript logo"
                          src="/portfolio/javascript-logo-1.png"
                        />
                        <div className="text-wrapper-11">JavaScript</div>
                      </div>
                    </div>
                    <div className="frame-22">
                      <div className="ellipse-4" />
                      <div className="frame-23">
                        <img
                          className="img-4"
                          alt="React icon"
                          src="/portfolio/react-icon-1@2x.png"
                        />
                        <div className="text-wrapper-2">React</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-24">
                    <div className="ellipse-4" />
                    <div className="frame-25">
                      <img
                        className="img-2"
                        alt="Typescript logo"
                        src="/portfolio/typescript-logo-2020-1.png"
                      />
                      <div className="text-wrapper">TypeScript</div>
                    </div>
                  </div>
                </div>
                <div className="frame-26">
                  <div className="frame-17">
                    <div className="ellipse-5" />
                    <div className="frame-27">
                      <img
                        className="img-3"
                        alt="Java"
                        src="/portfolio/java-1.png"
                      />
                      <div className="text-wrapper-11">Java</div>
                    </div>
                  </div>
                  <div className="frame-28">
                    <div className="ellipse-6" />
                    <div className="frame-29">
                      <img
                        className="img-2"
                        alt="Scala"
                        src="/portfolio/scala-1.png"
                      />
                      <div className="text-wrapper-2">Scala</div>
                    </div>
                  </div>
                </div>
                <div className="frame-30">
                  <div className="frame-17">
                    <div className="frame-17">
                      <div className="frame-17">
                        <div className="frame-17">
                          <div className="ellipse-7" />
                          <div className="frame-31">
                            <div className="ellipse-2" />
                            <div className="frame-32">
                              <img
                                className="img-4"
                                alt="Numpy"
                                src="/portfolio/numpy-1.svg"
                              />
                              <div className="text-wrapper-12">NumPy</div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-33">
                          <div className="ellipse-2" />
                          <div className="frame-34">
                            <img
                              className="img-4"
                              alt="Element scikit learn"
                              src="/portfolio/2560px-scikit-learn-logo-small-1@2x.png"
                            />
                            <div className="text-wrapper-10">SciKit</div>
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <div className="frame-35">
                            <img
                              className="element-pandas-mark"
                              alt="pandas mark"
                              src="/portfolio/1200px-pandas-mark-1@2x.png"
                            />
                            <div className="text-wrapper-13">Pandas</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-36">
                      <div className="ellipse-2" />
                      <div className="frame-37">
                        <img
                          className="img-2"
                          alt="Element matplotlib"
                          src="/portfolio/1200px-matplotlib-icon-1.png"
                        />
                        <div className="text-wrapper-14">Matplotlib</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-38">
                    <img
                      className="img"
                      alt="Python icon"
                      src="/portfolio/python-icon-1.png"
                    />
                    <div className="text-wrapper-11">Python</div>
                  </div>
                </div>
                <div className="frame-39">
                  <div className="ellipse-8" />
                  <div className="frame-40">
                    <img
                      className="img-2"
                      alt="Haskell"
                      src="/portfolio/haskell-1.png"
                    />
                    <div className="text-wrapper-15">Haskell</div>
                  </div>
                </div>
                <div className="frame-41">
                  <div className="ellipse-8" />
                  <div className="frame-42">
                    <img
                      className="img-2"
                      alt="Prolog"
                      src="/portfolio/prolog.png"
                    />
                    <div className="frame-43">
                      <div className="text-wrapper-15">Prolog</div>
                    </div>
                  </div>
                </div>
                <div className="frame-44">
                  <div className="frame-45">
                    <div className="ellipse-9" />
                    <div className="frame-46">
                      <img
                        className="img-2"
                        alt="HTML"
                        src="/portfolio/html5-icon-1.png"
                      />
                      <div className="text-wrapper-16">HTML</div>
                    </div>
                  </div>
                </div>
                <div className="frame-47">
                  <div className="frame-17">
                    <div className="ellipse-9" />
                    <div className="frame-48">
                      <img
                        className="img-2"
                        alt="Css icon"
                        src="/portfolio/css-icon-1.png"
                      />
                      <div className="text-wrapper-16">CSS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-languages-wrapper">
              <div className="skills-languages">SKILLS &amp; LANGUAGES</div>
            </div>
          </div>
        </div>
        </FadeIn>
        <FadeIn>
        <div className="high-school">
          <div className="flexcontainer">
            <p className="text">
              <span className="text-wrapper-17">
                High School Diploma
                <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-18">
                Herder-Gymnasium - Berlin
                <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-19">
                Primary Courses:
                <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-19">
                Physics
                <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-19">English</span>
            </p>
          </div>
        </div>
        </FadeIn>
        <FadeIn>
        <div className="overlap-7">
          <div className="working-student">
            <div className="flexcontainer-2">
              <p className="text">
                <span className="text-wrapper-17">
                  Working Student
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-18">
                  ARD-Generalsekretariat - Berlin
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-19">
                  independently and autonomously fulfilling tasks such as:
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-19">
                  Editing and correcting the in-house database
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-19">
                  Cataloging digital documents
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-19">Digitization of created documents</span>
              </p>
            </div>
          </div>
          <div className="overlap-8">
            <div className="ellipse-10" />
            <div className="ellipse-11" />
            <img
              className="line"
              alt="Line"
              src="/portfolio/line-1.png"
            />
            <div className="work-experience-wrapper">
              <div className="text-wrapper-20">WORK EXPERIENCE</div>
            </div>
          </div>
        </div>
        </FadeIn>
        <FadeIn>
          <div className="bachelor-s-degree">
            <div className="flexcontainer-3">
              <p className="span-wrapper">
                <span className="text-wrapper-17">
                  Bachelor’s Degree
                  <br />
                </span>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-18">
                  TU Berlin - 2022 - Present
                  <br />
                </span>
              </p>
                <p className="span-wrapper" style={{ marginBottom: '10px' }}>
                  <span className="text-wrapper-21">Business Informatics (B.Sc.)</span>
                </p>
              </div>
              <p className="relevant-coursework" style={{ marginTop: '10px' }}>
                <span className="text-wrapper-22">
                  Relevant Coursework:
                  <br />
                </span>
              <span className="text-wrapper-19">
                Programming in Java and Scala I&amp;II
                <br />
                Information Systems and Data Analysis
                <br />
                Statistics
                <br />
                Introduction into IT-Security
                <br />
                Theoretical Foundations of Computer Science
                <br />
                Marketing and Production Management
                <br />
                Organization and Innovation Management
                <br />
                Analysis and Linear Algebra
              </span>
            </p>
          </div>
        </FadeIn>
        <FadeIn>
        <div className="text-wrapper-23">My Resume</div>
        <div className="overlap-9">
          <div className="ellipse-12" />
          <img
            className="line-2"
            alt="Line"
            src="/portfolio/line-2.png"
          />
        </div>
        </FadeIn>
        <img
          className="line-3"
          alt="Line"
          src="/portfolio/line-3.png"
        />
        <img
          className="line-4"
          alt="Line"
          src="/portfolio/line-4.png"
        />
        <img
          className="line-5"
          alt="Line"
          src="/portfolio/line-5.png"
        />
        <img
          className="line-6"
          alt="Line"
          src="/portfolio/line-6.png"
        />
        <img
          className="line-7"
          alt="Line"
          src="/portfolio/line-7.png"
        />
        <img
          className="line-8"
          alt="Line"
          src="/portfolio/line-8.png"
        />
        <img
          className="line-9"
          alt="Line"
          src="/portfolio/line-9.png"
        />
        <a href="https://youtu.be/no_elVGGgW8" target="_blank" rel="noopener noreferrer">
        <div className="flexcontainer-4">
          <p className="text-2">
            <span className="text-wrapper-24">
              It was
              <br />
            </span>
          </p>
          <p className="text-2">
            <span className="text-wrapper-24">
              the best of times
              <br />
            </span>
          </p>
          <p className="text-2">
            <span className="text-wrapper-24">
              it was
              <br />
            </span>
          </p>
          <p className="text-2">
            <span className="text-wrapper-24">the blurst of times</span>
          </p>
        </div>
        </a>
        <div className="education-wrapper">
          <div className="text-wrapper-20">EDUCATION</div>
        </div>
        <FadeIn>
        <div className="about">
          <div className="text-wrapper-25">About Me</div>
          <div className="about-me-content">
            <div className="flexcontainer-5">
              <p className="text-3">
                <span className="text-wrapper-26">
                  Full Name: Cihan Emin Bayat
                  <br />
                </span>
              </p>
              <p className="text-3">
                <span className="text-wrapper-26">
                  Email: cihanb08@gmail.com
                  <br />
                </span>
              </p>
              <p className="text-3">
                <span className="text-wrapper-26">
                  Location: Berlin, Germany
                  <br />
                </span>
              </p>
              <p className="text-3">
                <span className="text-wrapper-26">Education: TU Berlin</span>
              </p>
            </div>
            <div className="about-content">
              <div className="welcome">
                <p className="text-wrapper-27">Hello and welcome to my space! I’m Emin Bayat!</p>
                <p className="hobbies">
                  A self taught hobby photographer, wannabe series critic and part time bookworm.
                  <br />
                  Other than that I enjoy going for walks and puzzling.
                </p>
              </div>
              <div className="keep-scrolling">
                <div className="text-wrapper-28">Keep Scrolling!</div>
                <p className="enclosed-in-this">
                  Enclosed in this website is my resume along with a showcase of
                  <br />
                  all the projects I&#39;ve developed 💻
                  <br />
                  Don&#39;t hesitate to get in touch with me anytime!
                </p>
              </div>
            </div>
          </div>
        </div>
        </FadeIn>
        <header className="header" data-next="yes">
          <div className="overlap-10">
            <img
              className="PB"
              alt="Pb"
              src="/portfolio/profile-picture@2x.png"
            />
            <div className="title">
              <a href="https://github.com/Backooo" target="_blank" rel="noopener noreferrer">
                <img
                  className="github"
                  alt="Github"
                  src="/portfolio/github.svg"
                />
              </a>
              <a href="https://www.linkedin.com/in/emin-bayat/" target="_blank" rel="noopener noreferrer">
                <img
                  className="linked-in" alt="Linked in"
                  src="/portfolio/linkedin.svg"
                />
              </a>
              <a href="/portfolio/CihanEminBayatResume.pdf" target="_blank" rel="noopener noreferrer">
                <img
                  className="resume"
                  alt="Resume"
                  src="/portfolio/resume.svg"
                />
              </a>
              <div className="text-wrapper-29">-Emin Bayat-</div>
            </div>
            <div className="header-vert-bars">
              <img
                className="line-10"
                alt="Line"
                src="/portfolio/line-10.png"
              />
              <img
                className="line-11"
                alt="Line"
                src="/portfolio/line-11.png"
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
