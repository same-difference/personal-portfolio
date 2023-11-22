import React from "react";
import { useState } from "react";

interface Props {
    wrapper: string;
    idCard: string;
    classyName: string;
}


export default function HoverName({ wrapper, idCard, classyName }: Props) {

    const [name, setName] = useState("Dianneth");
    const handleMouseOver = () => { setName("diˌʌˈnɛθ") };
    const handleMouseOut = () => { setName("Dianneth") };

    return (
        React.createElement(wrapper, {className: classyName, onMouseOver: handleMouseOver, onMouseOut: handleMouseOut, id: idCard}, name)
    );
}