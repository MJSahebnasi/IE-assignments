import React from 'react';

class Navbar extends React.Component {

    render() {

        return (
            <div class="drop-down">
                <span class="menu_button"><h3>All Products</h3></span>
                <span class="menu_button"><h3>Smartphones</h3></span>
                <span class="menu_button"><h3>Notebooks</h3></span>
                <button type="button" class="cart_button">cart</button>
            </div>
        );
    }
}
export default Navbar;