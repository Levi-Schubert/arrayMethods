const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", 
"pluto"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

const planetSection = document.createElement("section")
planets.forEach(currentPlanet => {
	const planet = document.createElement("p")
	planet.textContent = currentPlanet
	planetSection.appendChild(planet)
})
planetEl.appendChild(planetSection)


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const capPlanets = planets.map(function(planet) {return (planet[0].toUpperCase() + planet.slice(1))})


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const ePlanets = capPlanets.filter(planet => {
	return(planet.includes('e' || 'E'))
})


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const combineWords = words.reduce((sentence, nextWord) => (sentence + " " + nextWord))
