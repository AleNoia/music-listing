function DataFactory() {

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

    return {
        DeezerPlay,
        Author,
        Preview,
        Image,
        Title,
    }

}

export default DataFactory;