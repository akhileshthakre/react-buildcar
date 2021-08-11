import React, {useState, useEffect} from 'react'
import { data } from '../apiData'
import { useHistory } from 'react-router'
import { Button } from 'semantic-ui-react'
import useCustomHook from '../useCustomHook'

const BuildBody = () => {
    const history = useHistory();
    const firstRender = useCustomHook();
    const nextpage = () => history.push('/fittyres');
    const prevPage = () => history.push('/');
    const [status,setStatus] = useState("")
    const [color,setColor]=useState('grey');
    const [disableButton, setDisableButton] = useState(true)

    useEffect(() => {
        if(!firstRender) {
        setTimeout(() => {
            setColor("Orange")
            setStatus("Body Building finish move to next task")
            setDisableButton(false)
        },4000)
    }
    },[status,firstRender])
    return (
        <div>
            <div>
                <Button onClick = {() => setStatus("Please wait Body is assembling")}>{data.root.task2.name}</Button>
            </div>
            <div>
            <h1 style = {{backgroundColor:color}}>{status}</h1>
            </div>
            <div>
                {status === "" ? "" :<Button disabled= {disableButton} onClick={prevPage}>Previous Task</Button>}
                {status === "" ? "" :<Button disabled= {disableButton} onClick={nextpage}>NextTask</Button>}
            </div>
        </div>
        
    )
}

export default BuildBody