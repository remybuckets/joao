import React from "react";
import ReactDOM from "react-dom";

function Intro(){

    var wd = screen.width

    return(
        <header class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-20 mx-auto">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                            {wd > 1024 ?
                            <div class="lg:max-w-lg">
                               <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Joao Schneider</h1>
                               <p class="mt-3 text-gray-600 dark:text-gray-400">Awesome Caring Calm</p> 
                            </div>                          
                            :
                            <div className="text-center lg:max-w-lg">
                                <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Joao Schneider</h1>
                                <p class="mt-3 text-gray-600 dark:text-gray-400">Awesome Caring Calm</p>                            
                            </div>
                            }
                    </div>
                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-full h-full lg:max-w-3xl rounded-full mt-16" src="../public/images/intro.jpeg" alt="Catalogue-pana.svg"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Intro