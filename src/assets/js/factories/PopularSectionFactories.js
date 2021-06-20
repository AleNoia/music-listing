import generateApiService from '../services/ApiService.js';
const get = generateApiService();

import generateListSectionFactory from './ListSectionFactory.js';
const build = generateListSectionFactory();

function PopularSectionFactories() {

    async function PopularSection() {

        let array;

        get.Popular().then(res => {
            array = res
        })

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