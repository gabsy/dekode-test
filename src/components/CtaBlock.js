import "./../styles/components/_cta-block.scss"
import Button from './Button'

const CtaBlock = () => {
    return (
        <div className="cta-block">
            <h2>Teft?</h2>
            <p>
            As a result, when violet light strikes the eye, the S-cone is stimulated strongly and the L-cone is stimulated weakly. 
            </p>
            <div className="btn-container">
                <Button 
                    btnLink = "/"
                    btnLabel = "Why Teft?"
                />
            </div>
        </div>
    )
}

export default CtaBlock
