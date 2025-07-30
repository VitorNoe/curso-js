# Atividade Final – Clone do Animista (Anime.js)

## Contexto
O Animista (https://animista.net/) é uma das maiores referências em animações CSS e web, permitindo que usuários escolham, testem e personalizem animações visuais de forma interativa. Nesta atividade, você irá criar um clone funcional do Animista, focado em animações com Anime.js, para praticar e demonstrar domínio em animações web modernas.

## Objetivo
Desenvolver uma aplicação web interativa que permita ao usuário:
- Visualizar uma galeria de animações prontas (fade, slide, scale, rotate, bounce, flip, swing, etc.)
- Aplicar animações em tempo real em um elemento de preview
- Personalizar parâmetros (duração, delay, easing, loop, alternate, cor, etc.)
- Gerar e exibir o código Anime.js correspondente à animação escolhida
- Alternar entre diferentes categorias de animação (entrada, saída, atenção, etc.)
- Interface visual moderna, responsiva e intuitiva

## Requisitos obrigatórios
- Use Anime.js para todas as animações
- Use HTML5, CSS3 moderno e jQuery para a interface
- Implemente pelo menos 10 tipos diferentes de animação (ex: fade, slide, scale, rotate, flip, bounce, swing, pulse, rubberBand, wobble)
- Permita ao usuário customizar: tipo, duração, delay, easing, loop, alternate, cor (quando aplicável)
- Preview animado ao vivo
- Geração automática do código Anime.js para copiar/colar
- Galeria de templates/pré-sets de animação
- Responsividade (funciona bem em desktop e mobile)
- Não copie o código-fonte do Animista, crie sua própria solução com seu próprio layout

## Exemplo de uso
1. O usuário acessa a página e vê uma galeria de animações.
2. Ao clicar em um template, o preview é animado e os parâmetros aparecem para customização.
3. O usuário pode ajustar valores e ver o resultado ao vivo.
4. O código Anime.js gerado aparece pronto para copiar.

## Sugestão de categorias de animação
- **Entradas:** fadeIn, slideInLeft, slideInRight, zoomIn, bounceIn, flipInX
- **Saídas:** fadeOut, slideOutDown, zoomOut, bounceOut, flipOutY
- **Atenção:** pulse, swing, rubberBand, wobble, shake

## Dicas e exemplos
- Use `anime({ targets, ... })` para animar propriedades.
- Exemplo de animação fadeIn:
  ```js
  anime({
    targets: '#preview',
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutQuad'
  });
  ```
- Exemplo de animação slideInLeft:
  ```js
  anime({
    targets: '#preview',
    translateX: [-120, 0],
    opacity: [0, 1],
    duration: 900,
    easing: 'easeOutBack'
  });
  ```

## O que será avaliado
- Variedade e funcionamento das animações
- Qualidade da interface e experiência do usuário
- Clareza e organização do código
- Geração correta do código Anime.js
- Responsividade e visual moderno

## Restrições
- Não é permitido copiar código do Animista ou de outros geradores prontos
- Não entregue a solução pronta para outros colegas
- O projeto deve ser original, feito por você

## Entrega
- Crie a pasta `atividade-final-clone-animista` no seu repositório
- Inclua pelo menos: `index.html`, `style.css`, `script.js` e este `README.md`
- Siga as instruções e capriche na apresentação!

## Links úteis
- [Anime.js Docs](https://animejs.com/documentation/)
- [MDN CSS Animations](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [MDN Easing Functions](https://developer.mozilla.org/pt-BR/docs/Web/CSS/transition-timing-function)
