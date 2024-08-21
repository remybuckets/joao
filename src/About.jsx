import React from "react";
import ReactDOM from "react-dom";
import './App.css'

function About (){
    return(
    <div className="about py-36">
        <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 expand">
            <img class="object-cover w-full h-64" src="../public/images/bigsmile.jpeg" alt="Article"/>
            <div class="p-6">
                <div>
                    <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Bio</span>
                    <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">About</a>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Born in São Paulo, the vibrance and culture of Brazil has never left his heart. Moving to London in 2016, his charisma and brilliance has eluded no one acheiving his firm university choice. He will now read International Development and Economics (MSc) at the University of Edinburgh.</p>
                </div>
        
            </div>
        </div>
    </div>
    )
}
export default About
//<div class="mt-4">
 //   <div class="flex items-center">
   //     <div class="flex items-center">
     //       <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/>
       //     <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</a>
//        </div>
  //      <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
    //</div>
//</div>