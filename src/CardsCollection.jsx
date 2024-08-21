import React, { useState } from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards"

function CardsCollection(){
    return(
        <div>
            <h1 className="text-2xl font-semibold capitalize text-center lg:text-3xl text-white mt-16 mb-6">Examination Results</h1>
            <div className="cards mb-24">
                <Cards subject = "Mathematics" grade = "A" imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Carl_Friedrich_Gauss_1840_by_Jensen.jpg/1200px-Carl_Friedrich_Gauss_1840_by_Jensen.jpg"/>
                <Cards subject = "Economics" grade = "B" imgurl="https://lectera.com/info/storage/img/20220610/36690d0889a690fcddbe.jpg"/>
                <Cards subject = "Politics" grade = "B" imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/640px-Donald_Trump_official_portrait.jpg"/>
            </div>
        </div>
    )
}

export default CardsCollection