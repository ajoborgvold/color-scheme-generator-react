import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

function Modal() {
    const dialogRef = useRef(null)

// Open the modal on the first render. Close the modal when all text has been rendered using the typewriter effect
    useEffect(() => {
        dialogRef.current.showModal()

        setTimeout(() => {
            dialogRef.current.close()
        }, 19000)
    }, [])
    
// Close the modal by clicken anywhere outside of it
    function closeModalOnClickOutside(e) {
        const dialogDimensions = dialogRef.current.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            dialogRef.current.close()
        }
    }

    const textArray = [
        "Welcome!",
        "Let's get started.",
        "1. Click the color swatch to choose a seed color.",
        "2. Choose a color mode from the dropdown menu.",
        "3. Generate a color scheme by clicking the button.",
        "4. Click any color code to copy it."
    ]

    return (
        <dialog ref={dialogRef} onClick={closeModalOnClickOutside} className='modal'>
            <Typewriter
                onInit={typewriter => {
                    typewriter
                    .changeDelay(40)
                    .typeString(`<p class="modal__p">${textArray[0]}</p>`)
                    .pauseFor(1000)
                    .typeString(`<p class="modal__p">${textArray[1]}</p>`)
                    .pauseFor(1000)
                    .typeString(`<p class="modal__p">${textArray[2]}</p>`)
                    .pauseFor(1000)
                    .typeString(`<p class="modal__p">${textArray[3]}</p>`)
                    .pauseFor(1000)
                    .typeString(`<p class="modal__p">${textArray[4]}</p>`)
                    .pauseFor(1000)
                    .typeString(`<p class="modal__p">${textArray[5]}</p>`)
                    .start();
                }}
            />
        </dialog>
    )
}

export default Modal