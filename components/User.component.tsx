import style from '../styles/User.module.css';
import Link from "next/link";
import { IUserInfo } from './types/IUserInfo';
import { IUserDetails } from './types/IUserdetail';
import { IUserRepo } from './types/IUserRepo';
import { useState, useEffect } from 'react';
import axios from './axios/axios';


export const User = (props: {item: IUserInfo}) => {
    const { item } = props;
    console.log("item", item);
    const [user, setUser] = useState<IUserDetails>();
    const [userRepo, setUserRepo] = useState<IUserRepo>();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try{
            const response = await Promise.all([
                axios.get(`/users/${item.login}`),
                axios.get(`/users/${item.login}/repos`),
            ]);
            console.log(response);
            setUser(response[0].data);
            setUserRepo(response[1].data);
        }catch(error) {
            console.log(error);
        }
        }
        fetchUserInfo();
    },[]);

 
    
    // const id = data.length !==0 ? data.items[0].map((item) => 
    // <li>{item.id}</li>): <li>nothing found</li>;



    return (
      
        <div className={style.searchResult}>
                <div className={style.user}>
                    <div className={style.userImage}>
                    <img src={item.avatar_url} alt='avatar'/>
                    </div>
                    <div className={style.userInfo}>
                        <h5 className={style.userText}>Name : {item.login} </h5>
                        <h6 className={style.userText}>ID: {item.id} </h6>
                        {/* <h6 className={style.text}>Email: xxxxxxx</h6> */}
                        <h6 className={style.userText}>Bio:<a className={style.userText} href={item.url}>{item.url}</a></h6>
                       

                        <p>👉Followers: {user?.followers} </p>
                        <p>👉Following: {user?.following} </p>
                        <p>🌍Location: {user?.location}</p>
                        <p>🖥Email: {user?.email}</p>
                    </div>

                    <div className={style.userRepoContainer}>
                    {/* {userRepo.slice(0,2).map(repo: => {
                        return(
                        <div className={style.userRepoDetail}>
                        <h6 repo={repo.id}>{repo.name}</h6>
                        <p className={style.repoDescription}>Description: ✨{repo.description}</p>
                        <a >{repo.git_url}</a>
                        </div>
                        )
                    })} */}
                    
            </div>      
                    
                    <div>
                    

                </div>
        </div>
    </div>



             

                
            
    )
}