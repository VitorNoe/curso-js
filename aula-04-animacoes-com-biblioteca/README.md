


# Aula 04 – Animações com Biblioteca Famosa (Anime.js)

Nesta aula, vamos aproveitar as animações criadas em `../aula-03-animacoes-com-framework/script.js` ou `style.css`.

## Objetivos de aprendizagem
- Conhecer e utilizar uma biblioteca de animação avançada (Anime.js).
- Importar Anime.js via CDN e usar métodos principais.
- Criar animações complexas e interativas.
- Utilizar timelines, morphing e animações SVG.

## Conteúdo
- Biblioteca: [Anime.js](https://animejs.com/)
- Métodos: `anime()`, `.add()`, `.timeline()`, `anime.stagger()`
- Importação via CDN

## Recapitulação da aula anterior
- Você pode reutilizar funções e estilos das aulas anteriores.
- Lembre-se de timelines, delays e animação de SVG.

## Passo-a-passo guiado
1. **Configuração inicial**: Abra o `index.html`, que já importa Anime.js via CDN.
2. **Demonstração de exemplo**:
   - Exemplo: Animação coordenada de múltiplos elementos SVG.
   - Veja o código no `script.js` e acompanhe os comentários.
3. **Exercícios**:
   1. Anime uma lista de elementos com `anime.stagger()`.
      - Como testar: Clique no botão e veja os itens animando em sequência.
      - Dica: Use `anime.stagger` e timelines.
   2. Crie uma timeline com delay e loop infinito.
      - Como testar: Veja a animação repetir automaticamente.
      - Dica: Use `.add()` e `loop: true`.
   3. Anime um SVG simples (ex: círculo ou linha).
      - Como testar: Veja o SVG animar ao carregar.
      - Dica: Anime atributos como `strokeDashoffset`.

## Desafios extras
1. Sincronize múltiplas animações com timeline.
2. Crie uma animação interativa baseada em mouse.

## Links de referência
- [Anime.js Docs](https://animejs.com/documentation/)
- [MDN SVG](https://developer.mozilla.org/pt-BR/docs/Web/SVG)
- [MDN Manipulação de Estilos](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/style)
