import React from "react";
import Search from "./Search";
import '../App.css';
import { Top } from "./Top";

//functional component to hold content for homepage
//Header and Search Component are imported and displayed here

export function Body() {

    return (
        <div class="content">
            <Top />
            <Search />
            <h1> Welcome To Bill Buster</h1>
            <p>Keep track of your electricity usage, add your meter reading every week, our machine learning algorithim will predict your next weeks usage. You can add, delete, read and update all your entries. You can also seach the database by company on the right.</p>
        <a href="some url"
   onclick="window.open(this.href,'https://billbusterpwa.netlify.app/',
                                   'width=700px,
                                    height=700px');
 return false;">Popup link</a>
        </div>
    );//end return
}//end class 
