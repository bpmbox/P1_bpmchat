import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { logoutUser } from "../../../actions/auth";

import s from "./ListGroup.module.scss";

import settingsIcon from "../../../images/settings.svg";
import logoutIcon from "../../../images/logout.svg";
import accountIcon from "../../../images/account.svg";

const MessagesDemo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const sidebarOpened = useSelector((store) => store.navigation.sidebarOpened);
  const sidebarStatic = useSelector((store) => store.navigation.sidebarStatic);
  const navbarType = useSelector((store) => store.layout.navbarType);
  const navbarColor = useSelector((store) => store.layout.navbarColor);
  const currentUser = useSelector((store) => store.auth.currentUser);

  const doLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <ListGroup className={[s.listGroupAccount, "thin-scroll"].join(" ")}>
      <p className={`${s.listGroupTitleAccount}`}>{currentUser && currentUser.firstName && currentUser.firstName} {currentUser && currentUser.lastName && currentUser.lastName}</p>
      <p className={`${s.listGroupSubtitleAccount}`}>{currentUser && currentUser.email && currentUser.email}</p>
      <ListGroupItem className={`${s.listGroupItemAccount} mt-3`}>
        <img src={settingsIcon} alt="settings" className={"mr-2"} /> Settings
      </ListGroupItem>
      <ListGroupItem className={`${s.listGroupItemAccount} mt-2`}>
        <a href="/#/app/profile">
          <img src={accountIcon} alt="settings" className={"mr-2"} /> Account
        </a>
      </ListGroupItem>
      <ListGroupItem className={`${s.listGroupItemAccount} mt-2 mb-3`} onClick={() => doLogout()}>
        <img src={logoutIcon} alt="settings" className={"mr-2"} /> Log out
      </ListGroupItem>
    </ListGroup>
  );
}

export default MessagesDemo;
