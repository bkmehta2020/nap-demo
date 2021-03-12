import React from 'react'

export default function Banner(props) {

    return (
        <div className="banner">
            <img src={props.bannerData.imgScr} alt="" />
            <div className="header-box" >
                <h1 style={{ color: props.bannerData.textColor }} className="napfonts nap-fontsize1 mobile-fontsize2 ff-psb title-margin-bottom ">{props.bannerData.headText}</h1>
                <p style={{ color: props.bannerData.textColor }} className="napfonts nap-fontsize4 mobile-fontsize6 ff-pr ">{props.bannerData.paraText}</p>

            </div>
        </div>
    )
}
