function Home() {
    return (
      <>
        <section>
          <div className="container john-main">
            <div className="john-main-info info">
              <img className="john-2-mobile" src="./john-2.png" alt="" />
              <h1 className="info-title">Hi, I am John, Creative Technologist</h1>
              <p className="info-wors">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="info-btn">Download Resume</button>
            </div>
            <img className="john-main-img" src="../public/Jonh.png" alt="john" />
          </div>
        </section>
        <section className="sec-2">
          <div className="container posts">
            <div className="recent-post-main">
              <span>Recent posts</span>
              <a href="#">View all</a>
            </div>
            <div className="post-info-main">
              <div className="post-info-left">
                <h3>Making a design system from scratch</h3>
                <div className="design-main">
                  <time datetime="2020-02-20">12 Feb 2020</time>
                  <span>|</span>
                  <span>Design, Pattern</span>
                </div>
                <p className="post-word">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="post-info-right">
                <h3>Making a design system from scratch</h3>
                <div className="design-main">
                  <time datetime="2020-02-20">12 Feb 2020</time>
                  <span>|</span>
                  <span>Design, Pattern</span>
                </div>
                <p className="post-word">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-3">
          <div className="container work">
            <div className="works-feature-title">
              <span>Featured works</span>
            </div>
            <div className="work-dashboard darshboard">
              <img className="dashboard-img" src="../public/1.png" alt="" />
              <div className="dashboard-info info">
                <h3 className="info-title">Designing Dashboards</h3>
                <div className="info-div">
                  <span>2020</span>
                  <p>Dashboard</p>
                </div>
                <p className="info-words">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <hr className="hr" />
            {/* 2-qismi bu  */}
            <div className="work-dashboard darshboard hidden">
              <img className="dashboard-img" src="../public/2.png" alt="" />
              <div className="dashboard-info info">
                <h3 className="info-title">Vibrant Portraits of 2020</h3>
                <div className="info-div">
                  <span>2020</span>
                  <p>Illustration</p>
                </div>
                <p className="info-words">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <hr className="hr hidden" />
            {/* 3-qismi bu  */}
            <div className="work-dashboard darshboard hidden">
              <img className="dashboard-img" src="../public/3.png" alt="" />
              <div className="dashboard-info info">
                <h3 className="info-title">36 Days of Malayalam type</h3>
                <div className="info-div">
                  <span>2020</span>
                  <p>Typography</p>
                </div>
                <p className="info-words">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Home;
  