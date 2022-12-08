import React from 'react'

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/icon-cities.svg";
import Icontraveler from "assets/images/icons/icon-traveler.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";

import Button from 'element/Button'
export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top:props.refMostPicked.current.ofsettTop -30,
            behavior: "smooth"

        })

    }
    return(
        <section className="container pt-4">
            <div className="row align-items-center">
            <div className="col-auto pr-5" style={{widht: 530}}>
            <h1 className="h2font-weight-bood line-height-1 mb-3">
                Forget Busy Work, <br/>
                start Next Vacation
            </h1>
            <p className="mb-5 font-weight-light textgray-500 w-75">
                We Provide what you need to enjoy your holiday with family. time to make another memorable moments.
            </p>
            <Button className="btn px-5" 
            hasShadow 
            isPrimary
            onClick={showMostPicked}
            >
            Show Me Now
            </Button>

            <div className="row mt-5">
                <div className="col-auto" style={{marginRight: 50}}>
                    <img 
                    width="36"
                    height="36"
                    src={IconTraveler} 
                    alt={`${props.data.tarvelers} Travelers`}
                    />
                    <h6 className="mt-3">
                        {props.data.travelers}{" "}
                        <span className="text-gray-500 font-weight-light">
                            Travelers 
                        </span>
                    </h6>
                </div>
                <div className="col-auto" style={{marginRight: 50}}>
                    <img
                    width="36"
                    height="36"
                    src={IconTreasure}
                    alt={`${props.data.treasures} Treasures`}
                    />
                    <h6 className="mt-3">
                        {props.data.treasures}{" "}
                        <span className="text-gray-500 font-weight-light">
                            Treasures
                        </span>
                    </h6>
                </div>
                <div className="col-auto" style={{marginRight: 50}}>
                    <img
                    width="36"
                    height="36"
                    src={IconCities}
                    alt={`${props.data.cities} Cities`}
                    />
                    <h6 className="mt-3">
                    {props.data.cities}{" "}
                    <span className="text-gray-500 font-weight-light">cities</span>
                </h6>
                </div>
            </div>
        </div>

        <div className="col-6 pl-5">
            <div className="image-hero">
                <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{margin: '-30px 0 0
                 -30px', zIndex: 1}}/>

            </div>

        </div>
    </div>
    </section>
    );
}