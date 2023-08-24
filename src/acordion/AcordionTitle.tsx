import React from "react";

type AcordionTitlePropsType = {
    title: string
    clickHandler: () => void
}

export const AcordionTitle = (props: AcordionTitlePropsType) => {
    return (
        <div onClick={props.clickHandler}>
            <h3>{props.title}</h3>
        </div>
    );
};