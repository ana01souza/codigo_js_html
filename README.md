# Calculadora Básica em JavaScript

Este projeto é uma calculadora simples implementada em JavaScript e HTML, que realiza operações matemáticas básicas entre dois números: soma, subtração, divisão e multiplicação. O usuário insere dois números, e o resultado da operação escolhida é exibido na tela.

## Funcionalidades

- *Soma*: Adiciona dois números.
- *Subtração*: Subtrai o segundo número do primeiro.
- *Divisão*: Divide o primeiro número pelo segundo.
- *Multiplicação*: Multiplica os dois números.

## Estrutura do Projeto

O projeto consiste de dois arquivos principais:

- *HTML (index.html)*: Define a estrutura da página, incluindo os campos de entrada e os botões.
- *JavaScript (script.js)*: Contém as funções para realizar as operações matemáticas.

## Exemplo de Uso

1. O usuário insere valores nos campos "A" e "B".
2. O usuário clica em um dos botões de operação: *soma, **subtração, **divisão* ou *multiplicação*.
3. O resultado da operação é exibido abaixo dos botões.

### Interface de Entrada

```html
<input type="number" id="a">
<input type="number" id="b">
<button onclick="soma()">soma</button>
<button onclick="sub()">subtração</button>
<button onclick="div()">divisão</button>
<button onclick="mult()">multiplicação</button>
<p>Resultado: </p>
<p id="result"></p>