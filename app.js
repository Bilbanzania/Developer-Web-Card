document.addEventListener('DOMContentLoaded', () => {
    
    // Cache Elements
    const flipCard = document.querySelector('#flipCard');
    const techLayer = document.querySelector('#techLayer');
    const sparkleLayer = document.querySelector('#sparkleLayer');
    const syntaxSymbols = ['{ }', '< >', '/>', '0', '1', '();', '[]', '&&', '||'];

    flipCard.addEventListener('click', () => {
        flipCard.classList.toggle('is-flipped');
    });

    // Floating Tech Particles Generator
    const createTechParticles = () => {
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'tech-particle';
            
            particle.innerText = syntaxSymbols[Math.floor(Math.random() * syntaxSymbols.length)];
            
            const size = Math.random() * 1.5 + 0.8;
            const duration = Math.random() * 5 + 8;
            const leftPos = Math.random() * 100;
            
            particle.style.fontSize = `${size}rem`;
            particle.style.left = `${leftPos}vw`;
            particle.style.animationDuration = `${duration}s`;
            
            techLayer.append(particle);
            
            setTimeout(() => particle.remove(), duration * 1000);
        };

        for (let i = 0; i < 15; i++) {
            setTimeout(createParticle, Math.random() * 3000);
        }

        setInterval(createParticle, 1500);
    };

    // Mouse Sparkle Effect 
    let lastMove = 0;
    document.addEventListener('mousemove', (e) => {
        if (Date.now() - lastMove < 20) return; 
        lastMove = Date.now();
        
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${e.pageX - 3}px`;
        sparkle.style.top = `${e.pageY - 3}px`;
        sparkleLayer.append(sparkle);
        
        setTimeout(() => sparkle.remove(), 600);
    });

    // Click Ripple Effect
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = `${e.pageX - 20}px`;
        ripple.style.top = `${e.pageY - 20}px`;
        document.body.append(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });

    // Start background animations
    createTechParticles();
});