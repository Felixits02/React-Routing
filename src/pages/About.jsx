import React from "react";

const About = () => {
  return (
    <div style={{ backgroundColor: "#f5ffeb", minHeight: "100vh" }}>
      <section className="py-5 text-center bg-success text-white">
        <div className="container">
          <h1 className="fw-bold">About ProManager</h1>
          <p className="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            perferendis nobis, voluptatibus modi dicta beatae?
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
                alt=""
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold text-success">Who We Are</h2>
              <p className="text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                cum corrupti tempora excepturi, quibusdam reiciendis? Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
                maxime obcaecati, nemo quasi hic neque corrupti itaque enim
                veniam ratione?
              </p>
              <p className="text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                cum corrupti tempora excepturi, quibusdam reiciendis? Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
                maxime obcaecati, nemo quasi hic neque corrupti itaque enim
                veniam ratione?
              </p>
              <a href="" className="btn btn-success mt-3">
                LearnMore
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
