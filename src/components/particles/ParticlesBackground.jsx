import { useEffect } from "react";

const ParticlesBackground = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/particles.min.js";
        script.onload = () => {
            if (window.particlesJS) {
                window.particlesJS("particles-js", {
                    particles: {
                        number: { value: 60, 
                        density: { enable: true, area: 800 } },
                        color: { value: "#66ccff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.3 },
                        size: { value: 3, random: true }, // ✅ tamanho padrão do site
                        move: { enable: true, speed: 2, out_mode: "bounce" },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: { enable: true, mode: "repulse" },
                            onclick: { enable: false },
                        },
                        modes: { repulse: { distance: 100 } },
                    },
                    retina_detect: true,
                });
            }
        };
        document.body.appendChild(script);
    }, []);

    return <div id="particles-js" className="particles-bg" />;
};

export default ParticlesBackground;
