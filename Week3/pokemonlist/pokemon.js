const xhr = new XMLHttpRequest();
const pokes = document.getElementById('pokelist');

xhr.open('GET', 'https://api.vschool.io/pokemon', true);
xhr.send();

xhr.onreadystatechange = () => {
   if(xhr.readyState === 4 && xhr.status === 200) {
      let parsed = JSON.parse(xhr.responseText);
      const pokemonList = parsed.objects[0].pokemon;

      for(const pokemon of pokemonList) {
         pokes.innerHTML += pokemon.name + "<br/>"
      }
   }
}

