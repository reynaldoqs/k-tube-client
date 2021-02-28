import React from 'react';

import { LogoContainer, Avatar } from '../sharedElements/images';
import { NavBarContainer, NavBarCenterElements, NavBarLeftElements, NavBarRightElements } from './elements';
import logo from '../../assets/images/logo01.png';
import user from '../../assets/images/face.png';

export type NavBarProps = {
    readonly children: React.ReactElement;
    readonly bgColor?: 'dark' | 'light' | 'main';
};

export const NavBar: React.FC<NavBarProps> = ({ children, bgColor }: NavBarProps): React.ReactElement => {
    return (
        <NavBarContainer bgColor={bgColor}>
            <NavBarLeftElements>
                <LogoContainer src={logo} alt="k tube" />
            </NavBarLeftElements>
            <NavBarCenterElements>{children}</NavBarCenterElements>
            <NavBarRightElements>
                <Avatar src={user} />
            </NavBarRightElements>
        </NavBarContainer>
    );
};
