import generateDataService from './services/DataServices.js';
const get = generateDataService();
import generateHtmlFactories from './factories/HtmlFactories.js';
const build = generateHtmlFactories();

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