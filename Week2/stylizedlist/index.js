const myPrint = document.getElementById("printDown");

const lukeInfo = {
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.co/api/planets/1/",
	"films": [
		"https://swapi.co/api/films/2/",
		"https://swapi.co/api/films/6/",
		"https://swapi.co/api/films/3/",
		"https://swapi.co/api/films/1/",
		"https://swapi.co/api/films/7/"
	],
	"species": [
		"https://swapi.co/api/species/1/"
	],
	"vehicles": [
		"https://swapi.co/api/vehicles/14/",
		"https://swapi.co/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.co/api/starships/12/",
		"https://swapi.co/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.co/api/people/1/"
}

function printRun() {  
    myPrint.innerHTML = `<ol>
        <li>Name: ${lukeInfo.name}</li>
        <li>Height: ${lukeInfo.height}</li>
        <li>Mass: ${lukeInfo.mass}</li>
        <li>Hair Color: ${lukeInfo.hair_color}</li>
        <li>Skin Color: ${lukeInfo.skin_color}</li>
        <li>Eye Color: ${lukeInfo.eye_color}</li>
        <li>Birth Year: ${lukeInfo.birth_year}</li>
        <li>Gender: ${lukeInfo.gender}</li>
        <li>Homeworld: ${lukeInfo.homeworld}</li>
        <li>Films: <ul> 
                <li>${lukeInfo.films[0]}</li>
                <li>${lukeInfo.films[1]}</li>
                <li>${lukeInfo.films[2]}</li>
                <li>${lukeInfo.films[3]}</li>
                <li>${lukeInfo.films[4]}</li>
            </ul>
        </li>
        <li>Species: <ul>
                <li>${lukeInfo.species[0]}</li>
            </ul>
        </li>
        <li>Vehicles: <ul>
                <li>${lukeInfo.vehicles[0]}</li>
                <li>${lukeInfo.vehicles[1]}</li>
            </ul>
        </li>
        <li>Starships: <ul>
                <li>${lukeInfo.starships[0]}</li>
                <li>${lukeInfo.starships[1]}</li>
            </ul>
        </li>
        <li>Created: ${lukeInfo.created}</li>
        <li>Edited: ${lukeInfo.edited}</li>
        <li>URL: ${lukeInfo.url}</li>
        </ol>`;
} 