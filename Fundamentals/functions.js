//declaração de função, mais classica

function imprimeTexto(texto) 
{
    console.log(texto);
}

imprimeTexto('Executando a função')

function soma()
{
    return 2 * 2;
}

imprimeTexto(soma())

//expressão de função: devido o comportamento da variavel const, não podemos usar antes de declarar, mas com var ou let podemos.

const multiplica = function (par1, par2) {return par1 + par2}

imprimeTexto(multiplica(3, 1))