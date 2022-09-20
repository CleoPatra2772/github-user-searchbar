import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/github-logo.svg";
import style from "../styles/Header.module.css";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


export const Header = () => {
    return(
<nav className="navbar navbar-expand-lg">
        <Link href='/'>
        <a className="navbar-brand"><Image className="logo" src={logo} width='30px' height='30px'/></a>
        </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>


<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item active">
            <Link href='/'>
                <a className="nav-link">Home</a>
            </Link>
        </li>
        <li className="nav-item">
             <Link href='/search'>
                <a className="nav-link">Search</a>
             </Link>
        </li>

        <li className="nav-item">
            <Link href='/History'>
                <a className="nav-link">History</a>
            </Link>
        </li>
    </ul>


  </div>


</nav>



    //     <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //         <Image src={logo} />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link>
    //         <Link href='/' >Home</Link>
    //         <Link href='/search' >Search</Link>
    //         <Link href='/history'>History</Link>
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>


    // <header className={style.nav}>
    //     <div className={style.logoContainer}>
    //         <Link href='/'>
    //             <div className={style.logo} >
    //                 <Image src={logo} width='40px' height='40px'alt='github logo'  />
    //             </div>
    //         </Link>
    //     </div>

        
    //         <div className={style.linkContainer}>
    //             <ul className={style.headerLink}>
    //                 <li className={style.link}>
    //                     <Link href='/home'>
    //                         <a className={style.link}>Home</a>
    //                     </Link>
    //                 </li>

    //                 <li className={style.link}>
    //                     <Link href='/search'>
    //                         <a className={style.link}>Search</a>
    //                     </Link>
    //                 </li>

    //                 <li className={style.link}>
    //                     <Link href='/history'>
    //                         <a className={style.link}>History</a>
    //                     </Link>
    //                 </li>
    //             </ul>
    //         </div>
       


    // </header>
    )
}