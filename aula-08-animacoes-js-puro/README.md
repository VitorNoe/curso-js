# Aula 02 – Animações com JavaScript Puro

Nesta aula, vamos aproveitar as animações criadas em `../aula-01-animacoes-css-puro/style.css`.

## Objetivos de aprendizagem
- Entender como manipular animações via JavaScript puro.
- Utilizar `requestAnimationFrame`, `setTimeout` e `setInterval` para animar elementos.
- Alterar propriedades DOM como `style.left`, `style.top`, `style.opacity` e `style.transform`.
- Criar animações manuais e interativas.

## Conteúdo
- APIs: `requestAnimationFrame`, `setTimeout`, `setInterval`.
- Propriedades DOM: `element.style.left/top/opacity/transform`.

## Recapitulação da aula anterior
- Você pode reutilizar estilos de animação CSS como `.box`, `.btn`, `.gallery`.
- Lembre-se de como funcionam `transition` e `@keyframes`.

## Passo-a-passo guiado
1. **Configuração inicial**: Abra o `index.html` e observe os elementos prontos para animar.
2. **Demonstração de exemplo**:
   - Exemplo: Um quadrado que "cai" usando `requestAnimationFrame`.
   - Veja o código no `script.js` e acompanhe os comentários.
3. **Exercícios**:
   1. Crie um contador animado de 0 até 100 usando `setInterval` ou `requestAnimationFrame`.
      - Como testar: Clique no botão e veja o número subir.
      - Dica: Use `clearInterval` ou controle de animação para evitar bugs.
   2. Faça um slider de imagens animado sem usar CSS `transition`.
      - Como testar: Clique para avançar/voltar e veja a imagem deslizar.
      - Dica: Controle a posição com `style.left` ou `style.transform`.
   3. Implemente um efeito parallax simples ao rolar a página.
      - Como testar: Role e veja elementos se moverem em velocidades diferentes.
      - Dica: Use o evento `scroll` e altere `style.transform`.

## Desafios extras
1. Faça uma animação de "pulo" ao clicar em um elemento.
2. Crie um loader animado que desaparece após 2 segundos.

## Links de referência
- [MDN requestAnimationFrame](https://developer.mozilla.org/pt-BR/docs/Web/API/window/requestAnimationFrame)
- [MDN setInterval](https://developer.mozilla.org/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
- [MDN Manipulação de Estilos](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/style)
