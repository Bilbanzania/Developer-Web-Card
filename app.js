document.addEventListener('DOMContentLoaded', () => {
    
    const flipCard = document.querySelector('#flipCard');
    const techLayer = document.querySelector('#techLayer');
    const sparkleLayer = document.querySelector('#sparkleLayer');
    const scene = document.querySelector('.scene');
    const ctaButton = document.querySelector('.cta-button');
    const syntaxSymbols = ['{ }', '< >', '/>', '0', '1', '();', '[]', '&&', '||'];

    // Flip Interaction & Accessibility
    flipCard.addEventListener('click', () => {
        flipCard.classList.toggle('is-flipped');
    });

    flipCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); 
            flipCard.classList.toggle('is-flipped');
        }
    });

    // CTA Button Protection
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => e.stopPropagation());
        ctaButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') e.stopPropagation();
        });
    }

    // 3D Hover Tilt Micro-interaction
    scene.addEventListener('mousemove', (e) => {
        const rect = scene.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; 
        const rotateY = ((x - centerX) / centerX) * 10;
        
        scene.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    scene.addEventListener('mouseleave', () => {
        scene.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    });

    // Floating Tech Particles Generator
    const createTechParticles = () => {
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'tech-particle';
            
            particle.innerText = syntaxSymbols[Math.floor(Math.random() * syntaxSymbols.length)];
            
            const size = Math.random() * 1.5 + 0.8;
            const duration = Math.random() * 5 + 8;
            const leftPos = Math.random() * 95; 
            
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

    createTechParticles();
});