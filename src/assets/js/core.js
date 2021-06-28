import CarouselFactory from './factories/CarouselFactory.js';
const build = CarouselFactory();

import PopularSectionFactories from './factories/PopularSectionFactories.js';
const buildSection = PopularSectionFactories();

function Core() {

    function start() {
        home() // Iniciando a página home
    }

    // Função para inicar a página home
    function home() {
        build.Carousel() //Iniciando o Carousel
        buildSection.PopularSection(); // Iniciando a listagem
    }

    return {
        start,
    }
}

export default Core;