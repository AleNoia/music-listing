// import generateCreate from './create.js';
// const create = generateCreate();

function Core() {

    let targetUrl = 'http://localhost:3333'

    function start() {
        let promise = getArtist('Metallica')
        promise.then(res =>{
            console.log(res)
        })
    }

    // Fazendo requisição da API para os (tracks, albums, artists, playlists e podcasts) mais populares
    async function getPopularMusic(value) {
        let response = await fetch(targetUrl + `/chart/${value}`)
        return response.json()
    }

    // Fazendo requisição da API de um album, artist, history, playlist, podcast, radio, track e user
    async function getArtist(value) {
        let response = await fetch(targetUrl + `/search?q=${value}`)
        return response.json()
    }

    return {
        start,
    }
}

export default Core;