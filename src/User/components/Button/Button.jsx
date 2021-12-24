import React from 'react';
import "./Button.scss";

export default function Button({children, ...restProp}) {
    let classButton = "common_button";
    if(restProp.customclass || restProp.classdisable) {
        classButton = `${classButton} ${restProp.customclass || ""} ${restProp.classdisable || ""}`;
    }
    return (
        <button {...restProp} className={classButton}>
            {children}
        </button>
    )
}
