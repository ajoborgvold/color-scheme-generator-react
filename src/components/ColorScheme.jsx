import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Color from "./Color"
import Error from './Error'

function ColorScheme() {
    const { 
        userSelection,
        copyHexCode,
        copiedHexCode,
        hoveredItem,
        handleMouseEnter,
        handleMouseLeave,
        isError
    } = useContext(AppContext)

    return (
        <section className="color-scheme-container">
            <div className='color-scheme-container__top'>
                <p className='top__left'>Selected seed color:</p>
                <p
                    tabIndex={0}
                    onClick={() => copyHexCode(userSelection.seed)}
                    onKeyDown={e => copyHexCode(userSelection.seed, e)}
                    onMouseEnter={() => handleMouseEnter(userSelection.seed)}
                    onFocus={() => handleMouseEnter(userSelection.seed)}
                    onMouseLeave={handleMouseLeave}
                    onBlur={handleMouseLeave}
                    className='top__right'
                >
                    {copiedHexCode === userSelection.seed ? 'Copied!' :
                        hoveredItem === userSelection.seed ? 'Copy' : userSelection.seed.toUpperCase()}
                </p>
            </div>
            <div className='scheme-wrapper'>
                {isError ? <Error /> : <Color />}
            </div>
        </section>
    )
}

export default ColorScheme