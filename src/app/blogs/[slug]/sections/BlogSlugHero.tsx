

import React from 'react'


function BlogSlugHero({content}: {content:{head: string; name: string; time: string; img: string}}) {
   
  return (
    <div className="blog-slug-hero-sec" style={{backgroundImage: `url(${content.img})`, backgroundSize: "cover"}}>
        <div className="flex blog-slug-hero-sec-home">Home / Guide</div>
            <div className="blog-slug-hero-content">
                <h2 className="blog-slug-hero-content-head">{content.head}</h2>
                <div className="blog-slug-hero-content-name-date">
                    <p className="blog-slug-hero-content-para">{content.name}</p>
                    <span className="blog-slug-hero-content-para"> • </span>
                    <p className="blog-slug-hero-content-para">{new Date(content.time).toLocaleDateString()}</p>
                </div>
            </div>
    </div>
  )
}

export default BlogSlugHero