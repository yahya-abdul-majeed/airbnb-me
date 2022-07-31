import {Image} from 'react-bootstrap';

export default function Place({place}){
    return(
        <div className='col-3 my-3 mx-0 text-center'>
            <Image fluid src={place.images[0]} style={{height: 300, width: 350}}/>
        </div>
    )
}