import React from "react";
import "./form.style.css";
import Autocomplete from "react-google-autocomplete";
const Form = (props) => {
  return (
    <div className="container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              name="country"
              placeholder="Country"
              type="hidden"
            />
          </div>
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="city"
              placeholder="City"
            />
            <Autocomplete
              style={{ width: "90%" }}
              onPlaceSelected={(place) => {
                console.log(place);
              }}
              types={["(regions)"]}
              componentRestrictions={{ country: "ru" }}
            />
          </div>
          <div className=".col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      please Provide proper Values.
    </div>
  );
}
export default Form;
