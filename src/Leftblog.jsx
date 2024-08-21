import React from "react";
import ReactDOM from "react-dom";
//
function Leftblog(props){
    return(
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 expand" src={props.imgurl}alt=""/>

                    <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                            {props.question}
                        </a>
                        <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            {props.answer}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Leftblog