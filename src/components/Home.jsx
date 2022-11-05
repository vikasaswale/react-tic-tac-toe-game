import React from 'react'
import { useState, useEffect } from 'react'
import Box from './Box'
import './Style.css'

const Home = () => {

    const [arr, setArr] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    const [isXClicked, setIsxclicked] = useState(false);
    const [disabled, setdisabled] = useState(true);

    const handleClick = (i) => {

        //if value already filled then error
        if (arr[i] !== " ") {
            alert('Already Marked')
        } else {
            const letter = isXClicked ? "O" : "X"
            arr.splice(i, 1, letter)
            setArr([...arr])
            setIsxclicked(!isXClicked);
            setdisabled(false)
        }
    }

    const winningList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    useEffect(() => {
        const result = winnerFun();
        if (result !== null) {
            alert(`Winner is ${result}`);
            clearAll();
        }

    }, [arr])


    const winnerFun = () => {

        for (let i = 0; i < winningList.length; i++) {
            const [a, b, c] = winningList[i];
            if (arr[a] !== ' ' && arr[a] === arr[b] && arr[a] === arr[c]) {
                return arr[a];
            }
        }
        return null;
    }


    const clearAll = () => {
        setArr([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
        setIsxclicked(false);
        setdisabled(true)
    }

    return (
        <>
            <div className='container'>
                <div className='inner-home'>
                    <Box val={arr[0]} onClick={() => handleClick(0)} />
                    <Box val={arr[1]} onClick={() => handleClick(1)} />
                    <Box val={arr[2]} onClick={() => handleClick(2)} />

                    <Box val={arr[3]} onClick={() => handleClick(3)} />
                    <Box val={arr[4]} onClick={() => handleClick(4)} />
                    <Box val={arr[5]} onClick={() => handleClick(5)} />

                    <Box val={arr[6]} onClick={() => handleClick(6)} />
                    <Box val={arr[7]} onClick={() => handleClick(7)} />
                    <Box val={arr[8]} onClick={() => handleClick(8)} />
                </div>

                <div className='text-box'>
                    <h1>Its <span style={{ color: "red" }}>{isXClicked ? "O" : "X"}'s </span> Turn</h1>
                    <button onClick={clearAll} disabled={disabled}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Home