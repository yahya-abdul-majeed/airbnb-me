import NavigationBar from "../components/NavigationBar";
import {useParams} from 'react-router-dom';
import { Image } from "react-bootstrap";
import {AiFillStar} from 'react-icons/ai';

export default function DetailPage({findPlaceById}){
    let params = useParams();   
    let place = findPlaceById(params.placeId);
    return(<div>
        <NavigationBar/>
        
        <div className='container mt-3' style={{paddingLeft: 200, paddingRight: 200}}>
            <div className="row">
                <h2>{place.listingName}</h2>
            </div>
            <div className="row">
                <pre><AiFillStar/> {place.avgRating ? place.avgRating : 3}  { place.publicAddress}</pre>
            </div>
            <div className='row'>
                <div className='col'>
                    <Image fluid src={place.images[0]} style={{borderRadius: 10}}/>
                </div>
                <div className='col'>
                    <div className='row'>
                        {place.images.map((image)=>(
                            <div className='col-4 mt-2' >
                                <Image fluid src={image} style={{width:150, height: 140, borderRadius: 10}}/>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
        
        
    </div>);
}