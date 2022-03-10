import React from "react";
import '../Components/Coin.css'

const Coin = ({coin,id}) => {
    return(

        <div className="coin-card">
            <h1 className="name">Name: {coin.name}</h1>
            <img src={coin.icon} alt="coin-icon" className="logo" />
            <p className="price">Price: {coin.price}₹</p>
            <p className="symbol">Symbol: {coin.symbol}</p>
        </div>
    );

}

export default Coin;