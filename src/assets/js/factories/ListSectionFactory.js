function ListSectionFactory() {

    function ListSection(type, array) {
        $('.listSection').html('') // Zerando o html para a entrada de uma nova lista

        let img // Armazenando o caminho da imagem

        // Validando de acordo com o tipo pois os caminhos no obj são diferentes
        if (type == 'musics') {
            array = array.tracks.data
            img = 'value.album.cover_medium'
        }

        if (type == 'albuns') {
            array = array.albums.data
            img = 'value.cover_medium'
        }

        if (type == 'artists') {
            array = array.artists.data
            img = 'value.picture_medium'
        }

        if (type == 'podcasts') {
            array = array.podcasts.data
            img = 'value.picture_medium'
        }

        if (type == 'playlists') {
            array = array.playlists.data
            img = 'value.picture_medium'
        }

        // Verificando se é do tipo musics, se sim, retornará true para o preview
        function preview() {
            if (type == 'musics') {
                return true
            } else {
                return false
            }

        }

        // Gerando o card de acordo com o tipo
        $.each(array, function (key, value) {
            console.log(value)
            $('.listSection').append(`
            <div class="card cardProject mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${eval(img)}" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${key + 1}</h5>
                  <h5 class="card-title">${type == 'artists' ? value.name : value.title}</h5>
                  <h4 class="subTit">${type == 'artists' ? value.name : value.title}</h4>
                  ${ // Verificando se o tipo é music para inserir o preview
                      (function (){
                          if(preview()){
                              return `
                              <audio controls class="preview audioControlTrack">
                                <source src="${value.preview}" class="previewTrack" type="audio/mpeg">
                                </audio>
                              `
                          } else {
                              return ''
                          }
                      })()
                  }
                </div>
              </div>
            </div>
          </div>
            `)
        })

    }

    return {
        ListSection,
    }

}

export default ListSectionFactory;