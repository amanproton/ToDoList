import react, { useState } from "react";
import reactDom from "react-dom";

import Header from './Header'
import './style.css'

reactDom.render(

    <>
        <div id="container" >
            <Header></Header>
        </div>
    </>,
    document.getElementById('root')

);

