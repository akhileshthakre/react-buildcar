import React, { useState,useEffect } from 'react'
import { data } from '../apiData'
import { useHistory } from 'react-router'
import { Button } from 'semantic-ui-react'
import useCustomHook from '../useCustomHook'

const BuildBody = () => {
    const history = useHistory();
    const firstRender = useCustomHook();
    const prevPage = () => history.push('/fittyres');
    const [status,setStatus] = useState("")
    const [color,setColor]=useState('orange');
    const [disableButton, setDisableButton] = useState(true)


    useEffect(() => {
        if(!firstRender) {
        setTimeout(() => {
            setColor("green")
            setStatus("Car is now completely built and task finished")
            setDisableButton(false)
        },2000)
    }
    },[status,firstRender])

    return (
        <div>
            <div>
                <Button onClick = {() => setStatus("Please wait Testing car...")}>{data.root.task3.name}</Button>
            </div>
            <div>
                <h1 style = {{backgroundColor:color}}>{status}</h1>
            </div>
            <div>
                {status === "" ? "" :<Button disabled= {disableButton} onClick={prevPage}>Previous Task</Button>}
            </div>
        </div>
        
    )
}

export default BuildBody