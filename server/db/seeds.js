use planets;
db.dropDatabase();


db.planetInfo.insertMany([
    {
        "name": "Earth",
        "description": "Our home planet—is the only place we know of so far that's inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
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

        "fun_fact": ["Earth is the only place we know of so far that is inhabited by living things",
        "It is also the only planet in our solar system with liquid water on the surface.", 
        "Earth is 4.543 billion years old", 
        "Earth’s atmosphere is made of gases. The mixture of gases, what we often refer to as ‘air’, are nitrogen, oxygen, argon, and carbon dioxide.",
        "You could fit a million Earths in the Sun ",
        "Earth isn’t perfectly round. The planet bulges around the equator by an extra 0.3 percent due to how it rotates about its axis."
      ],
        "img": "earth.jpg",
      },
    {
        "name": "Venus",
        "description": "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
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

        "fun_fact": [
        "Venus spins slowly in the opposite direction from most planets.",
        "A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.", 
        "There are yellowish clouds of sulphuric acid that trap heat on Venus. ", 
        "Venus has crushing air pressure at its surface – more than 90 times that of Earth – similar to the pressure you’d encounter a mile below the ocean on Earth.",
        "You can see Venus at night. Venus is the third brightest natural object in the night sky after the Moon and The Sun."
      ],

        "img": "venus.jpg",
      },
    {
        "name": "Neptune",
        "description": "The eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.",
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

        "fun_fact": [
        "Neptune is an 'Ice Giant'. Is dark, cold and whipped by supersonic winds.",
        "It is he eighth and most distant major planet orbiting our Sun. Neptune is more than 30 times as far from the Sun as Earth", 
        "It was the first planet located through mathematical calculations, rather than by telescope.", 
        "Neptune has at least 5 rings." ,
        "A year on Neptune is equivalent to 164.81 Earth Years",
        "There are arguments over who discovered Neptune The first person to have seen Neptune was likely Galileo.",
        "Neptune is made up of methane - the same gas that makes up some of our trumps. The type of methane on Neptune gives it its blue colour."
      ],

        "img": "neptune.jpg",

      },
    {
        "name": "Pluto",
        "description": "Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet, Pluto is the largest member of the Kuiper Belt and the best known of a new class of worlds called dwarf planets.",
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
        "fun_fact": [
        "Pluto is a Dwarf Planet. Dwarf planets are smaller than planets. The first three objects classified as dwarf planets were Pluto, Eris, and Ceres.",
        "Pluto was considered a planet until 2006. In August 2006 the International Astronomical Union (IAU) downgraded the status of Pluto from planet to “dwarf planet.", 
        "Pluto lies in the Kuiper Belt. The Kuiper Belt is a donut-shaped region of icy bodies beyond the orbit of Neptune. This is where Pluto can be found.",  
        "Pluto is smaller than the Moon.",
        "Pluto is the only place other than Earth in our solar system that has white-peaked mountains, but these white caps aren’t made of snow. Instead, they're made of methane frost.", 
        "Pluto is very far from the Sun so it’s super cold. In facts it's -228 to -238 C, which is too cold for humans to live there."
      ],
        "img": "pluto.jpg",
      },
     {
        "name": "Uranus",
        "description": "Seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
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

        "fun_fact": [
        "Uranus is the seventh planet from the Sun",
        "It rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.", 
        "It was the first planet to be discovered through a telescope.", 
        "You could fit 63 Earths inside Uranus.",
        "Uranus is an 'Ice Giant'.",
        "Uranus has 13 rings.",
        "Uranus' Moons are named after Shakespeare characters. These names include Titania from A Midsummer Night's Dream, Prospero from The Tempest and Cordelia from King Lear"
      ],

        "img": "uranus.jpg",

      },
    {
        "name": "Jupiter",
        "description": "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth",
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

        "fun_fact": [
        "Jupiter is more than twice as massive than the other planets of our solar system combined.",
        "The giant planet's Great Red spot is a centuries-old storm bigger than Earth.", 
        "Jupiter is the 5th planet away from The Sun.", 
        "Jupiter has rings, but they’re too faint to see very well.",
        "Jupiter has 80 moons.",
        "Jupiter is a gas giant because it is made mostly of gases hydrogen and helium.",
        "A year on Jupiter is the same as 11.8 Earth years.",
        "One day on Jupiter goes by in just 10 hours.",
        "Jupiter is the third brightest object in the Solar System, after Venus and the Moon."
      ],
        "img": "jupiter.jpg",

      },
    {
        "name": "Mars",
        "description": "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.",
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

        "fun_fact": [
          "There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.",
        "Mars is a dusty, cold, desert world with a very thin atmosphere.", 
        "Mars is in-between Earth and Jupiter.", 
        "Mars is red because it’s surface contains Iron.",
        "A Year on Mars is longer than A Year on Earth.",
        "Mars has 4 seasons like Earth. And that’s not where the similarities end. Like Earth, Mars has polar ice caps, volcanoes, canyons, and weather.",
        "Mars is about half the size of Earth.",
        "Mars has the highest mountain in our solar system. It’s a volcano called Olympus Mons. It’s about three times the height of Mount Everest."
      ],

        "img": "mars.jpg",

      },
    {
        "name": "Saturn",
        "description": "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
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

        "fun_fact": [
        "Saturn is the sixth planet from the Sun.",
        "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system.", 
        "The other giant planets have rings, but none are as spectacular as Saturn’s.", 
        "You can’t stand on Saturn. Saturn is a Gas Giant. This means unlike Earth it doesn’t have a solid surface. In fact it’s surface is mainly made of Helium, the same gas you find in birthday balloons.",
        "Saturn has rings.",
        "It’s very windy on Saturn.Winds around the equator of Saturn can be 1,800 kilometres per hour. On Earth the fastest ever recorded wind was 407 kilometres per hour.",
        "Saturn has more moons than any other planet in the Solar System. It has 82 confirmed moons.",
        "A day on Saturn is only 10.7 hours and a year is 29 Earth years."
      ],

        "img": "saturn.jpg",

      },
    {
        "name": "Mercury",
        "description": "the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days",
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

        "fun_fact": [
        "Mercury is the smallest planet in our solar system and closest to the Sun",
        "It is only slightly larger than Earth's Moon.", 
        "Mercury is the fastest planet, zipping around the Sun every 88 Earth days.", 
        "It is a Rocky Planet.",
        "Mercury has been visited by two spacecraft – Mariner 10 and MESSENGER.",
        "Mercury’s surface has ice on it.", 
        "Mercury is named after a Roman God."
      ],

        "img": "Mercury.jpg",

      }
]);