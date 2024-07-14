import { useEffect } from 'react';

/**
 * Hook para animar divs dentro de um contêiner rolável com base na posição de rolagem.
 * @param {object} containerRef - Um ref do contêiner rolável.
 */

const useScrollAnimatedDivs = (containerRef) => {
    useEffect(() => {
        const container = containerRef.current;

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                // Utiliza requestAnimationFrame para otimizar a performance
                window.requestAnimationFrame(() => {
                    const divs = container.querySelectorAll('.cd-animated-div');
                    const containerHeight = container.offsetHeight;
                    const scrollTop = container.scrollTop;

                    divs.forEach((div) => {
                        // Obtém os atributos de cada div ou usa valores padrão
                        const maxOffset = parseFloat(div.getAttribute('data-max-offset') ?? 50);
                        const direction = div.getAttribute('data-direction') ?? 'horizontal';
                        const opacityTransition = div.getAttribute('data-opacity-transition') ?? 0.5;
                        const transformTransition = div.getAttribute('data-transform-transition') ?? 0.5;
                        const offsetPosition = parseFloat(div.getAttribute('data-offset-position') ?? 200);
                        let centralZoneHeight = parseFloat(div.getAttribute('data-central-height') ?? 400);
                        centralZoneHeight = centralZoneHeight < 0 ? 0 : centralZoneHeight;

                        // Cálculos da posição e área do contêiner
                        const divTop = div.offsetTop - scrollTop;
                        const divHeight = div.offsetHeight;
                        const divCenter = divTop + divHeight / 2;
                        const containerCenter = containerHeight / 2;
                        const zoneTop = containerCenter - offsetPosition - (centralZoneHeight / 2);
                        const zoneBottom = containerCenter - offsetPosition + (centralZoneHeight / 2);

                        // Suavisa a transição de opacidade e movimentação
                        div.style.transition = `opacity ${opacityTransition}s, transform ${transformTransition}s`;
                        let opacity, offset;
                        if (divCenter >= zoneTop && divCenter <= zoneBottom) {
                            // Comportamento dentro da zona central
                            opacity = 1;
                            offset = 0;
                        } else {
                            // Comportamento fora da zona central
                            const distanceFromZone = divCenter < zoneTop ? zoneTop - divCenter : divCenter - zoneBottom;
                            const maxDistance = containerHeight / 2 - (centralZoneHeight / 2);
                            opacity = Math.max(0, 1 - distanceFromZone / maxDistance);
                            offset = (distanceFromZone / maxDistance) * maxOffset;
                        }

                        // Aplica a opacidade e movimentação com os resultados dos cálculos
                        div.style.opacity = opacity;
                        div.style.transform = direction === 'vertical' ? `translateY(${offset}px` : `translateX(${offset}px`;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };

        container.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [containerRef]);
};

export default useScrollAnimatedDivs;
