import React from "react";

const Contact = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f5ffeb", minHeight: "100vh" }}>
        <section className="py-5 text-center bg-success text-white">
          <div className="container">
            <h1 className="fw-bold">Contact Us</h1>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati perferendis nobis, voluptatibus modi dicta beatae?
            </p>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <h4
                      className="text-center mb-4"
                      style={{ color: "#355e3b" }}
                    >
                      Send Message
                    </h4>
                    <form action="">
                      <div className="mb-3">
                        <label
                          htmlFor=""
                          className="form-label fw-semibold
                        "
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your..."
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor=""
                          className="form-label fw-semibold
                        "
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Your..."
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor=""
                          className="form-label fw-semibold
                        "
                        >
                          Message
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Enter Your..."
                        />
                      </div>
                      <div className="text-center">
                        <button className="btn btn-success px-4">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
