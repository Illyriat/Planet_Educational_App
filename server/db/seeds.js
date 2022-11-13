use planets;
db.dropDatabase();


db.planetInfo.insertMany([
    {
        "name": "Earth",
        "mass": 0.00315,
        "radius": 0.0892,
        "period": 365.2,
        "semi_major_axis": 1,
        "temperature": 288,
        "distance_light_year": 0,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 1,
        "img": "Planet_Educational_App/client/src/images/earth.jpg",
        "fun_facts": [
        {"Fact number 1":"Earth is the only place we know of so far that is inhabited by living things"},
        {"Fact number 2":"It is also the only planet in our solar system with liquid water on the surface."}, 
        {"Fact number 3":"Earth is 4.543 billion years old"}, 
        {"Fact number 4":"Earth’s atmosphere is made of gases. The mixture of gases, what we often refer to as ‘air’, are nitrogen, oxygen, argon, and carbon dioxide. Without them, we couldn’t live." },
        {"Fact number 5":"You could fit a million Earths in the Sun "},
        {"Fact number 6": "Earth isn’t perfectly round. Earth may look round but it’s actually not perfectly round. The planet bulges around the equator by an extra 0.3 percent due to how it rotates about its axis."}
      ]
      },
    {
        "name": "Venus",
        "mass": 0.00257,
        "radius": 0.0847,
        "period": 224.7,
        "semi_major_axis": 0.723332,
        "temperature": 737,
        "distance_light_year": 0.000004,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 0,
        "img": "",
        "fun_fact": [
        {"Fact number 1":"Venus spins slowly in the opposite direction from most planets."},
        {"Fact number 2":"A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system."}, 
        {"Fact number 3":"There are yellowish clouds of sulphuric acid that trap heat on Venus. "}, 
        {"Fact number 4":"Venus has crushing air pressure at its surface – more than 90 times that of Earth – similar to the pressure you’d encounter a mile below the ocean on Earth. That means if you stood on it you’d be crushed. That’s if the heat didn’t get to you first." },
        {"Fact number 5":"A day on Venus lasts 243 Earth Days "},
        {"Fact number 6": "You can see Venus at night. Venus is the third brightest natural object in the night sky after the Moon and The Sun."}
      ]
      },
    {
        "name": "Neptune",
        "mass": 0.0537,
        "radius": 0.346,
        "period": 59800,
        "semi_major_axis": 30.07,
        "temperature": 72,
        "distance_light_year": 0.000478,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 14,
        "img": "",
        "fun_fact": [
        {"Fact number 1":"Neptune is an ‘Ice Giant’  . Is dark, cold and whipped by supersonic winds."},
        {"Fact number 2":"It is he eighth and most distant major planet orbiting our Sun. Neptune is more than 30 times as far from the Sun as Earth"}, 
        {"Fact number 3":"It was the first planet located through mathematical calculations, rather than by telescope."}, 
        {"Fact number 4":"Neptune has at least 5 rings." },
        {"Fact number 5":"A year on Neptune is equivalent to 164.81 Earth Years"},
        {"Fact number 6": "There are arguments over who discovered Neptune The first person to have seen Neptune was likely Galileo. In one of his drawings we see Neptune labelled as a star. However because he didn’t recognise that it was a planet he didn’t get credit for discovering it. That credit goes to 2 mathematicians. French mathematician Urbain Le Verrier and the English mathematician John Couch Adams. They both predicted that a new planet – known as Planet X– would be discovered in a specific region of the sky."},
        {"Fact number 7": "Neptune has 14 moons."},
        {"Fact number 8":"Neptune is made up of methane – the same gas that makes up some of our trumps. The type of methane on Neptune gives it its blue colour."}
      ]
      },
    {
        "name": "Pluto",
        "mass": 0.000007,
        "radius": 0.0166,
        "period": 90560,
        "semi_major_axis": 39.48,
        "temperature": 44,
        "distance_light_year": 0.000559,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 5,
        "img": "",
        "fun_fact": [
        {"Fact number 1":"Pluto is a Dwarf Planet. Dwarf planets are smaller than planets. The first three objects classified as dwarf planets were Pluto, Eris, and Ceres."},
        {"Fact number 2":"Pluto was considered a planet until 2006. In August 2006 the International Astronomical Union (IAU) downgraded the status of Pluto from planet to “dwarf planet."}, 
        {"Fact number 3":"Pluto lies in the Kuiper Belt. The Kuiper Belt is a donut-shaped region of icy bodies beyond the orbit of Neptune. This is where Pluto can be found."},  
        {"Fact number 4":"Pluto is smaller than the Moon."},
        {"Fact number 5":"Pluto is the only place other than Earth in our solar system that has white-peaked mountains, but these white caps aren’t made of snow. Instead, they’re made of methane frost."},
        {"Fact number 6": "A year on Pluto is 248 Earth years."},
        {"Fact number 7": "Pluto has 5 moons"}, 
        {"Fact number 8": "Pluto is very far from the Sun so it’s super cold. In facts it’s -228 to -238 C, which is too cold for humans to live there."}
      ]
      },
     {
        "name": "Uranus",
        "mass": 0.0457,
        "radius": 0.358,
        "period": 30589,
        "semi_major_axis": 19.191,
        "temperature": 76,
        "distance_light_year": 0.000304,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 27,
        "img": "",
        "fun_fact": [
        {"Fact number 1":"Uranus is the seventh planet from the Sun"},
        {"Fact number 2":"It rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side."}, 
        {"Fact number 3":"It was the first planet to be discovered through a telescope."}, 
        {"Fact number 4":"You could fit 63 Earths inside Uranus." },
        {"Fact number 5":"Uranus is an ‘Ice Giant’."},
        {"Fact number 6": "Uranus has 13 rings."},
        {"Fact number 7": "Uranus’ Moons are named after Shakespeare characters. These names include Titania from A Midsummer Night’s Dream, Prospero from The Tempest and Cordelia from King Lear"}
      ]
      },
    {
        "name": "Jupiter",
        "mass": 1,
        "radius": 1,
        "period": 4331,
        "semi_major_axis": 5.204,
        "temperature": 165,
        "distance_light_year": 0.000088,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 80,
        "img": "",
        "fun_fact": [
        {"Fact number 1":"Jupiter is more than twice as massive than the other planets of our solar system combined."},
        {"Fact number 2":"The giant planet's Great Red spot is a centuries-old storm bigger than Earth."}, 
        {"Fact number 3":"Jupiter is the 5th planet away from The Sun."}, 
        {"Fact number 4":"Jupiter has rings, but they’re too faint to see very well." },
        {"Fact number 5":"Jupiter has 80 moons."},
        {"Fact number 6": "Jupiter is a gas giant because it is made mostly of gases hydrogen and helium."},
        {"Fact number 7":"A year on Jupiter is the same as 11.8 Earth years."},
        {"Fact number 8":"One day on Jupiter goes by in just 10 hours."},
        {"Fact number 9":"Jupiter is the third brightest object in the Solar System, after Venus and the Moon."}
      ]
      },
    {
        "name": "Mars",
        "mass": 0.000338,
        "radius": 0.0488,
        "period": 687,
        "semi_major_axis": 1.542,
        "temperature": 210,
        "distance_light_year": 0.000037,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 2,
        "img": "",
        "fun_fact": [
          {"Fact number 1":"There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere."},
        {"Fact number 2":"Mars is a dusty, cold, desert world with a very thin atmosphere."}, 
        {"Fact number 3":"Mars is in-between Earth and Jupiter."}, 
        {"Fact number 4":"Mars is red because it’s surface contains Iron." },
        {"Fact number 5":"A Year on Mars is longer than A Year on Earth."},
        {"Fact number 6": "Mars has 4 seasons like Earth. And that’s not where the similarities end. Like Earth, Mars has polar ice caps, volcanoes, canyons, and weather."},
        {"Fact number 7": "Mars is about half the size of Earth."},
        {"Fact number 8": "Mars has the highest mountain in our solar system. Mars is home to the highest mountain in our solar system. It’s a volcano called Olympus Mons. It’s about three times the height of Mount Everest, the highest mountain on Earth."}
      ]
      },
    {
        "name": "Saturn",
        "mass": 0.299,
        "radius": 0.843,
        "period": 10747,
        "semi_major_axis": 9.537,
        "temperature": 134,
        "distance_light_year": 0.00017,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 83,
        "img": "",
        "fun_fact": [
        {"Fact number 1":"Saturn is the sixth planet from the Sun."},
        {"Fact number 2":"Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system."}, 
        {"Fact number 3":"The other giant planets have rings, but none are as spectacular as Saturn’s."}, 
        {"Fact number 4":"You can’t stand on Saturn. Saturn is a Gas Giant. This means unlike Earth it doesn’t have a solid surface. In fact it’s surface is mainly made of Helium, the same gas you find in birthday balloons." },
        {"Fact number 5":"Saturn has rings."},
        {"Fact number 6": "It’s very windy on Saturn.Winds around the equator of Saturn can be 1,800 kilometres per hour. On Earth the fastest ever recorded wind was 407 kilometres per hour."},
        {"Fact number 7": "Saturn has more moons than any other planet in the Solar System. It has 82 confirmed moons."},
        {"Fact number 8": "A day on Saturn is only 10.7 hours and a year is 29 Earth years."}
      ]
      },
    {
        "name": "Mercury",
        "mass": 0.000174,
        "radius": 0.0341,
        "period": 88,
        "semi_major_axis": 0.387098,
        "temperature": 400,
        "distance_light_year": 0.000011,
        "host_star_mass": 1,
        "host_star_temperature": 6000,
        "body_type": "Planet",
        "satellites": 0,
        "img": "",
        "fun_fact": [
        {"Fact number 1":"Mercury is the smallest planet in our solar system and closest to the Sun"},
        {"Fact number 2":"It is only slightly larger than Earth's Moon."}, 
        {"Fact number 3":"Mercury is the fastest planet, zipping around the Sun every 88 Earth days."}, 
        {"Fact number 4":"It is a Rocky Planet." },
        {"Fact number 5":"Mercury has been visited by two spacecraft – Mariner 10 and MESSENGER."},
        {"Fact number 6": "Mercury’s surface has ice on it."}, 
        {"Fact number 7": "Mercury is named after a Roman God."}
      ]
      }
]);