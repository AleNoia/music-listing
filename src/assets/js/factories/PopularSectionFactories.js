import generateApiService from '../services/ApiService.js';
const get = generateApiService();

import generateListSectionFactory from './ListSectionFactory.js';
const build = generateListSectionFactory();

function PopularSectionFactories() {

    async function PopularSection() {

        let array; // Array com a lista

        // Criando um array com a lista de musica
        get.Popular().then(res => {
            array = res
        })

        // Ouvindo o evento de click e criando a lista de acordo com o tipo (musica, artista, podcast e album)
        $(".btn-group").click(function (event) {
            let targ = event.target.id
            if(targ == 'musics') build.ListSection('musics', array)
            if(targ == 'artists') build.ListSection('artists', array)
            if(targ == 'podcasts') build.ListSection('podcasts', array)
            if(targ == 'playlists') build.ListSection('playlists', array)
            if(targ == 'albuns') build.ListSection('albuns', array)
        });
    }

    return {
        PopularSection,
    }

}

export default PopularSectionFactories;