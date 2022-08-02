import NavigationBar from "../components/NavigationBar";
import {useParams} from 'react-router-dom';
import { Button, Card, Form, Image } from "react-bootstrap";
import {AiFillStar} from 'react-icons/ai';

export default function DetailPage({findPlaceById}){
    let params = useParams();   
    let place = findPlaceById(params.placeId);
    return(<div>
        <NavigationBar/>
        
        <div className='container mt-3' style={{paddingLeft: 100, paddingRight: 100}}>
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
            <div className='row mt-3'>
                <div className='col-7'>
                    <h3>Island hosted by Ian</h3>
                    <pre>2 guests - 1 bedroom - 1 bed - 1 bath</pre>
                    <hr/>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className='col-5 d-flex justify-content-center mt-3 ' >
                    <Card style={{ width: '21rem', height: '28rem' ,boxShadow: '0px 0px 10px grey'}} className='sticky-top ' >
                        <div className='row mx-2 mt-3'>
                            <div className='col'>
                                <b>$183</b>night
                            </div>
                            <div className='col'>
                                <AiFillStar/><b>4.71</b> reviews
                            </div>
                        </div>
                        <div className='row mx-2 mt-3'  >
                            <Form.Control className='col' type='date' />
                            <Form.Control className='col' type='date' />
                        </div>
                        <div className='row mx-2 '>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Guests</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <Button className='mx-2 mt-5' variant='danger'>Reserve</Button>
                        <p className='text-center mt-2'>You won't be charged yet</p>
                        <div className='row mx-2 mb-3'>
                            <div className='col'>$183 x 5 nights</div>
                            <div className='col d-flex justify-content-end'>$917</div>
                        </div>
                        <div className='row mx-2 mb-3'>
                            <div className='col'>Service fee</div>
                            <div className='col d-flex justify-content-end'>$155</div>
                        </div>
                        <hr/>
                        <div className='row mx-2'>
                            <div className='col'>Total before taxes</div>
                            <div className='col d-flex justify-content-end'>$1,072</div>
                        </div>
                        
                    </Card>
                </div>
            </div>
        </div>
        
        
    </div>);
}