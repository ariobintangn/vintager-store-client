import {Outlet} from 'react-router-dom'
import MyNavbar from './Navbar'
export default function PageLayout () {
    return (
        <div style={{backgroundColor: "rgba(10,10,10,0.2)"}}>
        <MyNavbar />
        <div className='p-5' style={{fontFamily: "monospace" }}>
        <Outlet />
        </div>
        </div>
    )
}