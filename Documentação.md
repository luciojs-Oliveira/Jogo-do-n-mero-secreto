Para saber mais: diferenças entre html, css e Js
 Próxima Atividade

HTML, CSS e JavaScript (JS) são três tecnologias fundamentais para o desenvolvimento web.

O HTML (HyperText Markup Language) é a linguagem de marcação utilizada para estruturar o conteúdo de uma página web. Essa linguagem usa tags para definir a hierarquia dos elementos de uma página. Originado em 1991 por Tim Berners-Lee, o HTML é como o esqueleto de uma página web: trabalha organizando o conteúdo, como títulos, parágrafos, imagens e links, para que tudo fique bem arrumado e no lugar certo.

O CSS (Cascading Style Sheets), criado em 1995, é destacado como uma linguagem de estilos. Ele separa a apresentação da estrutura: é responsável pela apresentação e estilização dos elementos, pois permite controlar cores, fontes, layouts e outros aspectos visuais. É como vestir a estrutura HTML com roupas elegantes para que a página pareça exatamente como você deseja.

O JavaScript, por sua vez, é a única linguagem de programação das três. É responsável por adicionar interatividade e dinamismo às páginas. Possibilita a criação de funcionalidades como animações, validações de formulários e atualizações de conteúdo em tempo real.

O papel de cada tecnologia dessas na construção de aplicações web, de forma bem resumida, é: o HTML estrutura o conteúdo, o CSS define o estilo e o layout, e o JavaScript adiciona funcionalidades dinâmicas.

Tecnologia	Função	Exemplos de Uso
HTML	Linguagem de marcação para estruturar conteúdo.	
Título
Parágrafo

CSS	Linguagem de estilos para apresentação e estilização.	p { color: blue; } div { background: #f2f2f2; }
JavaScript (JS)	Linguagem de programação para interatividade.	function iniciarJogo() { ... }
A aprendizagem dessas tecnologias é crucial para qualquer pessoa interessada em desenvolvimento web, uma vez que elas formam a base do ambiente digital. Compreender o HTML é necessário para estruturar e organizar o conteúdo de uma página de maneira semântica, o que é vital para a acessibilidade, indexação por motores de busca e uma experiência consistente entre diferentes dispositivos.

O CSS permite que pessoas desenvolvedoras controlem o design e a aparência de seus sites, possibilitando a criação de layouts atraentes e responsivos, que se adaptam a diferentes tamanhos de tela.

Por fim, o JavaScript capacita os desenvolvedores e as desenvolvedoras a criar experiências interativas e dinâmicas, e melhorar a usabilidade ao oferecer às pessoas usuárias funcionalidades mais avançadas.

A proficiência em HTML, CSS e JavaScript permite materializar ideias de maneira criativa e funcional, o que proporciona aos usuários finais uma experiência envolvente e intuitiva.

Além disso, essas habilidades são altamente valorizadas no mercado de trabalho, visto que a demanda por pessoas desenvolvedoras web qualificadas é constante, dada a importância contínua da presença online para empresas e indivíduos. Portanto, aprender e aprimorar essas tecnologias é um investimento significativo para qualquer pessoa que deseja se destacar na área de desenvolvimento web.

Para saber mais ainda sobre as características dessas três tecnologias a Rafa Ballerini escreveu um artigo enfatizando essas diferenças.
https://www.alura.com.br/artigos/html-css-e-js-definicoes

07 Para saber mais: funções com JavaScript
 Próxima Atividade

As funções desempenham um papel central na programação e no desenvolvimento de software, permitindo encapsular blocos de código reutilizáveis e executáveis. Elas podem ser definidas para executar tarefas específicas, desde cálculos simples até manipulação complexa de dados. As funções em JavaScript podem ter ou não parâmetros, bem como retornar ou não valores.

Tipo de Função	Exemplo de Código	Uso
Sem retorno e sem parâmetro	function saudacao() { ... }	Execução de bloco de código simples.
Sem retorno e com parâmetro	function cumprimentar(nome) { ... }	Execução de bloco de código com argumentos.
Com retorno e sem parâmetro	function gerarNumeroAleatorio() { ... }	Cálculo e retorno de um valor específico.
Com retorno e com parâmetro	function somar(a, b) { ... }	Cálculo e retorno baseado em argumentos.
Função anônima	let saudacao = function() { ... };	Definição de função sem nome localmente.
Arrow function	let quadrado = x => x * x;	Definição concisa de funções curtas.
Seu uso é essencial para criar aplicações dinâmicas, interativas e eficientes em JavaScript. Porém, você não precisa criar todos os tipos de funções neste momento. Acompanhe as aulas e saiba que essas variações existem e conforme a necessidade, vamos mergulhando cada vez mais profundamente em lógica e JavaScript.
...................................................................................................

Para saber mais: vamos ler mais sobre listas?
 Próxima Atividade

Uma array no JavaScript é uma estrutura de dados que permite armazenar e organizar vários valores em uma única variável. Os valores em uma array podem ser de qualquer tipo de dado, como números, strings, objetos, outras arrays e assim por diante. As arrays em JavaScript são indexadas, o que significa que cada valor dentro dela é associado a um índice numérico, começando geralmente do índice 0.

Criando uma array
Você pode criar uma array em JavaScript declarando uma variável e atribuindo-lhe valores entre colchetes [].

let frutas = ["Maçã", "Uva", "Laranja"];
Copiar código
Acessando os valores
Os elementos de uma array são acessados usando índices numéricos, que começam em 0.

Índice	Elemento
0	"Maçã"
1	"Uva"
2	"Laranja"
console.log(frutas[0]); // Saída: "Maçã"
console.log(frutas[2]); // Saída: "Laranja"
Copiar código
Adicionando novos elementos
Para adicionar um elemento ao final da array, você pode usar o método push.

frutas.push("Morango");
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja", "Morango"]
Copiar código
Removendo o último elemento
Para remover o último elemento, você pode usar o método pop.

frutas.pop();
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]
Copiar código
Quais linguagens de programação usam arrays?
Aqui está uma lista de algumas linguagens de programação que utilizam arrays:

