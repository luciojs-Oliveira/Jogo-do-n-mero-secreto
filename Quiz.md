Manipulando conteúdo HTML com JavaScript
 Próxima Atividade

Você está lidando com a interação entre o HTML e o JavaScript para tornar a interface de usuário mais dinâmica e interativa. No entanto, você gostaria de mudar o título do seu aplicativo de forma dinâmica com o JavaScript.

Qual código JavaScript você usaria para alterar o texto exibido no cabeçalho da sua página (elemento h1) para Bem-vindo ao mundo dev?

Alternativa correta
let titulo = document.querySelector('h1')
innerHTML = 'Bem-vindo ao mundo dev'

Alternativa correta
let titulo = document.querySelector('h1')
titulo.innerHTML = 'Bem-vindo ao mundo dev'

Esta é a maneira correta de selecionar um elemento h1 e alterar seu conteúdo usando JavaScript.

Alternativa correta
let titulo = document.querySelector('h1')
titulo.innerHTML = Bem-vindo ao mundo dev

Alternativa correta
let titulo = document.querySelector(h1)
titulo.innerHTML = 'Bem-vindo ao mundo dev'

...................................................................................................

Anatomia de uma função
 Próxima Atividade

A anatomia de uma função em JavaScript é composta por diversas partes que definem seu comportamento. É importante compreender esses elementos para criar funções reutilizáveis e modularizar o código de forma eficiente.

Assim, conhecer a estrutura das funções em JavaScript é fundamental para dominar a linguagem e desenvolver aplicações complexas de forma organizada e funcional.

Com base no que vimos nesta aula, analise as afirmações abaixo e marque apenas as opções verdadeiras sobre funções.

Alternativa incorreta
As funções em JavaScript podem ter um nome.


As funções em JavaScript podem ter um nome. Na verdade, é uma prática comum dar um nome descritivo às funções para facilitar a leitura e o entendimento do código. Esses nomes são usados para chamar a função posteriormente ou para se referir a ela dentro do próprio código, permitindo que você reutilize a função em diferentes partes do programa.

Alternativa incorreta
Palavra-chave function: É usada para declarar uma função em JavaScript.


Isso! Toda função em JavaScript é declarada utilizando a palavra-chave function. Essa palavra-chave é utilizada para criar uma função.

Alternativa incorreta
Corpo da função []: O corpo da função é delimitado por colchetes e contém o código que será executado quando a função for chamada.


Alternativa incorreta
Parênteses (): Após o nome da função (se houver), os parênteses são usados para definir os parâmetros da função.


Alternativa incorreta
Palavra-chave return é obrigatória: A palavra-chave return é usada para especificar o valor que a função deve retornar após ser executada.


Alternativa incorreta… A palavra-chave return não é obrigatória em JavaScript, mas é frequentemente usada para especificar um valor a ser retornado pela função.

...................................................................................................

06 Função que verifica números
 Próxima Atividade

Você é uma pessoa desenvolvedora de software que trabalha com JavaScript e precisa criar uma função que verifique se um número é positivo, negativo ou zero. Sua tarefa é implementar uma função que recebe como parâmetro um número inteiro e exibe uma mensagem no console conforme as seguintes regras:

Se o número for maior que zero, a mensagem deve ser: "O número é positivo."
Se o número for menor que zero, a mensagem deve ser: "O número é negativo."
Se o número for igual a zero, a mensagem deve ser: "O número é zero."
Você pode utilizar a estrutura de controle if-else para verificar as condições e exibir a mensagem correspondente no console. Sabendo disso, analise as alternativas abaixo e marque aquela que possui o código que atende todas as regras citadas acima.

Alternativa correta
function verificarNumero(numero) {
  if (numero < 0) {
    console.log("O número é positivo.");
  } else if (numero > 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }
}

Alternativa correta
function verificarNumero(numero) {
  if (numero > 0) {
    console.log("O número é positivo.");
  } else {
    console.log("O número é zero.");
  }
}

Alternativa correta
if (numero > 0) {
    console.log("O número é positivo.");
  } else if (numero < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }

Alternativa correta
function verificarNumero(numero) {
  if (numero > 0) {
    console.log("O número é positivo.");
  } else if (numero < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }
}

Neste código, usamos a estrutura de controle if-else para verificar as três possibilidades: se o número é maior que zero, se é menor que zero ou se é igual a zero. Dependendo da condição, a função imprime a mensagem correspondente no console.

...................................................................................................

Manipulação de Listas em JavaScript
 Próxima Atividade

Você foi encarregado (a) de criar um pequeno programa para gerenciar uma lista de compras. O programa deve permitir que o usuário adicione itens à lista e, em seguida, exiba o conteúdo da lista na tela. Além disso, a pessoa usuária deve ser capaz de ver um item específico da lista, digitando o índice do item desejado.

let listaCompras = [];

listaCompras.push("Maçã");
listaCompras.push("Arroz");
listaCompras.push("Leite");
listaCompras.push("Pão");
listaCompras.push("Carne");
Copiar código
Sabendo disso, analise as alternativas abaixo e marque apenas as sentenças verdadeiras:

Alternativa correta
listaCompras.lengthexibe a quantidade de elementos de uma lista.


Isso aí! A propriedade length é usada para obter a quantidade de elementos em uma lista/array em JavaScript.

Alternativa correta
O código listaCompras[3] vai exibir o item Pão.


Isso aí! O código listaCompras[3] na verdade vai exibir o item "Pão", já que índice 0 é Maçã, 1 é Arroz, 2 é Leite e o 3 é Pão.

Alternativa correta
O código listaCompras[1] vai exibir o item Maçã.


Alternativa correta
listaCompras.lenghtexibe a quantidade de elementos de uma lista.
...................................................................................................

