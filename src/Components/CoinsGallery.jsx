import React, { useContext } from "react";
import { themeContext } from "../App";


function CoinsGallery(props) {
  let { dark } = useContext(themeContext);
  return (
    <>
      <div className="GalleryContainer">
       
       <div className={dark ? "GalleryItems dark" : "GalleryItems"}>
          <img className={props.firstImage} src={props.imgOne} alt="" />
          <li>{props.coinName}</li>
          <p>{props.descripOne}</p>
          </div>

          <div className={dark ? "GalleryItems dark" : "GalleryItems"}>
          <img  className={props.secondImage} src={props.imgTwo} alt="" />
          <li>{props.coinSecondName}</li>
          <p>{props.descripTwo}</p>
          </div>

        <div className={dark ? "GalleryItems dark" : "GalleryItems"}>
          <img  className={props.thirdImage} src={props.imgThree} alt="" />
          <li>{props.coinThirdName}</li>
          <p>{props.descripThree}</p>
          </div>
        
      </div>
    </>
  );
}

export default CoinsGallery;
