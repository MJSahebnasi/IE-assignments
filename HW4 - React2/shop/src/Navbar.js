import React from 'react';

class Navbar extends React.Component {

    render() {

        return (
            <div className="navbar">
                <div className="container">
                    <span className="menu_button"><h3>All Products</h3></span>
                    <span className="menu_button"><h3>Smartphones</h3></span>
                    <span className="menu_button"><h3>Notebooks</h3></span>
                    <button type="button" className="cart_button">Cart</button>
                </div>
            </div>
        );
    }
}
export default Navbar;