JavaScript
Python
Java
C++
C#
Ruby
PHP
Swift
Kotlin
Go
Outras linguagens também suportam o uso de arrays ou estruturas de dados semelhantes para armazenar coleções de valores. Aprender sobre arrays é importante porque elas desempenham um papel fundamental no desenvolvimento de aplicações de software.

As listas ou Arrays fornecem uma maneira eficiente de armazenar e acessar conjuntos de dados, permitindo que os programadores organizem informações de forma lógica e manipulem esses dados de maneira eficaz.

Tendo o conhecimento de como trabalhar com arrays, é possível criar algoritmos mais poderosos, resolver problemas de programação de forma mais eficiente e criar aplicações mais dinâmicas e interativas.

...................................................................................................

Para saber mais: Teve problemas com o responsiveVoice?
 Próxima Atividade

Algumas pessoas relataram estar tendo problemas com a biblioteca Responsive Voice.

O erro ocorre assim: ao tentar abrir a página no navegador, não é possível ouvir ninguém narrando o texto. Ao inspecionar a página, aparece o seguinte erro:

Alt text: Captura de tela da ferramenta Devtools/Inspecionar do navegador. No menu superior, a opção “Console” está selecionada, e logo abaixo são exibidos os erros, sinalizados em vermelho. O primeiro erro tem a descrição “ResponsiveVoice missing API key”, e o segundo “Selected voice does not exist: Brazilian Portuguese Female.”

Para resolver esse erro, podemos usar uma outra alternativa de biblioteca, chamada Web Speech API, que tem o mesmo objetivo da ResponsiveVoice.

Para utilizá-la, não precisaremos importar nenhum arquivo no HTML, basta usar o código diretamente no arquivo JS. Isso porque essa é uma biblioteca nativa de vários navegadores, como Google Chrome e Microsoft Edge.

Assim, no arquivo app.js, iremos remover o código da linha 9 (responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});) e adicionar o seguinte código no lugar dele:

 if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
Copiar código
Não se preocupe muito com o que o código faz em cada linha. O que precisamos saber aqui é que estamos criando um código que também será um leitor de tela, em “pt-BR”, definindo a taxa de fala para 1.2.

Dessa forma, o método exibirTextoNaTela, depois das alterações, tem o seguinte código:

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
Copiar código
Salve o arquivo e reinicie o navegador, vendo a nova biblioteca funcionando :)

Por padrão, você irá ouvir uma voz masculina narrando o texto.

Com isso, no arquivo index.html poderemos apagar a linha que usava a biblioteca Responsive Voice, uma vez que ela não está mais sendo usada. Essa é a linha 7 ( <script src="https://code.responsivevoice.org/responsivevoice.js"></script>.

A tag head, depois de atualizada, fica assim:

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>JS Game</title>
</head>

...................................................................................................






