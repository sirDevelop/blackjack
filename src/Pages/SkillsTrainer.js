import { useEffect, useState } from 'react'
import { Tab, Row, Col, ListGroup } from "react-bootstrap"
import { useParams } from 'react-router-dom'

const SkillsTrainer = () => {
    const { mode } = useParams()
    const [returnVariable, setReturnVariable] = useState()
    useEffect(() => {
        switch (mode) {
            case "basic-strategy":
            setReturnVariable(<>basic - strategy </>)
                break;
            case "speed-counting":
                setReturnVariable(<>speed-counting</>)
                break;

            case "hi-lo":
                setReturnVariable(<>hi-lo</>)
                break;
            case "omega":
                setReturnVariable(<>omega</>)
                break;

            case "test-out":
                setReturnVariable(<>test-out</>)
                break;
            default:
                setReturnVariable(<></>)
                break;
        }
    }, [mode])
    return returnVariable
}

export default SkillsTrainer