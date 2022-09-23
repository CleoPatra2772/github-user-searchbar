import { NextPage } from "next";
import style from '../styles/Search.module.css';
import React, { useEffect, useState } from "react";
import axios from './axios/axios';
import {User} from './User.component';
import { parseCookies } from "../parseCookies";

import Cookie from 'js-cookie';



const Search = () => {


    const [searchInput, setSearchInput] = useState('');
    const [user, setUser] = useState([]);
    
    // useEffect(() => {
    //     Cookie.set("1", searchInput)
    // }, [searchInput]);


    // Search.getInitialProps = ({req} : any) => {
    //     const cookies = parseCookies(req);

    //     return {
    //         userSearch: cookies.searchInput
    //     };

    // }

    // const date = new Date();

    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
    // let currentDate = `${day}-${month}-${year}`;

    // window.localStorage.setItem(currentDate, JSON.stringify(searchInput));
  

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
        console.log(searchInput);
        event.preventDefault();

        
    }

 
    const fetchUsers = async () => {
        try{
            const {data} = await axios.get('/search/users?q=' + searchInput);
            console.log(data);
            return data?.items;
           
        }catch(err){
            console.log(err);
            return null;
        }
    }

   const handleSearch = async () => {
     
    await fetchUsers();
     if(searchInput) {
        const items = await fetchUsers();
        setUser(items);
     }else{
        console.log('query is empty');
     }
}


    const  handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setTime(currentDate);
    // console.log(time);
 }

    //Storing the searched data in localStorage
    

    return(
        <>
        <div className={style.searchContainer}>
            <h2 className={style.headLine}>Search for a Github User 👀</h2>
            <form className='form' onSubmit={handleSubmit}>
                <input value={searchInput} onChange={handleSearchInput}
                 id='search-input' 
                className={style.input} type='text' placeholder='Input Github Username' required></input>
                <button onClick={handleSearch}
                className={style.searchButton} type="submit">Search</button>
            </form>


                 <div className={style.searchUser}>
                    { user.length && 
                        user.slice(0,1).map(item => {
                        return <User item={item} />
                    })
                    }
                </div>

               
        </div>
            
        </>

        

        

    );


   


   

       
    
}


export default Search;