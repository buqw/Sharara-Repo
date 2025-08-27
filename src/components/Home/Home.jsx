import { useEffect, useState } from 'react'
import Nav from './HomeCompnents/Nav'
import WalletValue from './HomeCompnents/WalletValue'
import HomeBtns from './HomeCompnents/HomeBtns'
import HomeCoins from './HomeCompnents/HomeCoins'
import Footer from '../Public-Components/Footer'

export default function Home(props){
    

    useEffect(() => {
        if(props.dark){
            document.body.classList.add('darkModeBody')
            document.body.classList.remove('lightModeBody')

        }
        else{
            document.body.classList.remove('darkModeBody')
            document.body.classList.add('lightModeBody') 
        }
    })


    return(
        <>
            <Nav dark={props.dark} changeMode = {props.changeMode} />
            <WalletValue buyAmount={props.buyAmount} walletAmount = {props.walletAmount} dark={props.dark}/>
            <HomeBtns dark={props.dark}/>
            <HomeCoins dark={props.dark}/>
            <Footer dark={props.dark}/>
           
            {console.log(`Amounntt iss ${props.buyAmount}`)}
        
        </>
        
        
    )
}