// Configuração inicial das animações (OPCIONAL - não afeta a visibilidade)
document.addEventListener('DOMContentLoaded', () => {
  // Partículas de fundo
  createParticles();
  
  // Animações iniciais com GSAP (apenas se disponível)
  if (typeof gsap !== 'undefined') {
    gsap.from("header h1", {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: "bounce.out",
      delay: 0.3
    });

    gsap.from(".api-section", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.8
    });

    // Animação flutuante contínua
    gsap.to(".pulse", {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }
});

// Criar partículas animadas
function createParticles() {
  const particlesContainer = document.querySelector('.particles');
  const particleCount = 30; // Reduzido para melhor performance

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particlesContainer.appendChild(particle);

    // Animação com GSAP se disponível, senão CSS
    if (typeof gsap !== 'undefined') {
      gsap.to(particle, {
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    }
  }
}

// Função para mostrar loading
function showLoading(button) {
  const originalText = button.innerHTML;
  button.innerHTML = '<span class="loading"></span> Carregando...';
  button.disabled = true;
  return originalText;
}

// Função para esconder loading
function hideLoading(button, originalText) {
  button.innerHTML = originalText;
  button.disabled = false;
}

// Função para animar resultado (fallback CSS se GSAP não disponível)
function animateResult(element) {
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(element, 
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
    );
  } else {
    element.style.animation = 'slideIn 0.5s ease-out';
  }
}

// 1. Usuário Aleatório
document.getElementById('btnRandomUser').addEventListener('click', async () => {
  const button = document.getElementById('btnRandomUser');
  const resultDiv = document.getElementById('randomUserResult');
  const originalText = showLoading(button);

  try {
    const res = await fetch('https://randomuser.me/api/');
    if (!res.ok) throw new Error('Erro na requisição');
    
    const data = await res.json();
    const user = data.results[0];
    
    resultDiv.innerHTML = `
      <div class="user-card">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <img src="${user.picture.large}" alt="Avatar" class="user-avatar">
          <div>
            <h4 style="color: #764ba2; margin-bottom: 0.5rem;">${user.name.first} ${user.name.last}</h4>
            <p style="margin: 0.3rem 0;"><i class="fas fa-envelope"></i> ${user.email}</p>
            <p style="margin: 0.3rem 0;"><i class="fas fa-map-marker-alt"></i> ${user.location.city}, ${user.location.country}</p>
          </div>
        </div>
      </div>
    `;
    
    animateResult(resultDiv.firstElementChild);
    
  } catch (error) {
    resultDiv.innerHTML = '<div class="result error">Erro ao buscar usuário!</div>';
  }
  
  hideLoading(button, originalText);
});

// 2. GitHub User
document.getElementById('btnGit').addEventListener('click', async () => {
  const button = document.getElementById('btnGit');
  const input = document.getElementById('inputGit');
  const resultDiv = document.getElementById('githubResult');
  const user = input.value.trim();
  
  if (!user) {
    resultDiv.innerHTML = '<div class="result error">Digite um usuário!</div>';
    return;
  }

  const originalText = showLoading(button);

  try {
    const res = await fetch(`https://api.github.com/users/${user}`);
    if (!res.ok) throw new Error('Usuário não encontrado');
    
    const data = await res.json();
    
    resultDiv.innerHTML = `
      <div class="user-card">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <img src="${data.avatar_url}" alt="Avatar" class="user-avatar">
          <div>
            <h4 style="color: #764ba2; margin-bottom: 0.5rem;">${data.name || 'Sem nome'}</h4>
            <p style="margin: 0.3rem 0;"><i class="fab fa-github"></i> @${data.login}</p>
            <p style="margin: 0.3rem 0;"><i class="fas fa-users"></i> ${data.followers} seguidores</p>
            <p style="margin: 0.3rem 0;"><i class="fas fa-code-branch"></i> ${data.public_repos} repositórios</p>
          </div>
        </div>
      </div>
    `;
    
    animateResult(resultDiv.firstElementChild);
    
  } catch (error) {
    resultDiv.innerHTML = '<div class="result error">Usuário não encontrado!</div>';
  }
  
  hideLoading(button, originalText);
});

// 3. CEP
document.getElementById('btnCep').addEventListener('click', async () => {
  const button = document.getElementById('btnCep');
  const input = document.getElementById('inputCep');
  const resultDiv = document.getElementById('cepResult');
  const cep = input.value.replace(/\D/g, '');
  
  if (cep.length !== 8) {
    resultDiv.innerHTML = '<div class="result error">CEP deve ter 8 dígitos!</div>';
    return;
  }

  const originalText = showLoading(button);

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!res.ok) throw new Error('Erro na API');
    
    const data = await res.json();
    if (data.erro) throw new Error('CEP não encontrado');
    
    resultDiv.innerHTML = `
      <div class="cep-card">
        <h4 style="color: #764ba2; margin-bottom: 1rem;"><i class="fas fa-map-pin"></i> ${data.logradouro}</h4>
        <p style="margin: 0.5rem 0;"><i class="fas fa-building"></i> ${data.bairro}</p>
        <p style="margin: 0.5rem 0;"><i class="fas fa-city"></i> ${data.localidade} - ${data.uf}</p>
        <p style="margin: 0.5rem 0;"><i class="fas fa-mail-bulk"></i> CEP: ${data.cep}</p>
      </div>
    `;
    
    animateResult(resultDiv.firstElementChild);
    
  } catch (error) {
    resultDiv.innerHTML = '<div class="result error">CEP não encontrado!</div>';
  }
  
  hideLoading(button, originalText);
});

