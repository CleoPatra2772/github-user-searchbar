import type { NextPage } from 'next';
import style from '../styles/History.module.css';

const History = () => {

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;




    return(
        <div className={style.historyContainer}>
        <h1>Search History</h1>

        <p></p>
        </div>
    )

    
}


export default History;