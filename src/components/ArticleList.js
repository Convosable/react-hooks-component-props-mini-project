import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const allPosts = posts.map(article => {
        return <Article key = {article.id} title = {article.title} date = {article.date} preview = {article.preview} minutes = {article.minutes}/>
    })
    return (
        <main>
            {allPosts}
        </main>
    )
}

export default ArticleList;