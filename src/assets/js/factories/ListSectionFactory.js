function ListSectionFactory() {

    function ListSection(type, array) {
        $('.listSection').html('')

        let img
        let previewHtml

        if (type == 'musics') {
            array = array.tracks.data
            img = 'value.album.cover_medium'
            previewHtml = 'value.preview'
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

        function preview(){
            if(type == musics){
                return `
                <audio controls class="preview audioControlTrack">
                <source src="${eval(previewHtml)}" class="previewTrack" type="audio/mpeg">
                </audio>
                `
            } else {
                return ''
            }

        }

        $.each(array, function (key, value) {
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
                  ${preview()}
                  <h4 class="subTit">${value.name}</h4>
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