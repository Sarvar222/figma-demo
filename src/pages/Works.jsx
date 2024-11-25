function Works() {
  return (
    <>
      <section className="works-page-sec-1">
        <div className="container work">
          <h1 className="work-title">Work</h1>
          <div className="work-dashboard darshboard">
            <img className="dashboard-img" src="../dashboard.png" alt="" />
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
          <hr className="hr work-hidden" />
          {/* 2-qismi bu  */}
          <div className="work-dashboard darshboard work-hidden">
            <img className="dashboard-img" src="../illustration.png" alt="" />
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
          <hr className="hr work-hidden " />
          {/* 3-qismi bu  */}
          <div className="work-dashboard darshboard work-hidden ">
            <img className="dashboard-img" src="../typography.png" alt="" />
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
          <hr className="hr work-hidden" />
          {/* 4-qismi bu  */}
          <div className="work-dashboard darshboard work-hidden">
            <img className="dashboard-img" src="../component.png" alt="" />
            <div className="dashboard-info info">
              <h3 className="info-title">Components</h3>
              <div className="info-div">
                <span>2018</span>
                <p>Components, Design</p>
              </div>
              <p className="info-words">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <hr className="hr" />
          {/* 5-qismi bu  */}
          <div className="work-dashboard darshboard work-unhidden ">
            <img className="dashboard-img" src="../landing.png" alt="" />
            <div className="dashboard-info info">
              <h3 className="info-title">Designing Landing pages</h3>
              <div className="info-div">
                <span>2020</span>
                <p>Website</p>
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

export default Works;
