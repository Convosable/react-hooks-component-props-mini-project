import React from "react";

function About({image, about}) {
    return (
        <aside>
            <img  src = {image === undefined ? `https://via.placeholder.com/215` : image} alt = "blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;


// src = {blogData.image === '' ? null : blogData.image}