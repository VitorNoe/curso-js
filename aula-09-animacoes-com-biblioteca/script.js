

// --- Biblioteca de Animações Anime.js ---
$(function() {
  // Lista de animações (exemplos robustos)
  const animations = [
    { name: 'Fade In', config: { opacity: [0, 1], duration: 900, easing: 'easeInOutQuad' } },
    { name: 'Fade Out', config: { opacity: [1, 0], duration: 900, easing: 'easeInOutQuad' } },
    { name: 'Slide In Left', config: { translateX: [-120, 0], opacity: [0, 1], duration: 900, easing: 'easeOutBack' } },
    { name: 'Slide In Right', config: { translateX: [120, 0], opacity: [0, 1], duration: 900, easing: 'easeOutBack' } },
    { name: 'Slide Out Down', config: { translateY: [0, 120], opacity: [1, 0], duration: 900, easing: 'easeInBack' } },
    { name: 'Zoom In', config: { scale: [0.5, 1], opacity: [0, 1], duration: 900, easing: 'easeOutElastic' } },
    { name: 'Zoom Out', config: { scale: [1, 0.5], opacity: [1, 0], duration: 900, easing: 'easeInBack' } },
    { name: 'Rotate', config: { rotate: [0, 360], duration: 1200, easing: 'easeInOutSine' } },
    { name: 'Flip X', config: { rotateY: [0, 180], duration: 1000, easing: 'easeInOutSine' } },
    { name: 'Flip Y', config: { rotateX: [0, 180], duration: 1000, easing: 'easeInOutSine' } },
    { name: 'Bounce', config: { translateY: [0, -60, 0], duration: 900, easing: 'easeOutElastic' } },
    { name: 'Pulse', config: { scale: [1, 1.2, 1], duration: 800, easing: 'easeInOutSine', loop: 2 } },
    { name: 'Swing', config: { rotate: [-15, 15, -10, 10, 0], duration: 900, easing: 'easeInOutSine' } },
    { name: 'RubberBand', config: { scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1], scaleY: [1, 0.75, 1.25, 0.85, 1.05, 1], duration: 1200, easing: 'easeInOutSine' } },
    { name: 'Wobble', config: { translateX: [0, -20, 15, -10, 5, 0], duration: 1000, easing: 'easeInOutSine' } },
    { name: 'Shake', config: { translateX: [0, -10, 10, -10, 10, 0], duration: 700, easing: 'easeInOutSine' } },
    { name: 'Color Pulse', config: { backgroundColor: ['#fbbf24', '#6366f1'], duration: 900, direction: 'alternate', loop: 2, easing: 'linear' } },
    { name: 'Stagger', config: { translateY: [0, -40, 0], delay: anime.stagger(100), duration: 900, easing: 'easeOutBack' }, isStagger: true }
  ];

  // Abas
  $('.tab-btn').on('click', function() {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    const tab = $(this).data('tab');
    $('.tab-content').removeClass('active');
    $('#tab-' + tab).addClass('active');
  });

  // Galeria de animações (apenas demonstração)
  function renderGallery() {
    const $gallery = $('.template-gallery');
    $gallery.empty();
    animations.forEach((anim, i) => {
      const $card = $('<div class="template-card"></div>');
      $card.append(`<div class="template-preview" id="tpl-prev-${i}">A</div>`);
      $card.append(`<div class="template-label">${anim.name}</div>`);
      $card.on('click', function() {
        animateTemplatePreview(`#tpl-prev-${i}`, anim.config, anim.isStagger);
      });
      $gallery.append($card);
      setTimeout(() => animateTemplatePreview(`#tpl-prev-${i}`, anim.config, anim.isStagger), 100);
    });
  }

  function animateTemplatePreview(selector, config, isStagger) {
    $(selector).removeAttr('style');
    if(isStagger) {
      // Stagger preview: 3 mini-boxes
      $(selector).html('<span class="mini-box"></span><span class="mini-box"></span><span class="mini-box"></span>');
      anime({
        targets: selector + ' .mini-box',
        ...config,
        loop: false,
        direction: config.direction || 'normal',
        complete: function() {
          setTimeout(() => $(selector).removeAttr('style').html('A'), 400);
        }
      });
    } else {
      $(selector).text('A');
      anime({
        targets: selector,
        ...config,
        loop: false,
        direction: config.direction || 'normal',
        complete: function() {
          setTimeout(() => $(selector).removeAttr('style').text('A'), 400);
        }
      });
    }
  }

  // Botão random
  $('#btnRandom').on('click', function() {
    const idx = Math.floor(Math.random() * animations.length);
    animateTemplatePreview(`#tpl-prev-${idx}`, animations[idx].config, animations[idx].isStagger);
  });

  // Easter egg: digite "magic" para animação secreta em todos os previews
  let magicSeq = '';
  $(document).on('keydown', function(e) {
    magicSeq += e.key.toLowerCase();
    if(magicSeq.length > 5) magicSeq = magicSeq.slice(-5);
    if(magicSeq === 'magic') {
      magicSeq = '';
      $('.template-preview').each(function(i, el) {
        anime({
          targets: el,
          scale: [1, 2, 0.5, 1.5, 1],
          rotate: [0, 360],
          backgroundColor: ['#fbbf24', '#6366f1', '#22d3ee', '#f59e42', '#fbbf24'],
          duration: 2200,
          easing: 'easeInOutElastic',
          loop: false
        });
      });
    }
  });

  // Inicialização
  renderGallery();
});
