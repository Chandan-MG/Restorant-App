import React, {Fragment} from "react";
import TableImage from '../../Assets/grazing-table-feast-food1-1366x768.webp';
import './Header.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return(
        <Fragment>
            <header className='header'>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className='main-image'>
                <img src={TableImage} alt="A table of meals" />
            </div>
        </Fragment>
    )
}

export default Header;
