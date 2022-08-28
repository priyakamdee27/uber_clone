import React from 'react'
import { useEffect,useState } from 'react'
import tw from "tailwind-styled-components"
import {carList} from '../data/carList'


const RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {

    const[rideDuration,setRideDuration]=useState(0);

    //get ride duration from Mapbox Api
     useEffect(()=>{
       rideDuration=fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic2lraGEtLS0tMjciLCJhIjoiY2t2b3FsbHU3N3h3ZDJwcXc1NjdzMmoxZCJ9.47RX6CluixnJr0tlVzn_GA`
       ).then(res=>res.json())
       .then(data => {
           setRideDuration(data.routes[0].duration/100)
       })
    },[pickupCoordinates,dropoffCoordinates])
    return (
        <Wrapper>
        <Title>
            Choose the ride or swipe up for the more 
        </Title>
       
        <CarList>
        
          {carList.map((car,index)=>(
   
         <Car key={index}>
              <CarImage src={car.imgUrl}/>
               <CarDetails>
                 <Service>{car.service}</Service>
               <Time> 5min Away</Time>
               </CarDetails>
            <Price>{'$' +(rideDuration *car.multilplier/2).toFixed(2)}</Price>

   </Car>   
          ))}
           

        </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Service =tw.div`
font-medium
`
const Time=tw.div`
text-xs text-blue-500
`
const CarDetails=tw.div`
flex-1
`
const Price=tw.div`
text-sm
`
const Car=tw.div`
flex p-4 item-center
`
const CarImage=tw.img`
 h-14 mr-4
`
const CarList=tw.div`
overflow-y-scroll
`
const Wrapper = tw.div`
 flex-1 overflow-y-scroll flex flex-col
`
const Title=tw.div`
text-gray-500 text-center text-xs  py-2 border-b 
`