import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <h1>
                Game of Thrones DB
                </h1>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <h1>Characters</h1>
                </li>
                <li>
                    <h1>Houses</h1>
                </li>
                <li>
                    <h1>Books</h1>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;