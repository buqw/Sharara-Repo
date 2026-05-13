export default function CoinTemp(props){
 


    return(
        <div onClick={props.onClick} className={`${props.dark ? 'coinDiv darkMode sendingSelect' : 'coinDiv lightMode sendingSelect'}
        ${props.activeIndex ? 'selected' : ''}
        `}>

            <div className='coinInfo'>
                <img src={props.logo} alt="" className='coinImg' />
                <div className='nameNnumber'>
                    <p>{props.coinName}</p>
                    <p>{props.coinName === "BTC"?Number(props.quant).toFixed(5) :props.quant}</p>
                </div>
            </div>

            <div className='valueNchange'>
                <div className='value'>
                    <p>${Number(props.value).toFixed(1)}</p>
                </div>
                
                {props.coinName !== 'USDT' ?(
                    <div className='change'>
                        <div className={props.profit ? 'greenPercent greenNred' : 'redPercent greenNred'}>
                        <p>{props.dailyChange}</p>
                        </div>
                    </div>
                ):null}
            </div>
        </div>

    )
}