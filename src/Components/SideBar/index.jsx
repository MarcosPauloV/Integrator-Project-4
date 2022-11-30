import React from "react";
import {
  SideBarMenu,
  SideBarLink,
  SideBarBtn,
  SideBarBtnLink,
} from "./styled";

import {AiOutlineHome as Home} from 'react-icons/ai'
import {AiOutlineShopping as Shop} from 'react-icons/ai'
import {AiOutlineShoppingCart as Cart} from 'react-icons/ai'
import {MdCreate as Create} from 'react-icons/md'
import {FiLogIn as Login} from 'react-icons/fi'

const SideBar = ({ open }) => {
  return (
    <SideBarMenu open={open}>
      <SideBarLink to="/"><Home style={{position: 'absolute', left: '0'}}/>Home</SideBarLink>
      <SideBarLink to="/sellers"><Shop style={{position: 'absolute', left: '0'}}/>Revendas</SideBarLink>
      <SideBarLink to="/events"><Cart style={{position: 'absolute', left: '0'}}/>Veja os eventos</SideBarLink>
      <SideBarLink to="/beaPromoter"><Create style={{position: 'absolute', left: '0'}}/>Seja um promotor</SideBarLink>
      <SideBarLink to='/signIN'><Login style={{position: 'absolute', left: '0'}}></Login>Login</SideBarLink>
      <SideBarBtn>
        <SideBarBtnLink to="/signUP">Criar conta</SideBarBtnLink>
      </SideBarBtn>
    </SideBarMenu>
  );
};

export default SideBar;
