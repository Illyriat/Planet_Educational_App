import React from "react";
import Header from "../Components/Header";
import "./CarouselComponent.css";
import styled from "styled-components";

const MoonHeader = styled.div`
  color: white;
  border-bottom: 2px solid white;
  padding-bottom: 0.5rem;
  font-size: 3rem;
  width: 20rem;
  margin: 3rem auto 2rem;
  text-align: center;
`;

const Moondata = styled.div`
  padding: 2rem;
  color: white;
  border: 2px solid white;
  width: 25rem;
  min-width: 10rem;
`;

const Flexcontainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const MoreInfo = () => {
  return (
    <>
      <Header />
      <MoonHeader>Saturns Moons</MoonHeader>
      <Flexcontainer>
        <Moondata>
          <iframe
            src="https://solarsystem.nasa.gov/gltf_embed/2354"
            title="moon"
            width="100%"
            frameBorder="0"
          />
          <h2>Rhea</h2>
          <p>
            Giovanni Cassini discovered Rhea on Dec. 23, 1672. Rhea is the
            second largest moon of Saturn, but with a mean radius of 475 miles
            (764 kilometers) it is less than a third the radius of Saturn’s
            largest moon, Titan. Rhea is a small, cold, airless body that is
            very similar to sister moons Dione and Tethys.
          </p>
        </Moondata>
        <Moondata>
          <iframe
            src="https://solarsystem.nasa.gov/gltf_embed/2391"
            width="100%"
            title="moon"
            frameBorder="0"
          />
          <h2>Dione</h2>
          <p>
            Giovanni Cassini discovered Dione on March 21, 1684. Dione is a
            small moon of 349 miles (562 km) in mean radius orbiting Saturn
            every 2.7 days at a distance of 234,500 miles (377,400 km), which is
            roughly the same distance that the moon orbits around the Earth.
            Dione's features include heavily cratered terrain with craters as
            large as 62 miles (100 km) across, moderately cratered plains,
            lightly cratered plains, and fractured areas.{" "}
          </p>
        </Moondata>
        <Moondata>
          <iframe
            src="https://solarsystem.nasa.gov/gltf_embed/2347"
            width="100%"
            frameBorder="0"
            title="moon"
          />
          <h2>Titan</h2>
          <p>
            Saturn's largest moon Titan is an extraordinary and exceptional
            world. Among our solar system’s more than 150 known moons, Titan is
            the only one with a substantial atmosphere. And of all the places in
            the solar system, Titan is the only place besides Earth known to
            have liquids in the form of rivers, lakes and seas on its surface.
            Titan is larger than the planet Mercury and is the second largest
            moon in our
          </p>
        </Moondata>
        <Moondata>
          <iframe
            src="https://solarsystem.nasa.gov/gltf_embed/2368"
            width="100%"
            frameBorder="0"
            title="moon"
          />
          <h2>Mimas</h2>
          <p>
            Mimas was discovered on Sept. 17, 1789 by English astronomer William
            Herschel, using his 40-foot reflector telescope. Ground-based
            astronomers could only see Mimas as little more than a dot until
            Voyagers I and II imaged it in 1980. The Cassini spacecraft made
            several close approaches and provided detailed images of Mimas. Less
            than 123 miles (198 kilometers) in mean radius, crater-covered Mimas
            is the smallest and innermost of Saturn’s major moons. It is not
            quite big enough to hold a round shape, so it is somewhat ovoid with
            dimensions of 129 x 122 x 119 miles (207 x 197 x 191 kilometers,
            respectively). Its low density suggests that it consists almost
            entirely of water ice, which is the only substance ever detected on
            Mimas.
          </p>
        </Moondata>
        <Moondata>
          <iframe
            src="https://solarsystem.nasa.gov/gltf_embed/2381"
            width="100%"
            frameBorder="0"
            title="moon"
          />
          <h2>Lapetus</h2>
          <p>
            Giovanni Cassini discovered Iapetus on Oct. 25, 1671. However, to
            astronomers Iapetus appeared only as a dot whose brightness varied
            from brighter to fainter over the course of an orbit around Saturn.
            The Voyager I and Voyager II encounters in 1980 and 1981 validated
            Cassini’s original observations and explanation with images showing
            the different reflectivity of Iapetus’ hemispheres. Iapetus has been
            called the yin and yang of the Saturn moons because its leading
            hemisphere has a reflectivity (or albedo) as dark as coal (albedo
            0.03-0.05 with a slight reddish tinge) and its trailing hemisphere
            is much brighter at 0.5-0.6. Saturn's third largest moon, Iapetus
            has a mean radius of 457 miles (736 kilometers) and a density only
            1.2 times that of liquid water. It has been suggested that Iapetus
            (like Rhea) is three quarters ice and one quarter rock
          </p>
        </Moondata>
        <Moondata>
          <iframe
            src="https://solarsystem.nasa.gov/gltf_embed/2347"
            width="100%"
            frameBorder="0"
            title="moon"
          />
          <h2>Tethys</h2>
          <p>
            a mid-sized moon of Saturn about 1,060 km (660 mi) across. It was
            discovered by G. D. Cassini in 1684 and is named after the titan
            Tethys of Greek mythology. Tethys has a low density of 0.98 g/cm3,
            the lowest of all the major moons in the Solar System, indicating
            that it is made of water ice with just a small fraction of rock.
            This is confirmed by the spectroscopy of its surface, which
            identified water ice as the dominant surface material. A small
            amount of an unidentified dark material is present as well. The
            surface of Tethys is very bright, being the second-brightest of the
            moons of Saturn after Enceladus, and neutral in color.
          </p>
        </Moondata>
        <Moondata>
          <iframe
            src="https://solarsystem.nasa.gov/gltf_embed/2382"
            width="100%"
            frameBorder="0"
            title="moon"
          />
          <h2>Hyperion</h2>
          <p>
            Hyperion /hai'piəriən/, also known as Saturn VII, is a moon of
            Saturn discovered by William Cranch Bond, his son George Phillips
            Bond and William Lassell in 1848. It is distinguished by its
            irregular shape, its chaotic rotation, and its unexplained
            sponge-like appearance. It was the first non-round moon to be
            discovered.
          </p>
        </Moondata>
        <Moondata>
          <iframe
            src="https://solarsystem.nasa.gov/gltf_embed/2391"
            width="100%"
            frameBorder="0"
            title="moon"
          />
          <h2>Enceladus</h2>
          <p>
            Enceladus is the sixth-largest moon of Saturn (19th largest in the
            Solar System). It is about 500 kilometers (310 miles) in
            diameter,[5] about a tenth of that of Saturn's largest moon, Titan.
            Enceladus is mostly covered by fresh, clean ice, making it one of
            the most reflective bodies of the Solar System. Consequently, its
            surface temperature at noon only reaches -198 °C (75.1 K; -324.4
            °F), far colder than a light-absorbing body would be. Despite its
            small size, Enceladus has a wide range of surface features, ranging
            from old, heavily cratered regions to young, tectonically deformed
            terrains.
          </p>
        </Moondata>
      </Flexcontainer>
    </>
  );
};

export default MoreInfo;