// 4. Chuck Norris
document.getElementById('btnPiada').addEventListener('click', async () => {
  const button = document.getElementById('btnPiada');
  const resultDiv = document.getElementById('piadaResult');
  const originalText = showLoading(button);

  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    if (!res.ok) throw new Error('Erro na API');
    
    const data = await res.json();
    
    resultDiv.innerHTML = `
      <div class="joke-card">
        <p style="font-size: 1.1rem; line-height: 1.6; font-style: italic;">
          <i class="fas fa-quote-left" style="color: #764ba2;"></i> 
          ${data.value} 
          <i class="fas fa-quote-right" style="color: #764ba2;"></i>
        </p>
      </div>
    `;
    
    animateResult(resultDiv.firstElementChild);
    
  } catch (error) {
    resultDiv.innerHTML = '<div class="result error">Erro ao buscar piada!</div>';
  }
  
  hideLoading(button, originalText);
});

// 5. Posts
document.getElementById('btnPosts').addEventListener('click', async () => {
  const button = document.getElementById('btnPosts');
  const resultDiv = document.getElementById('postsResult');
  const originalText = showLoading(button);

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!res.ok) throw new Error('Erro na API');
    
    const posts = await res.json();
    
    resultDiv.innerHTML = posts.map((post, index) => `
      <div class="post-card" style="animation-delay: ${index * 0.1}s; margin-bottom: 1rem;">
        <h4 style="color: #764ba2; margin-bottom: 0.8rem; text-transform: capitalize;">${post.title}</h4>
        <p style="color: #666; line-height: 1.5;">${post.body.substring(0, 100)}...</p>
        <small style="color: #999;">Post #${post.id}</small>
      </div>
    `).join('');
    
  } catch (error) {
    resultDiv.innerHTML = '<div class="result error">Erro ao buscar posts!</div>';
  }
  
  hideLoading(button, originalText);
});

// 6. Dog
document.getElementById('btnDog').addEventListener('click', async () => {
  const button = document.getElementById('btnDog');
  const resultDiv = document.getElementById('dogResult');
  const originalText = showLoading(button);

  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!res.ok) throw new Error('Erro na API');
    
    const data = await res.json();
    
    resultDiv.innerHTML = `
      <div class="result" style="text-align: center; background: rgba(255, 255, 255, 0.95); color: #333;">
        <img src="${data.message}" alt="Cachorro fofo" class="dog-image floating" 
             style="border-radius: 15px; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);">
        <p style="margin-top: 1rem; color: #764ba2; font-weight: 600;">
          <i class="fas fa-heart" style="color: #ff6b6b;"></i> Cachorro fofo do dia!
        </p>
      </div>
    `;
    
    animateResult(resultDiv.firstElementChild);
    
  } catch (error) {
    resultDiv.innerHTML = '<div class="result error">Erro ao buscar cachorro!</div>';
  }
  
  hideLoading(button, originalText);
});

// Máscara para CEP
document.getElementById('inputCep').addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '');
});