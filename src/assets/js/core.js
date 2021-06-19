import generateDataService from './services/ApiService.js';
const get = generateDataService();
import CarouselFactory from './factories/CarouselFactory.js';
const build = CarouselFactory();

function Core() {

    function start() {
        // let promise = get.Popular('tracks')
        // promise.then(res =>{
        //     console.log(res)
        // })
        build.Carousel()
        // $(document).ready(function () {
        //     alert('Olá mundo');
        //     $('.carousel').carousel()
        // });

    }



    

    return {
        start,
    }
}

export default Core;