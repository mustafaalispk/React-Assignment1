import React, { useState, useEffect } from 'react';
import axios from 'axios'

const HomeView = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    const [, setLoading] = useState(true)
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
                console.log(res.data);
                setName(res.data.name);
                setMoves(res.data.moves[0].move.name);
            }
            catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getData();
    });
    return (
        <>
            <h1>you choose <span style={{ color: 'red' }}>{num} value </span></h1>
            <h1>you choose <span style={{ color: 'red' }}> {name} </span></h1>
            <h1>you choose <span style={{ color: 'red' }}> {moves} moves </span></h1>
            <select value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
            </select>
        </>
    )
}
export default HomeView;