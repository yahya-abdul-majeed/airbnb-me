import {Image} from 'react-bootstrap';
import {AiFillStar} from 'react-icons/ai';
import {Link} from 'react-router-dom'

export default function Place({place}){
    return(
        <div className='col-3 my-3 mx-0 '>
            <Link to={`/details/${place.id}`}><Image fluid src={place.images[0]} style={{height: 300, width: 350, borderRadius: 20}}/></Link>
            <div className='row m-1 mt-3'>
                <div className='col-8'> 
                    <h5>{place.locationTitle}</h5>
                    <p>{place.localizedDistanceText}</p>
                    <p><b>{place.price}</b>{place.qualifier}</p>
                </div>
                <div className='col-4' style={{paddingLeft: 50}}>
                    <h6><AiFillStar/>{place.avgRating ? place.avgRating : 3}</h6>
                </div>
            </div>
        </div>
    )
}