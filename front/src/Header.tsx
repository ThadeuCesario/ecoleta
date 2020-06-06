import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = props => {
    const {title} = props;
    return (
        <header>{title}</header>
    );
}

export default Header;