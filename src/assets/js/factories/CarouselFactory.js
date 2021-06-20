import generateApiService from '../services/ApiService.js';
const get = generateApiService();

import generateDataFactories from './DataFactories.js';
const build = generateDataFactories();

function CarouselFactory() {

    async function Carousel() {

        let promise = get.Popular()
        promise.then(res => {

            // Inserindo os títulos
                // Track
                build.Title('.titTrack', res.tracks.data[0].title)
                // Artist
                build.Title('.titArtist', res.artists.data[0].name)
                // Podcast
                build.Title('.titPodcast', res.podcasts.data[0].title)
                // Playlist
                build.Title('.titPlaylist', res.playlists.data[0].title)
                // Album
                build.Title('.titAlbum', res.albums.data[0].title)


            // Inserindo as imagens
                // Track
                build.Image('.imageTrack', res.tracks.data[0].album.cover_big)
                // Artist
                build.Image('.imageArtist', res.artists.data[0].picture_big)
                // Podcast
                build.Image('.imagePodcast', res.podcasts.data[0].picture_big)
                // Playlist
                build.Image('.imagePlaylist', res.playlists.data[0].picture_big)
                // Album
                build.Image('.imageAlbum', res.albums.data[0].cover_big)


            // Inserindo o preview na sessão Track
            build.Preview('.audioControlTrack', res.tracks.data[0].preview),

            // Criando link para o Deezer 
                // Track
                build.DeezerPlay('.deezerPlay', res.tracks.data[0].link),
                // Artist
                build.DeezerPlay('.deezerArtist', res.artists.data[0].link),
                // Podcast
                build.DeezerPlay('.deezerPodcast', res.podcasts.data[0].link),
                // Playlist
                build.DeezerPlay('.deezerPlaylist', res.playlists.data[0].link),
                // Album
                build.DeezerPlay('.deezerAlbum', res.albums.data[0].link),

            // Autor da música da sessão track
            build.Author('.author', res.tracks.data[0].artist.name)

            console.log(res)
        })

        // Chamando o Carousel
        $('.carousel').carousel()

    }

    return {
        Carousel,
    }

}

export default CarouselFactory;