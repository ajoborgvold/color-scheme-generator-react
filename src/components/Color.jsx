import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function Color() {
    const {
        colorData,
        copyHexCode,
        copiedHexCode,
        userSelection,
        hoveredItem,
        handleMouseEnter,
        handleMouseLeave
    } = useContext(AppContext)

    const colorEl = colorData.map(item => {
        const divStyle = {
            backgroundColor: item.hex.value,
        }

        return (
            <div
                key={item.hex.value}
                tabIndex={0}
                onClick={() => copyHexCode(item.hex.value)}
                onKeyDown={e => copyHexCode(item.hex.value, e)}
                onMouseEnter={() => handleMouseEnter(item.hex.value)}
                onFocus={() => handleMouseEnter(item.hex.value)}
                onMouseLeave={handleMouseLeave}
                onBlur={handleMouseLeave}
                style={divStyle}
                className="scheme__item"
            >
                {!copiedHexCode || copiedHexCode === userSelection.seed ?
                    <p className="scheme__p">
                        {hoveredItem === item.hex.value ? 'Copy' : item.hex.value}
                    </p> :
                    copiedHexCode && item.hex.value === copiedHexCode ?
                        <p className="scheme__p">Copied!</p> : null
                }
            </div>
        )
    })

    return (<>{colorEl}</>)
}

export default Color