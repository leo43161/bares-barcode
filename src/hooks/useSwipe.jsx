import { useState, useCallback } from 'react';


export default function useSwipe() {
    const [xDown, setXDown] = useState(null);
    const [yDown, setYDown] = useState(null);

    function getTouches(evt) {
        return evt.touches ||          // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        setXDown(firstTouch.clientX)
        setYDown(firstTouch.clientY)
    };

    const handleTouchMove = useCallback((evt, moveSwipe) => {
        if (!xDown || !yDown) {
            return;
        }

        const xUp = evt.touches[0].clientX;
        const yUp = evt.touches[0].clientY;

        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                /* right swipe */
                if (moveSwipe) {
                    moveSwipe(false);
                }
                console.log("se movio para la derecha");
            } else {
                /* left swipe */
                if (moveSwipe) {
                    moveSwipe(true);
                }
                console.log("se movio para la izquierda");
            }
        } else {
            if (yDiff > 0) {
                /* down swipe */
                console.log("se movio para abajo")
            } else {
                /* up swipe */
                console.log("se movio para arriba")
            }
        }
        /* reset values */
        setXDown(null);
        setYDown(null);
    }, [xDown, yDown]);



    return {
        handleTouchStart, handleTouchMove
    }
}