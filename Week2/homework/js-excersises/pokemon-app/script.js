function main() {
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const getPokemonsBtn = document.createElement('button');
  document.body.appendChild(div1);
  document.body.appendChild(div2);
  document.body.appendChild(div3);
  div1.appendChild(getPokemonsBtn);

  getPokemonsBtn.innerText = 'Get Pokemons!';
  getPokemonsBtn.addEventListener('click', fetchData);

  const pokemonImg = document.createElement('img');
  pokemonImg.width = '200';
  div3.appendChild(pokemonImg);

  function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=1050')
      .then(res => res.json())
      .then(function addPokemonToList(data) {
        let results = data.results;
        let pokemonList = ' ';

        results.forEach(pokemon => {
          pokemonList += `
            
            <option value='${pokemon.url}' class='option'> ${pokemon.name}</option>
            

            
            
            `;
        });

        div2.innerHTML = `<select id="select">${pokemonList}</select>`;
        const select = document.getElementById('select');
        div2.appendChild(select);
        select.addEventListener('change', fetchPokemonImg);
      });
  }
  function fetchPokemonImg(e) {
    fetch(e.target.value)
      .then(response => response.json())
      .then(pokemonData => {
        if (pokemonData.sprites.front_default) {
          pokemonImg.src = `${pokemonData.sprites.front_default}`;
        }
      });
  }
}
window.addEventListener('load', main);
