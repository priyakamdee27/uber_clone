import React from 'react'
import{useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'


const Confirmed = () => {
          
     const router=useRouter()
     const { pickup,dropoff}=router.query

     const [pickupCoordinates,setPickupCoordinates] = useState([0, 0])
     const [dropoffCoordinates,setDropoofCoordinates] = useState([ 0, 0])
 
    const getPickupCoordinates=(pickup)=>{
   

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
    new URLSearchParams({
    access_token: "pk.eyJ1Ijoic2lraGEtLS0tMjciLCJhIjoiY2t2b3FsbHU3N3h3ZDJwcXc1NjdzMmoxZCJ9.47RX6CluixnJr0tlVzn_GA",
    limit:1

    }))
     .then(response=>response.json())
     .then(data =>{
         
         setPickupCoordinates(data.features[0].center);
     })
    }
     
     const getDropoffCordinates=(dropoff)=>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
        new URLSearchParams({
        access_token: "pk.eyJ1Ijoic2lraGEtLS0tMjciLCJhIjoiY2t2b3FsbHU3N3h3ZDJwcXc1NjdzMmoxZCJ9.47RX6CluixnJr0tlVzn_GA",
        limit:1
    
        }))
         .then(response=>response.json())
         .then(data =>{
            
             
             setDropoofCoordinates(data.features[0].center);
         })
        }

    useEffect(()=>{
             getPickupCoordinates(pickup);
             getDropoffCordinates(dropoff);
    },[pickup,dropoff])
  console.log(pickupCoordinates);
  console.log(dropoffCoordinates);
   
    return (
        <Wrapper>
            
            <ButtonContainer>
               <Link href="/Search" >
                <BackButton  src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </Link>
            </ButtonContainer>
            <Map 
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
            />

            <RideContainer>
               <RideSelector
               pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
            />
                  <ConfirmButtoncontainer>
                      <ConfirmButton>
                      Confirm UberX
                      </ConfirmButton>
                 </ConfirmButtoncontainer>   
           </RideContainer>
        </Wrapper>
    )
}

export default Confirmed


const ConfirmButton=tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtoncontainer=tw.div`
border-t-2
`
const Wrapper = tw.div`
flex h-screen  flex-col
`
const RideContainer=tw.div`
flex-1 flex flex-col h-1/2
`
const ButtonContainer=tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
` 
const BackButton=tw.img`
h-full object-contain
`