import { useEffect } from 'react'
import { Menu } from './menu'

export const Dashboard = (props) => {
    useEffect(() => {
        // console.log('data dashboard : ', props.data)
    })
    return (
        <div>
            <h1>Hello Dashboard</h1>
            {<Menu userData={props.data} />}
        </div>
    )
}