import React, { useState,useEffect } from 'react'
import { data } from '../apiData'
import { useHistory} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import useCustomHook from '../useCustomHook'

const BuildFrame = () => {
    const history = useHistory();
    const firstRender = useCustomHook();
    const nextTask = () => history.push('/buildbody');
    const [status,setStatus] = useState("")
    const [color,setColor]=useState('grey');
    const [disableButton, setDisableButton] = useState(true)

    useEffect(() => {
        if(!firstRender) {
            setTimeout(() => {
                setColor("orange")
                setStatus("Frame Building finish move to next task")
                setDisableButton(false)
            },3000)
        }
    },[status,firstRender])
    return (
        <div>
            <div>
                <Button onClick = {() => setStatus("Please wait Frame is building...")}>{data.root.task1.name}</Button>
            </div>
            <div>
                <h1 style = {{backgroundColor:color}}>{status}</h1>
            </div>
            <div>
                {status === "" ? "" : <Button disabled= {disableButton} onClick={nextTask}>NextTask</Button>}
            </div>
        </div>
        
    )
}

export default BuildFrame
