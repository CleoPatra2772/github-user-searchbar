import { NextPage } from "next";
import style from '../styles/Search.module.css';
import { BiSearchAlt2 } from 'react-icons/Bi';
import { GitInfoCard } from "./GitInfoCard.component";
import { ImLocation2 } from 'react-icons/Im';
import { CgWebsite } from 'react-icons/Cg';



const Search = () => {

    return(
        <div className={style.searchContainer}>
            <h2 className={style.headLine}>Search for a Github User</h2>
            <form className={style.form}action="">
                <input className={style.input} type='text' placeholder='Input Github Username' required></input>
                <button className={style.searchButton}type="submit">Search</button>
            </form>
        </div>

    );


    {/* //    <div className={style.searchContainer} >
    //         <h1 className={style.searchHeadline}>Search for a Github User <BiSearchAlt2 /></h1>
    //         <div className={style.search} >
    //             <div className={style.searchText}>
    //                 <span className={style.searchIcon}>  </span>
    //                 <input className={style.searchInput} type='text' placeholder='Input Github Username' required />
    //             </div>
    //             <div className={style.searchButton}>Search</div>
    //         </div>
        
    //     <div className={style.userCard}>

    //     </div> */}

            {/* <div className={style.resultBody}>
                <div className={style.githubHead}>
                    <div className={style.mainImg}></div>
                    <div className={style.githubInfo}>
                        <div className={style.githubUser}>Github User</div>
                        <div className={style.gitUserName}>Cleo</div>

                        <div className={style.githubJoinDate}>Date</div>
                        

                    </div>

                </div>
            */}

            {/* <div className={style.githubInfo}>
                <div className={style.githubBio}>Github Bio</div>

                    <GitInfoCard name="Repos" number={0} />
                    <GitInfoCard name="Followers" number={0} />
                    <GitInfoCard name="Following" number={0} />


                    <div className={style.githubSocial}>
                        <div className={style.locationContainer}>
                            <span><ImLocation2/></span>
                            <p className={style.location}>Location</p>
                        </div>

                        <div className={style.WebsiteContainer}>
                            <span><CgWebsite /></span>
                            <p className={style.location}>Website</p>
                        </div>
                </div>

            </div> */}

        {/* </div> */}



       
    
}


export default Search;