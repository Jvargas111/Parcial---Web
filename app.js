const obtenerValor = () => {
   let inputText = document.getElementById('input_pokemon')
   let valor = inputText.value.toLowerCase();
   peticionesApi(valor)
}

const peticionesApi = (pokemon) => {
    const baseURL = 'https://pokeapi.co/api/v2/';
    const enpoint = `pokemon/${pokemon}`;
    const url = `${baseURL}${enpoint}`;

    axios.get(url)
    .then(res => printData(res.data))
    .catch(err => console.log(err))
}

const printData = (data) => {
    let response = document.getElementById('show-information');
    response.innerHTML = `
        <h3>Nombre: ${data.name}</h3>
        <img src="${data.sprites.front_default}" alt="Pokemones" class='pokemones-img'> 
        <h3>ID: ${data.id}</h3>
    `;
}