function ApiService() {

    let targetUrl = 'http://localhost:3333'

    // Fazendo requisição da API para os (tracks, albums, artists, playlists e podcasts) mais populares
    async function Popular() {
        let response = await fetch(targetUrl + `/chart/tracks`)
        return response.json()
    }

    // Fazendo requpsição da API de um album, artist, history, playlist, podcast, radio, track e user
    async function Search(value) {
        let response = await fetch(targetUrl + `/search?q=${value}`)
        return response.json()
    }   

    // Fazendo requisição da API de gêneros
    async function Genrer() {
        let response = await fetch(targetUrl + `/genre`)
        return response.json()
    }   

    return {
        Popular,
        Search,
        Genrer,
    }
}

export default ApiService;