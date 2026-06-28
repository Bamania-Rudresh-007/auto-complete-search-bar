import "./index.css";
import { useState, useEffect } from "react";

function App() {
    const api = "https://dummyjson.com/recipes/";

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
        fetchApi(api + "search?q=" + input);
    }, [input]);

    return (
        <>
            <div className="container">
                <header>
                    <h1>Auto Search Bar</h1>
                </header>
                <main>
                    <div>
                        <input 
                            type="text"
                            onChange={(e) => setInput(e.target.value)}
                         />
                    </div>
                    <div className="results">
                        {results.map((e) => {
                            return <span key={e.id}>{e.name}</span>
                        })}
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
