import generateApiService from '../services/ApiService.js';
const get = generateApiService();

function CarouselFactory() {

    function DeezerPlay(classHtml, link) {
        $(classHtml).attr('href', link)
    }

    function Author(classHtml, author) {
        $(classHtml).text(author)
    }

    function Preview(classHtml, preview) {
        $(classHtml).html(`<source src="${preview}" class="previewTrack" type="audio/mpeg">`)
    }

    function Image(classHtml, trackImage) {
        $(classHtml).attr('src', trackImage)
    }

    function Title(classHtml, tit) {
        $(classHtml).text(tit);
    }

    async function Carousel() {

        let promise = get.Popular()
        promise.then(res => {

            // Inserindo os títulos
                // Track
                Title('.titTrack', res.tracks.data[0].title)
                // Artist
                Title('.titArtist', res.artists.data[0].name)
                // Podcast
                Title('.titPodcast', res.podcasts.data[0].title)
                // Playlist
                Title('.titPlaylist', res.playlists.data[0].title)
                // Album
                Title('.titAlbum', res.albums.data[0].title)


            // Inserindo as imagens
                // Track
                Image('.imageTrack', res.tracks.data[0].album.cover_big)
                // Artist
                Image('.imageArtist', res.artists.data[0].picture_big)
                // Podcast
                Image('.imagePodcast', res.podcasts.data[0].picture_big)
                // Playlist
                Image('.imagePlaylist', res.playlists.data[0].picture_big)
                // Album
                Image('.imageAlbum', res.albums.data[0].cover_big)


            // Inserindo o preview na sessão Track
            Preview('.audioControlTrack', res.tracks.data[0].preview),

            // Criando link para o Deezer 
                // Track
                DeezerPlay('.deezerPlay', res.tracks.data[0].link),
                // Artist
                DeezerPlay('.deezerArtist', res.artists.data[0].link),
                // Podcast
                DeezerPlay('.deezerPodcast', res.podcasts.data[0].link),
                // Playlist
                DeezerPlay('.deezerPlaylist', res.playlists.data[0].link),
                // Album
                DeezerPlay('.deezerAlbum', res.albums.data[0].link),

            // Autor da música da sessão track
            Author('.author', res.tracks.data[0].artist.name),

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