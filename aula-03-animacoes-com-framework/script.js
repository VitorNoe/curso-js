// IMPORTANTE: copie as funções/estilos de ../aula-02-animacoes-js-puro para continuar

// Exemplo: Sequência de animações coordenadas
const boxes = document.createElement('div');
boxes.className = 'boxes';
for (let i = 0; i < 4; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  boxes.appendChild(box);
}
document.querySelector('main').appendChild(boxes);

anime({
  targets: '.box',
  translateY: [0, -60, 0],
  rotate: '1turn',
  delay: anime.stagger(200),
  duration: 1200,
  easing: 'easeInOutSine',
  loop: true
});

// Exercício 1: Lista de itens em cascata
const list = document.createElement('div');
list.className = 'list';
for (let i = 1; i <= 5; i++) {
  const item = document.createElement('div');
  item.className = 'list-item';
  item.textContent = 'Item ' + i;
  list.appendChild(item);
}
document.querySelector('main').appendChild(list);

const btnAnimar = document.createElement('button');
btnAnimar.textContent = 'Animar Lista';
document.querySelector('main').appendChild(btnAnimar);

btnAnimar.addEventListener('click', () => {
  anime({
    targets: '.list-item',
    translateX: [0, 60, 0],
    opacity: [0.6, 1],
    delay: anime.stagger(150),
    duration: 900,
    easing: 'easeOutBack'
  });
});

// Exercício 2: Timeline com delay e loop
const timelineDemo = document.createElement('div');
timelineDemo.className = 'timeline-demo';
document.querySelector('main').appendChild(timelineDemo);

const timeline = anime.timeline({
  loop: true
});
timeline
  .add({
    targets: '.timeline-demo',
    scale: [1, 1.3, 1],
    background: ['#60a5fa', '#f59e42', '#60a5fa'],
    duration: 900,
    easing: 'easeInOutQuad',
    delay: 300
  })
  .add({
    targets: '.timeline-demo',
    rotate: '1turn',
    duration: 700,
    easing: 'easeInOutSine'
  });

// Exercício 3: Animação de SVG
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '120');
svg.setAttribute('height', '120');
svg.classList.add('svg-demo');
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', '60');
circle.setAttribute('cy', '60');
circle.setAttribute('r', '50');
circle.setAttribute('stroke', '#6366f1');
circle.setAttribute('stroke-width', '8');
circle.setAttribute('fill', 'none');
circle.setAttribute('stroke-dasharray', '314');
circle.setAttribute('stroke-dashoffset', '314');
svg.appendChild(circle);
document.querySelector('main').appendChild(svg);

anime({
  targets: circle,
  strokeDashoffset: [314, 0],
  duration: 1800,
  easing: 'easeInOutQuart',
  delay: 400
});

// Desafio: Botão para pausar/retomar animação
// Copilot: Implemente um botão para controlar o timeline
