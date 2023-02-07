import React from "react";

function Article({title, date, preview, minutes}) {
    console.log(title)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date === undefined ? 'January 1, 1970' : date}</small>
            <p>{preview}</p>
            <p>{minutes}</p>
        </article>
    )
}

export default Article;