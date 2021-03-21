import React from "react";

const Contact = () => {
  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <div className="container">
          <h1 style={{ color: "rgb(206, 30, 65)" }} className="text-center">
            Contact Form
          </h1>
          <div className="row">
            <div className="col-md-6 mx-auto p-5">
              <label htmlFor="">Email :</label>
              <input type="text" className="form-control" />
              <label htmlFor="">Full Name :</label>
              <input type="text" className="form-control" />
              <label htmlFor="">Gender :</label>
              <div className="row">
                <div class="form-check form-check-inline form_check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input col-md-6"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
              <div class="form-group col-md-14">
                <label for="inputState">State :</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                  <option>Maharashtra</option>
                  <option>Goa</option>
                  <option>Gujrat</option>
                  <option>Himachal Pradesh</option>
                  <option>Rajasthan</option>
                  <option>Andhrapradesh</option>
                  <option>Tamilnadu</option>
                  <option>Uttar Pradesh</option>
                  <option>Delhi</option>
                  <option>Punjab</option>
                  <option>Haryana</option>
                  <option>Nagaland</option>
                  <option>West Bengal</option>
                  <option>Kerela</option>
                  <option>Karnataka</option>
                </select>
              </div>
              <label htmlFor="">City :</label>
              <input type="text" className="form-control" />
              <label htmlFor="">Address :</label>
              <input type="text" className="form-control" />
              <button className="btn mt-4" style={{ color: "crimson",border:"1px solid crimson" }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
