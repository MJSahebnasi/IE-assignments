import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {

        return (
            <div className="navbar">
                <div className="container">
                    <span className="menu_button"><h3><Link style={{all: "unset"}} to={"/"}>All Products</Link></h3></span>
                    <span className="menu_button"><h3><Link style={{all: "unset"}} to={"/Smartphones"}>Smartphones</Link></h3></span>
                    <span className="menu_button"><h3><Link style={{all: "unset"}} to={"/Notebooks"}>Notebooks</Link></h3></span>
                    <button type="button" className="cart_button"><Link style={{all: "unset"}} to={"/cart"}>Cart</Link></button>
                </div>
            </div>
        );
    }
}
export default Navbar;