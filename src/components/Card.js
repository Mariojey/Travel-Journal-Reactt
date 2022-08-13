import React from "react";
import '../style.css';

function Card(){
    return (
      <div className="card--container">
            <div className="card--img"></div>
            <div className="card--content">

                <div className="card--content--location">
                    <img src="./pinezka.webp" alt="" className="card--content--location--mark" />
                    <p className="card--content--location--country">JAPAN</p>
                    <a href="#" className="card--content--location--maps">View in google maps</a>
                </div>
                <h1 className="card--content--header">Mount Fuji</h1>
                <p className="card--content--data">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card--content--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
      </div>  
    );
}
export default Card;