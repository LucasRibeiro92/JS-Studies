//console.table() para visualizar de forma mais organizada informações tabulares;
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`); //para exibir mensagens de warning;

console.error(new Error('Whoops, something bad happened')); //para exibir mensagens de erro;

//console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
//console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.