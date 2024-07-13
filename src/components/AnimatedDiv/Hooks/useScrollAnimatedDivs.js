import { useEffect } from 'react';

const useScrollAnimatedDivs = (containerRef) => {
    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            const divs = container.querySelectorAll('.cd-animated-div');
            const containerHeight = container.offsetHeight;
            const scrollTop = container.scrollTop;

            divs.forEach((div) => {
                // Obter os atributos de cada div
                const maxOffset = parseFloat(div.getAttribute('data-max-offset') ?? 50);
                const direction = div.getAttribute('data-direction') ?? 'horizontal';
                const opacityTransition = div.getAttribute('data-opacity-transition') ?? 0.5;
                const transformTransition = div.getAttribute('data-transform-transition') ?? 0.5;
                const offsetPosition = parseFloat(div.getAttribute('data-offset-position') ?? 200);
                const centralZoneHeight = parseFloat(div.getAttribute('data-central-height') ?? 400);

                const divTop = div.offsetTop - scrollTop;
                const divHeight = div.offsetHeight;
                const divCenter = divTop + divHeight / 2;
                const containerCenter = containerHeight / 2;
                const zoneTop = containerCenter - offsetPosition - (centralZoneHeight / 2);
                const zoneBottom = containerCenter - offsetPosition + (centralZoneHeight / 2);

                div.style.transition = `opacity ${opacityTransition}s, transform ${transformTransition}s`;
                let opacity, offset;
                if (divCenter >= zoneTop && divCenter <= zoneBottom) {
                    // Dentro da zona central
                    opacity = 1;
                    offset = 0;
                } else {
                    // Fora da zona central
                    const distanceFromZone = divCenter < zoneTop ? zoneTop - divCenter : divCenter - zoneBottom;
                    const maxDistance = containerHeight / 2 - (centralZoneHeight / 2);
                    opacity = Math.max(0, 1 - distanceFromZone / maxDistance);
                    offset = (distanceFromZone / maxDistance) * maxOffset;
                }
                div.style.opacity = opacity;
                div.style.transform = direction === 'vertical' ? `translateY(${offset}px` : `translateX(${offset}px`;
            });
        };

        container.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [containerRef]);
};

export default useScrollAnimatedDivs;
