import React from 'react';

interface HeaderProps {
    title: string;
}

/* FC => componente escrito em formato de função.
 * Esse FC é basicamente um generic, ou seja, um tipo do typescript que pode
 * receber um parametro.
 */
const Header: React.FC<HeaderProps> = props => {
    const {title} = props;
    return(
        <header>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;