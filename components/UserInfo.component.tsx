
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import axios from './axios/axios';
// import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
// import style from '../styles/UserInfo.module.css';

// export const UserInfo = () => {
//      const { login } = useRouter();

//     const [user, setUser] = useState({});
//     const [userRepo, setUserRepo] = useState([]);

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             try{
//             const response = await Promise.all([
//                 axios.get(`/users/${login}`),
//                 axios.get(`/users/${login}/repos`),
//             ]);
//             console.log(response);
//             setUser(response[0].data);
//             setUserRepo(response[1].data);
//         }catch(error) {
//             console.log(error);
//         }
//         }
//         fetchUserInfo();
//     },[]);

      

//     return(

//         <div className={style.userInfoBody}>
//             <h2>Detailed User Information</h2>
        
//         <div className='row'>
            
//             <div className="col-6">
//                 <div className='user-info-container'>
//                 <h5>Name: {user?.name}</h5>
//                 <p> Bio: {user?.bio}</p>
//                 <p>👉Followers: {user?.followers} </p>
//                 <p>👉Following: {user?.following} </p>
//                 <p>🌍Location: {user?.location}</p>
//                 <p>🖥Email: {user?.email}</p>
//                 </div>
                
//         </div>
//         <div className="col-6 ">
//             <div className={style.userRepoContainer}>
//                     <h5>{user?.name}'s Repository</h5>
//                     {userRepo.slice(0,2).map(repo => {
//                         return(
//                         <div className={style.userRepoDetail}>
//                         <h6 repo={repo.id}>{repo.name}</h6>
//                         <p className={style.repoDescription}>Description: ✨{repo.description}</p>
//                         <a >{repo.git_url}</a>
//                         </div>
//                         )
//                     })}
                    
//             </div>      
//         </div>
//         </div>
//         </div>

        

//     )
// }