/*
*   Requerimiento: busqueda por autocompletado y highlight de input ingresado
*   arreglo["Sam","Pepe","Tomas"] 
*/
import React, { useState, useEffect } from "react"
import { fetchNames } from "../../api/fetchNames";
import './Search.css'
const Search = () => {
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState(false);
    const [names, setNames] = useState([]);
    const [filteredResults, setFilteredResults] = useState([])

    useEffect(() => {
        const retrieveNames = async () => {
            const names = await fetchNames();
            setNames(names)
        }
        retrieveNames();
    }, [])
    const handleSubmit = async (e) => {
        if (userInput.length < 3) {
            setError(true);
            return;
        }
        setError(false);
        if (userInput === '123') {
            console.log('es numero');
            return;
        }
        setFilteredResults(names?.filter(name => name.toLowerCase().startsWith(userInput.toLowerCase())));
    }
    return (
        <div>
            <h2 className="br">Challenge</h2>
            {error && <h4>Please write at least (3) three characters</h4>}
            <input
                type="text"
                placeholder="Input Name"
                value={userInput}
                style={{ fontWeight: "bold" }}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button
                onClick={handleSubmit}
            >Search</button>
            <ul>
                {filteredResults.map(name => <li><strong>{userInput}</strong>{name}</li>)}
            </ul>
            <hr />
        </div>
    )
}
export default Search