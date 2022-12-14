import { Navbar, Image, Button  } from "react-bootstrap";
import {MdOutlineScreenSearchDesktop} from 'react-icons/md';

export default function NavigationBar(){
    return(
        <Navbar style={{borderBottom: '1px solid rgba(0, 0, 0, .2)'}}>
            <Navbar.Brand className='ms-5' href='/'><Image src='../images/airbnb-ar21.svg'/></Navbar.Brand>
            <div  style={{marginLeft: 250, borderRadius: 20, border: '1px solid rgba(0, 0, 0, .5)', width: '370px'}}>
                <Button  variant='outline-light' className='mx-1' style={{border: 0, color: 'black'}}>Anywhere</Button>|
                <Button  variant='outline-light' className='mx-1' style={{border: 0, color: 'black'}}>Any week</Button>|
                <Button  variant='outline-light' className='mx-1' style={{border: 0, color: 'black', opacity: 0.5}}>Add guests</Button>
                <Button variant='outline-light' style={{border: 0, color: 'black'}}><MdOutlineScreenSearchDesktop /></Button>
            </div>
        </Navbar>
    )
}

