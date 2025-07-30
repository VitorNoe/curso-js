# 📝 Sistema de Recados

Um sistema web moderno e responsivo para gerenciamento de recados, desenvolvido com HTML, CSS e JavaScript vanilla.

## ✨ Funcionalidades

- **Criação de Recados**: Interface intuitiva para adicionar novos recados
- **Validação em Tempo Real**: Verificação instantânea dos campos do formulário
- **Armazenamento Local**: Os recados são salvos no localStorage do navegador
- **Interface Responsiva**: Design adaptável para desktop e mobile
- **Animações Suaves**: Transições e efeitos visuais com GSAP e Anime.js
- **Estatísticas**: Contador dinâmico do total de recados cadastrados

## 🎨 Design e UX

- **Tema Moderno**: Interface com gradientes e efeitos glassmorphism
- **Animações**: Entrada e saída suaves dos elementos
- **Partículas Flutuantes**: Efeitos visuais de fundo
- **Feedback Visual**: Notificações e validações em tempo real
- **Tipografia**: Fonte Inter para melhor legibilidade

## 🚀 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/sistema-recados.git
   ```

2. **Abra o arquivo**:
   - Navegue até a pasta do projeto
   - Abra o arquivo `sistema-recados.html` em qualquer navegador moderno

3. **Utilize o sistema**:
   - Preencha os campos "Quem deixou o recado", "Para quem é o recado" e "Texto do recado"
   - Clique em "Salvar Recado" para adicionar
   - Use o botão "Remover" para excluir recados específicos

## 📋 Campos do Formulário

- **Quem deixou o recado**: Nome da pessoa que está deixando o recado (mínimo 2 caracteres)
- **Para quem é o recado**: Nome do destinatário do recado (mínimo 2 caracteres)  
- **Texto do recado**: Conteúdo da mensagem (mínimo 10 caracteres)

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização moderna com gradientes e animações
- **JavaScript ES6+**: Lógica da aplicação com classes e módulos
- **Bootstrap 5**: Framework CSS para responsividade
- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Tipografia (Inter)
- **GSAP**: Biblioteca de animações avançadas
- **Anime.js**: Animações de elementos
- **jQuery**: Manipulação DOM e efeitos

## 💾 Armazenamento

Os recados são armazenados no **localStorage** do navegador, garantindo que os dados permaneçam salvos entre as sessões. Cada recado contém:

- ID único (timestamp + random)
- Nome de quem deixou o recado
- Nome do destinatário
- Texto do recado
- Data e hora de criação

## 🎯 Recursos Técnicos

### Validação de Formulário
- Validação em tempo real
- Feedback visual com cores e animações
- Mensagens de erro personalizadas
- Prevenção de submissão com dados inválidos

### Gerenciamento de Estado
- Classe JavaScript para organização do código
- Métodos para CRUD (Create, Read, Update, Delete) de recados
- Persistência de dados no localStorage
- Sincronização automática entre interface e dados

### Design Responsivo
- Layout flexível para diferentes tamanhos de tela
- Breakpoints otimizados para mobile e desktop
- Componentes que se adaptam ao conteúdo

## 📱 Compatibilidade

- ✅ Chrome (versão 80+)
- ✅ Firefox (versão 75+)
- ✅ Safari (versão 13+)
- ✅ Edge (versão 80+)
- ✅ Dispositivos móveis (iOS/Android)

## Link para acessar via github.io

- https://vitornoe.github.io/curso-js/Atividades%20completas/sistema-recados.html

## Extras: Links de outros projetos

- https://vitornoe.github.io/curso-js/Atividades%20completas/aula_1_introducao-js.html
- https://vitornoe.github.io/curso-js/Atividades%20completas/aula02_variaveis-funcoes.html
- https://vitornoe.github.io/curso-js/Atividades%20completas/aula03_dom_eventos.html
- https://vitornoe.github.io/curso-js/Atividades%20completas/aula04_arrays-objetos.html
- https://vitornoe.github.io/curso-js/Atividades%20completas/aula_5_fetch_apis/index.html
- https://vitornoe.github.io/curso-js/Atividades%20completas/aula6-projeto-mini.html
