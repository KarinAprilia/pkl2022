import react from "react";
import{ link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
    const className = [props.className]
    if(props.IsPrimary) className.push("btn-primary")
    if(props.IsLarge) className.push("btn-lg")
    if(props.IsSmall) className.push("btn-sm")
    if(props.IsBlock) className.push("btn-block")
    if(props.IsShadow) className.push("btn-shadow")

    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    if(props.type === "link") {
        if(props.isExternal) {
            return(
                <a href={props.href}></a>
            )
        } else {

        }
    }

    return <div></div>;
}

Button.propsTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    target: propTypes.string,
    clasName: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool,
};



