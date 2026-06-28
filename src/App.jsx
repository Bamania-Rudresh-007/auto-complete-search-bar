import "./index.css";
import { useState, useEffect } from "react";
import data from "./dummyData/data.json";

function App() {
    const [results, setResults] = useState([]);
    const [input, setInput] = useState("");    

    const fetchApi = async (api) => {
        try {
            const res = await fetch(api);
            const data = await res.json();
            setResults(data.recipes || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {

        const filteredData = data.filter((recipe) => {
            return recipe.name.toLowerCase().includes(input.toLowerCase());
        });
        setResults(filteredData);
    }, [input]);

    return (
        <>
            <div className="container">
                <div className="header">
                    <header>
                        <h1> Auto Complete Search Bar </h1>
                    </header>
                </div>

                <div className="main">
                    <div className="searchBar">
                        <input type="text"  
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="results">
                        {results.map((e) => {
                            return <span key={e.id}>{e.name}</span>
                        })}
                    </div>  
                </div>

            </div>
        </>
    );
}

export default App;
