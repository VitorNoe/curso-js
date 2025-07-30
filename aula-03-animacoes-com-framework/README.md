# Aula 03 – Animações com Framework (Anime.js)

Nesta aula, vamos aproveitar as animações criadas em `../aula-02-animacoes-js-puro/script.js` ou `style.css`.

## Objetivos de aprendizagem
- Conhecer e utilizar um framework de animação (Anime.js).
- Importar Anime.js via CDN e usar métodos principais.
- Criar sequências de animações coordenadas.
- Utilizar timelines e delays para efeitos avançados.

## Conteúdo
- Framework: [Anime.js](https://animejs.com/)
- Métodos: `anime()`, `.add()`, `.timeline()`
- Importação via CDN

## Recapitulação da aula anterior
- Você pode reutilizar funções JS e estilos das aulas anteriores.
- Lembre-se de manipular propriedades como `transform`, `opacity` e eventos.

## Passo-a-passo guiado
1. **Configuração inicial**: Abra o `index.html`, que já importa Anime.js via CDN.
2. **Demonstração de exemplo**:
   - Exemplo: Sequência de animações coordenadas em caixas.
   - Veja o código no `script.js` e acompanhe os comentários.
3. **Exercícios**:
   1. Anime uma lista de itens em cascata (um após o outro).
      - Como testar: Clique no botão e veja os itens animando em sequência.
      - Dica: Use `anime.stagger` e timelines.
   2. Crie uma timeline com delay e loop infinito.
      - Como testar: Veja a animação repetir automaticamente.
      - Dica: Use `.add()` e `loop: true`.
   3. Anime um SVG simples (ex: círculo ou linha).
      - Como testar: Veja o SVG animar ao carregar.
      - Dica: Anime atributos como `strokeDashoffset`.

## Desafios extras
1. Sincronize animações de diferentes elementos usando timelines.
2. Faça um botão que pausa e retoma a animação.

## Links de referência
- [Anime.js Docs](https://animejs.com/documentation/)
- [MDN SVG](https://developer.mozilla.org/pt-BR/docs/Web/SVG)
- [MDN Manipulação de Estilos](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/style)
