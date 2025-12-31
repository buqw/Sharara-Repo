import { useEffect } from 'react'
import Footer from '../Public-Components/Footer'
import HomeBtns from './HomeCompnents/HomeBtns'
import HomeCoins from './HomeCompnents/HomeCoins'
import Nav from './HomeCompnents/Nav'
import WalletValue from './HomeCompnents/WalletValue'

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
            <Nav username={props.username} avatar={props.avatar} dark={props.dark} changeMode = {props.changeMode} />
            <WalletValue buyAmount={props.buyAmount} walletAmount = {props.walletAmount} dark={props.dark}/>
            <HomeBtns dark={props.dark}/>
            <HomeCoins usdtAmount={props.usdtAmount} dark={props.dark}/>
            <Footer activeBtn={1} dark={props.dark}/>
                   
        </>
        
        
    )
}
