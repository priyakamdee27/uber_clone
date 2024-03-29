import React,{useEffect} from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup} from '@firebase/auth'
import {auth,provider} from '../firebase'
import { onAuthStateChanged } from '@firebase/auth'

const Login = () => {

    const router=useRouter()
    
    useEffect(()=>{
     onAuthStateChanged(auth,user  => {
         if(user){
             router.push('/')
         }
     })


    },[])
    return (
        <Wrapper>
             <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.png"/>
             <Title> Login to access your Account</Title>
             <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            <SignInButton onClick={()=> signInWithPopup(auth,provider)}>
                Sign in with Google
            </SignInButton>
        </Wrapper>
    )
}

export default Login

const Title=tw.div`
text-5xl pt-4 text-gray-500
`
const Wrapper= tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4
`
const SignInButton=tw.div`
bg-black text-white text-center py-4 mt-8 w-full cursor-pointer
`
const UberLogo=tw.img`
h-20 w-auto object-contain self-start
`
const HeadImage=tw.img`
object-contain w-full
`