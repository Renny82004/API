function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character")

    results.then(response => response.json())
    .then(data=>{
        done(data)
    });

}
getCharacters(data=>{
    data.results.array.array.forEach(personaje => {
        const article = document.createRange().createContextualFragment()
    });
});