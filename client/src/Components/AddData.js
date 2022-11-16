import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "./Footer";
import { postPlanetData } from "./AddDataService";
import "./AddData.css";
import swal from "sweetalert";

const AddData = ({ addPlanet }) => {
  const [planetData, setPlanetData] = useState({
    name: "",
    mass: "",
    radius: "",
    period: "",
    semi_major_axis: "",
    temperature: "",
    distance_light_year: "",
    host_star_mass: "",
    host_star_temperature: "",
    body_type: "",
    satellites: "",
    img: "",
    fun_fact: [],
  });

  const onChange = (evt) => {
    const newPlanetData = Object.assign({}, planetData);
    newPlanetData[evt.target.name] = evt.target.value;
    setPlanetData(newPlanetData);
  };

  //submit on click function
  const onSubmit = (evt) => {
    evt.preventDefault();
    postPlanetData(planetData).then((data) => {
      // addPlanet(data);
      setPlanetData({
        name: "",
        mass: "",
        radius: "",
        period: "",
        semi_major_axis: "",
        temperature: "",
        distance_light_year: "",
        host_star_mass: "",
        host_star_temperature: "",
        body_type: "Choose a Body Type",
        satellites: "",
        img: "",
        fun_fact: [],
      });
      swal({
        title: "Success!",
        text: "Thank you! Your submission has been added to the data base",
        icon: "success",
        button: "Continue",
      });
    });
  };

  return (
    <>
      <Header />

      <div className="form-container">
        <form
          className="form"
          onSubmit={onSubmit}
          id="planet-form"
          method="POST"
          action="/success/"
        >
          <h2 className="add-title-data">Add a Planet: </h2>
          <div className="formwrap">
            <label htmlFor="name" className="data-text">
              Name:{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="name"
              name="name"
              value={planetData.name}
              required
            />
          </div>

          <div className="formwrap">
            <label htmlFor="mass" className="data-text">
              Mass:{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="mass"
              name="mass"
              value={planetData.mass}
              required
            />
          </div>

          <div className="formwrap">
            <label htmlFor="radius" className="data-text">
              Radius (Km):{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="radius"
              name="radius"
              value={planetData.radius}
              required
            />
          </div>

          <div className="formwrap">
            <label htmlFor="period" className="data-text">
              Orbital Period (days):{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="period"
              name="period"
              value={planetData.period}
              required
            />
          </div>

          <div className="formwrap">
            <label htmlFor="semi_major_axis" className="data-text">
              Axis:{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="semi_major_axis"
              name="semi_major_axis"
              value={planetData.semi_major_axis}
              required
            />
          </div>

          <div className="formwrap">
            <label htmlFor="temperature" className="data-text">
              Temperature (Kelvin):{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="temperature"
              name="temperature"
              value={planetData.temperature}
              required
            />
          </div>

          <div className="formwrap">
            <label htmlFor="distance_light_year" className="data-text">
              Distance In Light Years:{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="distance_light_year"
              name="distance_light_year"
              value={planetData.distance_light_year}
              required
            />
          </div>

          <div className="formwrap">
            <label htmlFor="host_star_mass" className="data-text">
              Host Star Mass:{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="host_star_mass"
              name="host_star_mass"
              value={planetData.host_star_mass}
              required
            />
          </div>

          <div className="formwrap">
            <label htmlFor="host_star_temperature" className="data-text">
              Host Star Temperature (Kelvin):{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="host_star_temperature"
              name="host_star_temperature"
              value={planetData.host_star_temperature}
              required
            />
          </div>

          <div className="formwrap">
            <label htmlFor="multi_select" className="data-text">
              Body Type:{" "}
            </label>
            <select
              onChange={onChange}
              name="body_type"
              defaultValue={planetData.body_type}
            >
              <option value="Planet">Planet</option>
              <option value="Dwarf_Planet">Dwarf Planet</option>
              <option value="Moon">Moon</option>
              <option value="Astriod">Astriod</option>
              <option value="Commet">Commet</option>
            </select>
          </div>

          <div className="formwrap">
            <label htmlFor="satellites" className="data-text">
              Satellites:{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="satellites"
              name="satellites"
              value={planetData.satellites}
              required
            />
          </div>

          <div className="formwrap">
            <label htmlFor="img" className="data-text">
              Add a link to an image here:{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="img"
              name="img"
              value={planetData.img}
              required
            />
          </div>

          <div className="formwrap">
            <label htmlFor="fun_fact" className="data-text">
              Tell us a fun fact!:{" "}
            </label>
            <input
              onChange={onChange}
              type="text"
              id="fun_facts"
              name="fun_fact"
              value={planetData.fun_fact}
              required
            />
          </div>

          <input
            className="form-btn"
            type="submit"
            value="Save"
            id="save"
            action="/success/"
          />
        </form>
      </div>

      <Footer />
    </>
  );
};

export default AddData;
