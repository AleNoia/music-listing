import generateCore from './core.js';
const core = generateCore();

// Iniciando a aplicação e tratando possíveis erros
try{
    core.start();
}catch(e){
    console.error("Erro nao capturado:");
    console.error(e);
}
