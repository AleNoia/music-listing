// import { response } from 'express';
import generateDataService from '../services/DataServices.js';
const get = generateDataService();

function HtmlFactories() {

    function createCarouselImage(trackImage){
        $('.imageTrack').attr('src', trackImage)
    }

    function createCarouselTitle(podcastPopular, playlistPopular, albumPopular, trackPopular, artistPopular) {
        $('.titTrack').text(trackPopular);
        $('.titArtist').text(artistPopular);
        $('.titPodcast').text(podcastPopular);
        $('.titPlaylist').text(playlistPopular);
        $('.titAlbum').text(albumPopular);
    }

    async function Carousel() {

        let promise = get.Popular()
        promise.then(res => {

            // Inserindo os títulos
            createCarouselTitle(
                res.podcasts.data[0].title,
                res.playlists.data[0].title,
                res.albums.data[0].title,
                res.tracks.data[0].title,
                res.artists.data[0].name),
                
            // Inserindo as imagens
            createCarouselImage(
                // res.podcasts.data[0].artist.picture_small,
                // res.playlists.data[0].title,
                // res.albums.data[0].title,
                res.tracks.data[0].album.cover_medium,
                // res.artists.data[0].name
                ),

            console.log(res)
        })

        // Chamando o Carousel
        $('.carousel').carousel()

    }

    return {
        Carousel,
    }

}

export default HtmlFactories;