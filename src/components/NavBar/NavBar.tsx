import React from 'react';

import { LogoContainer, Avatar } from '../sharedElements/images';
import { NavBarContainer, NavBarCenterElements, NavBarLeftElements, NavBarRightElements } from './elements';
import logo from '../../assets/images/logo01.png';
import user from '../../assets/images/face.png';

type Props = {
    readonly children: React.ReactElement;
};

export const NavBar: React.FC<Props> = ({ children }: Props): React.ReactElement => {
    return (
        <NavBarContainer>
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
