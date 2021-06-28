function DataFactory() {

    // Inserindo o link para o Deezer
    function DeezerPlay(classHtml, link) {
        $(classHtml).attr('href', link)
    }
    
    // Inserindo o autor
    function Author(classHtml, author) {
        $(classHtml).text(author)
    }
    
    // Inserindo a Preview
    function Preview(classHtml, preview) {
        $(classHtml).html(`<source src="${preview}" class="previewTrack" type="audio/mpeg">`)
    }
    
    // Inserindo a imagem
    function Image(classHtml, trackImage) {
        $(classHtml).attr('src', trackImage)
    }
    
    // Inserindo o título
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