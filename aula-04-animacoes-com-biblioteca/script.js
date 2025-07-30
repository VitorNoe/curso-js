
// IMPORTANTE: copie as funções/estilos de ../aula-03-animacoes-com-framework para continuar

// Exemplo: SVG animado com Anime.js
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '120');
svg.setAttribute('height', '120');
svg.classList.add('demo-svg');
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', '60');
circle.setAttribute('cy', '60');
circle.setAttribute('r', '50');
circle.setAttribute('stroke', '#22d3ee');
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

// Exercício 1: Lista animada com anime.stagger
const list = document.createElement('div');
list.className = 'list-anime';
for (let i = 1; i <= 5; i++) {
  const item = document.createElement('div');
  item.className = 'list-anime-item';
  item.textContent = 'Item ' + i;
  list.appendChild(item);
}
document.querySelector('main').appendChild(list);

const btnAnimar = document.createElement('button');
btnAnimar.textContent = 'Animar Lista';
document.querySelector('main').appendChild(btnAnimar);

btnAnimar.addEventListener('click', () => {
  anime({
    targets: '.list-anime-item',
    translateX: [0, 60, 0],
    opacity: [0.7, 1],
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

// Exercício 3: Animação de SVG (linha)
const svgLine = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgLine.setAttribute('width', '120');
svgLine.setAttribute('height', '40');
svgLine.classList.add('demo-svg');
const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line.setAttribute('x1', '10');
line.setAttribute('y1', '20');
line.setAttribute('x2', '110');
line.setAttribute('y2', '20');
line.setAttribute('stroke', '#f59e42');
line.setAttribute('stroke-width', '6');
line.setAttribute('stroke-dasharray', '100');
line.setAttribute('stroke-dashoffset', '100');
svgLine.appendChild(line);
document.querySelector('main').appendChild(svgLine);

anime({
  targets: line,
  strokeDashoffset: [100, 0],
  duration: 1200,
  easing: 'easeInOutQuart',
  delay: 600
});
document.querySelector('main').appendChild(scrollSection);

gsap.registerPlugin(ScrollTrigger);
gsap.to(scrollSection, {
  opacity: 1,
  scrollTrigger: {
    trigger: scrollSection,
    start: 'top 80%',
    end: 'top 30%',
    scrub: true
  }
});

// Desafio: Animação interativa baseada em mouse
// Copilot: Implemente uma animação que segue o mouse
