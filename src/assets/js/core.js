import generateDataService from './services/ApiService.js';
const get = generateDataService();

import CarouselFactory from './factories/CarouselFactory.js';
const build = CarouselFactory();

import PopularSectionFactories from './factories/PopularSectionFactories.js';
const buildSection = PopularSectionFactories();


function Core() {

    function start() {
        home()
    }

    // Função para inicar a página home
    function home() {
        build.Carousel()
        buildSection.PopularSection();
    }





    return {
        start,
    }
}

export default Core;