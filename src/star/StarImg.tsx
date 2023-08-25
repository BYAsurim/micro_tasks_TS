import React from "react";
import s from "./Star.module.css";

type StarImgPropsType = {
    star: boolean
    setStar: () => void
}

export const StarImg = (props: StarImgPropsType) => {
    return (
        <div onClick={props.setStar}>
            {
                props.star  ?
                    <img className={s.img} alt='img'
                         src='https://kartinki.pics/uploads/posts/2022-02/1645095099_1-kartinkin-net-p-kartinki-zvezdochki-1.png'/> :
                    <img className={s.img} alt='img'
                         src='https://deti-online.com/i/6/d1/60961/main/milaya-zvezdochka.webp'/>
            }

        </div>
    );
};