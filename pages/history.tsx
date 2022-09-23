import type { NextPage } from 'next';
import { useState } from 'react';
import style from '../styles/History.module.css';

const History = () => {





    return(
        <div className={style.historyContainer}>
        <h2>Search History🕰️</h2>
        
        <div className={style.searchHistory}>
            <p className={style.time}>Time: _______ </p>
            <p className={style.searchItem}>Searched Term: ______</p>

        </div>
        </div>
    )

    
}


export default History;