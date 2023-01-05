import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';

//functional component that allows user to search database through the backend api
// uses react hooks, usestate and useeffect 
// returns results from backend and displays in search box on frontend
// uses axios to make requests, searches based on letters typed

//function to seach database
export default function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [key, setKey] = useState("")
    useEffect(() => {
        const search = async () => {
            try {
                //returns empty array if condition is met
                if (!key.trim()) {
                    setSearchResult([])
                    return
                }
                //uses get request to find data and gets reponse
                const res = await axios.get("http://localhost:4000/api/energys", { params: { key } })
                setSearchResult(res.data.data)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        search()
    }, [key])
    return (
        <div className="search-wrapper">
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Searching..."
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                </div>
                {/* using search result response to display output when user has entered a character */}
                {searchResult && searchResult.length > 0 && (
                    <div className="search-result">
                        {/* Displays each entry that matches request from database */}
                        {searchResult.map(entry => (
                            <div className="result-item" key={entry._id}>
                                <div className="entry-info">
                                    <p className="name">{entry.company}</p>
                                    <p>{entry.amount}</p>
                                    <p>{entry.date}</p>
                                    <p>{entry.week}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </form>
        </div>

    );
}




