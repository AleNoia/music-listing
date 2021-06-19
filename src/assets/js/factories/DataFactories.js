function DataFactories() {

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

    return {
        DeezerPlay,
        Author,
        Preview,
        Image,
    }

}

export default DataFactories;