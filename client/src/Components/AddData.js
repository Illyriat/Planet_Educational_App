import React, { useState} from 'react';
import Header from "../Components/Header";
import Footer from './Footer';
import { postPlanetData } from './AddDataService';
import './AddData.css';

const AddData = ({addPlanet}) => {

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
        fun_facts: []
    });

    const onChange = (evt) =>{
        const newPlanetData = Object.assign({}, planetData);
        newPlanetData[evt.target.name] = evt.target.value;
        setPlanetData(newPlanetData);
    }


    //submit on click function
    const onSubmit = (evt) =>{
        evt.preventDefault();
        postPlanetData(planetData).then((data) =>{
            addPlanet(data);
        })
        //then resets form to empty input values
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
            body_type: "",
            satellites: "",
            img: "",
            fun_facts: []
        });
    }



    return ( 
        <>
            <Header />

            <form onSubmit={onSubmit} id="planet-form" >
                <h2 className="add-title-data">Add a Planet: </h2>
                <div className="formwarp">
                    <label htmlFor="name" className='data-text'>Name: </label>
                    <input
                    onChange={onChange}
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={planetData.name}
                    />
                </div>

                <div className='formwrap'>
                    <label htmlFor="mass" className='data-text'>Mass: </label>
                    <input
                    onchange={onChange}
                    type="text"
                    id="mass"
                    name="mass"
                    defaultValue={planetData.mass}
                    />
                </div>

                <div className='formwrap'>
                    <label htmlFor="radius" className='data-text'>Radius: </label>
                    <input
                    onchange={onChange}
                    type="text"
                    id="radius"
                    name="radius"
                    defaultValue={planetData.radius}
                    />
                </div>

                <div className='formwrap'>
                    <label htmlFor="period" className='data-text'>Orbital Period: </label>
                    <input
                    onchange={onChange}
                    type="text"
                    id="period"
                    name="period"
                    defaultValue={planetData.period}
                    />
                </div>

                <div className='formwrap'>
                    <label htmlFor="semi_major_axis" className='data-text'>Axis: </label>
                    <input
                    onchange={onChange}
                    type="text"
                    id="semi_major_axis"
                    name="semi_major_axis"
                    defaultValue={planetData.semi_major_axis}
                    />
                </div>

                <div className='formwrap'>
                    <label htmlFor="temperature" className='data-text'>Temperature: </label>
                    <input
                    onchange={onChange}
                    type="text"
                    id="temperature"
                    name="temperature"
                    defaultValue={planetData.temperature}
                    />
                </div>

                <div className='formwrap'>
                    <label htmlFor="distance_light_years" className='data-text'>Distance In Light Years: </label>
                    <input
                    onchange={onChange}
                    type="text"
                    id="distance_light_years"
                    name="distance_light_years"
                    defaultValue={planetData.distance_light_years}
                    />
                </div>

                <div className='formwrap'>
                    <label htmlFor="host_star_mass" className='data-text'>Host Star Mass: </label>
                    <input
                    onchange={onChange}
                    type="text"
                    id="host_star_mass"
                    name="host_star_mass"
                    defaultValue={planetData.host_star_mass}
                    />
                </div>

                <div className='formwrap'>
                    <label htmlFor="host_star_temperature" className='data-text'>Host Star Temperature: </label>
                    <input
                    onchange={onChange}
                    type="text"
                    id="host_star_temperature"
                    name="host_star_temperature"
                    defaultValue={planetData.host_star_temperature}
                    />
                </div>

                <div className='formwarp'>
                    <label htmlFor='multi_select' className='data-text'>Body Type</label>
                    <select name = "dropdown">
                        <option value = "Planet" selected>Planet</option>
                        <option value = "Dwarf_Planet">Dwarf Planet</option>
                        <option value = "Moon">Moon</option>
                        <option value = "Astriod">Astriod</option>
                        <option value = "Commet">Commet</option>
                    </select>
                </div>

                <div className='formwrap'>
                    <label htmlFor="satellites" className='data-text'>Satellites: </label>
                    <input
                    onchange={onChange}
                    type="text"
                    id="satellites"
                    name="satellites"
                    defaultValue={planetData.satellites}
                    />
                </div>

                <div className='formwrap'>
                    <label htmlFor="img" className='data-text'>Add a link to an image here: </label>
                    <input
                    onchange={onChange}
                    type="text"
                    id="img"
                    name="img"
                    defaultValue={planetData.img}
                    />
                </div>

                <div className='formwrap'>
                    <label htmlFor="fun_facts" className='data-text'>Tell us a fun fact!: </label>
                    <input
                    onchange={onChange}
                    type="text"
                    id="fun_facts"
                    name="fun_facts"
                    defaultValue={planetData.fun_facts}
                    />
                </div>

                <input type="submit" value="Save" id="save"/>
            </form>
            
            <Footer />
        </>
     );
}
 
export default AddData;