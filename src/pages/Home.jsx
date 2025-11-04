import React from "react";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f5ffeb", minHeight: "100vh" }}>
      <header
        className="text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        ></div>
        <div
          className="conatiner postition-relative"
          style={{ zIndex: 2, color: "white" }}
        >
          <div className="row py-lg-5">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h1 className="fw-bold display-5">
                Manage Project with Ease -ProManage
              </h1>
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                corporis. At dolorem harum ipsum recusandae!
              </p>
              <a href="" className="btn btn-success me-2">
                Get Started
              </a>
              <a href="" className="btn btn-outline-light ">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* features */}
      <section className="py-5 bg-light">
        <div className="conatainer">
          <h2 className="text-center mb-4" style={{ color: "#355e3b" }}>
            Key Features
          </h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center">
                  <i className="bi bi-graph-up-arrow fs-1 text-success mb-3"></i>
                  <h5 className="card-title">Real -time Analystics</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta iure mollitia laborum sapiente, quis magni.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center">
                  <i className="bi bi-graph-up-arrow fs-1 text-success mb-3"></i>
                  <h5 className="card-title">Real -time Analystics</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta iure mollitia laborum sapiente, quis magni.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center">
                  <i className="bi bi-graph-up-arrow fs-1 text-success mb-3"></i>
                  <h5 className="card-title">Real -time Analystics</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta iure mollitia laborum sapiente, quis magni.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
