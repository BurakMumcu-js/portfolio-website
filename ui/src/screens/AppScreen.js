import React from "react";

function AppScreen(props){
    return(
        <>
<div className="banner">
<div className="overlay">
    <div className="container">
    <h1>My Recent Mobile Apps </h1>
    <button>
        <a href="#">Home</a>
    </button>
    </div>
    </div>
</div>
<div className="container blogcontainer">
    <div className="row">
        <div className="blogBox col-lg-4 col-md-6 col-sm-6">
            <div className="blogBox_pic">
                <div className="blogLebal">
                    <a href="#">Project Details</a>
                </div>
            </div>
            <div className="blog_text">
                <ul>
                    <li>
                        <i className="far fa-calendar"></i> 11 Mayıs 2022
                    </li>
                </ul>
                <h5>Sell & Bull App</h5>
                <p>Burada Bir Açıklama Olacak ...</p>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default AppScreen;