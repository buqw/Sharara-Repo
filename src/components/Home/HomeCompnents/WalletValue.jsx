export default function WalletValue(props){
    console.log(props.newValue)
    return(
        <div className={props.dark ? 'walletValueProfitDark' : 'walletValueProfitLight'} id='walletValue'>

            <div id='finalValue'>

                {props.buyAmount > 0 ? (<div id='finalValueCont'>
                    <p>${props.walletAmount + Number(props.buyAmount)}</p> 
                </div>) :(<div id='finalValueCont'>
                    <p>${props.walletAmount}</p> 
                </div>) }

            </div>

            <div id='dailyChange'>
                <div id='dailyChangeCont'>
                    <div id='numberChange'>
                        <p>+$650</p>
                    </div>    
                    <div id='homeChangePerc'>
                        <p>+5%</p>
                    </div>
                </div>
            </div>
        </div>

    )
}