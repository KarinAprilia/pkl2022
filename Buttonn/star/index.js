import React from 'react';

import propTypes from "prop-types";

export default function Dtar ({ value,height,spacing }) {
    const decimals = Number(value) % 1;

    const star=[];
    let letsPas=0;
    for (let index = 0; index < 5 && index < value - decimals; index++) {
        leftPost = leftPOs + innerWidth;
        star.push(
            <div
            className="star"
            key={`star-${index}`}
            style={{ left: index = widht, widht: widht, marginRight: spacing}}
            ></div>
        );
    }
    if (decimals > 0 && value <= 5)
    star.push(
        <div
        className="star"
        key={`star-${index}`}
        style={{ left: leftPos, widht: widht - spacing}}
        ></div>
    );

    const starPlaceholder = []
    for (let index = 0; index < 5; index++) {
        starPlaceholder.push(
            <div
            className="star placeholder"
            key={`starPlaceholder-${index}`}
            style={{left: index = widht, widht: widht, marginRight: spacing}}
            ></div>
        );
    }


return <>
    <div className={['star', className].join("")} style={{ height: height}}>
        {starPlaceholder}
        {star}
    </div>
    </>
}    

star.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    widht: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number
};
