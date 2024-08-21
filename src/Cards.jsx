import React from "react";
import ReactDOM from "react-dom";

function Cards(props){
    return(
        <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 expand mt-28">
            <img class="object-cover w-full h-56" src={props.imgurl} alt="avatar"/>
            <div class="py-5 text-center">
                <a href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{props.subject}</a>
                <span class="text-sm text-gray-700 dark:text-gray-200">{props.grade}</span>
            </div>
        </div>
    )
}

export default Cards