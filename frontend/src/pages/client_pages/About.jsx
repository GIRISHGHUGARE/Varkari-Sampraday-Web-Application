import React from 'react'

const About = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-12 p-3 mb-5">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <img className="w-75 shadow rounded-5" src='../images/Girish.png' />
              </div>
              <div className="col-lg-6 align-content-center">
                <h1 className="display-5 fw-bold">Girish Ghugare</h1>
                <p className="lead mb-4">
                  Co-founder and Chief Executive Officer
                </p>
                <button type="button" className="btn btn-custom-white btn-lg px-4 gap-3">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About