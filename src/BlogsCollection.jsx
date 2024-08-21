import React from "react";
import ReactDOM from "react-dom";
import Leftblog from "./Leftblog";
import Rightblog from "./Rightblog";
////dark:text-white
function BlogsCollection (){

    var wd = screen.width;

    return (
        <div> 
            {wd > 1024 ? 
                <div className="bg-gray-900">
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize text-center lg:text-3xl text-white mt-16 mb-36">Discussion</h1>
                    <Leftblog question="Who is your biggest inspiration?" answer="Alexander the Great" imgurl="../public/images/alexander.jpeg" />
                    <Rightblog question="What do you hope to acheive in life?" answer="Make enough money to travel the world" imgurl="../public/images/mezcalito.jpeg" />
                    <Leftblog question="Who is your favourite rapper?" answer="Kendrick Lamar" imgurl="../public/images/kendrick.jpeg" />
                    <Rightblog question="What do you do in your freetime?" answer="I play golf" imgurl="../public/images/munching.jpeg" />
                </div> 
                : 
                <div className="bg-gray-900 text-center">
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize text-center lg:text-3xl text-white mt-16 mb-36">Discussion</h1>
                    <Leftblog question="Who is your biggest inspiration?" answer="Alexander the Great" imgurl="../public/images/alexander.jpeg" />
                    <Leftblog question="What do you hope to acheive in life?" answer="Make enough money to travel the world" imgurl="../public/images/mezcalito.jpeg" />
                    <Leftblog question="Who is your favourite rapper?" answer="Kendrick Lamar" imgurl="../public/images/kendrick.jpeg" />
                    <Leftblog question="What do you do in your freetime?" answer="I play golf" imgurl="../public/images/munching.jpeg" />
                </div> 
            }
        </div>

        
    )
}

export default BlogsCollection