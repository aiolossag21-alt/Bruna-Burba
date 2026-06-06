// CONFIGURAÇÕES - Altere os valores abaixo para personalizar o efeito!
const TEXTO_PERSONALIZADO = "I Love You"; // Texto que será repetido para formar o coração
const COR_DO_TEXTO = "#b00bfc";        // Cor rosa/vermelha
const COR_DO_BRILHO = "#eecc83e5";       // Cor do brilho ao fundo (Neon)
const TAMANHO_CORACAO = 20;            // Quanto maior o número, maior o coração
const QUANTIDADE_PALAVRAS = 150;       // Mais palavras deixam o formato mais definido

const ui = document.getElementById('ui');

for (let i = 0; i < QUANTIDADE_PALAVRAS; i++) {
    const wordDiv = document.createElement('div');
    const horizontalDiv = document.createElement('div');
    
    wordDiv.className = 'love_word';
    horizontalDiv.className = 'love_horizontal';
    horizontalDiv.innerText = TEXTO_PERSONALIZADO;

    // Customização de cores e efeitos visuais baseados nas variáveis
    wordDiv.style.color = COR_DO_TEXTO;
    wordDiv.style.textShadow = `0 0 10px ${COR_DO_BRILHO}`;

    // Equações para desenhar a curva matemática do coração
    const angle = (i / QUANTIDADE_PALAVRAS) * 2 * Math.PI;
    const x = 16 * Math.pow(Math.sin(angle), 3);
    const y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

    // Posicionamento espacial (X, Y, Z)
    const posX = x * TAMANHO_CORACAO;
    const posY = y * TAMANHO_CORACAO;
    const posZ = Math.sin(angle * 2) * 50; // Dá efeito de profundidade ondulada

    wordDiv.style.transform = `translate3d(${posX}px, ${posY}px, ${posZ}px) rotateZ(-20deg)`;

    // Aplica o atraso de animação individual (animation-delay) idêntico ao do vídeo
    horizontalDiv.style.animationDelay = `calc(${i} * -300ms)`;

    wordDiv.appendChild(horizontalDiv);
    ui.appendChild(wordDiv);
}