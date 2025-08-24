/* eslint-disable react-hooks/exhaustive-deps */
import "./Details.css"
import img1 from '../../assets/images/IMG_5562.JPG';
import img2 from '../../assets/images/IMG_4541.JPG';
import img3 from "../../assets/images/camphoto_1932422408.JPG"
import { useEffect, useState, useMemo } from "react";




export default function Details(){
    const images = useMemo(() => [img1, img2, img3], []);
    const [selectedImage, setSelectedImage] = useState('')
    useEffect(()=>{
        const ranImages = Math.floor(Math.random()*images.length)
        setSelectedImage(images[ranImages])
    }, [])
    return(
        <div className="Details">
            <h2>Who am I?</h2>
            <h4>Hi, I'm Pavel, a fullstack developer...</h4>
        <img src={selectedImage} alt="" />
        </div>
    )
}