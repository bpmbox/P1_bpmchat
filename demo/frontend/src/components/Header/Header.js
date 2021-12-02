import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  InputGroupAddon,
  InputGroup,
  Input,
  Form,
  NavItem,
  NavLink,
} from "reactstrap";
import cx from "classnames";
import { NavbarTypes } from "../../reducers/layout";
import Notifications from "../Notifications";
import { logoutUser } from "../../actions/auth";
import chroma from "chroma-js";
import {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  changeActiveSidebarItem,
} from "../../actions/navigation";

import search from "../../images/search.svg";
import notify from "../../images/notify.svg";
import lightNotify from "../../images/light-notify.svg";
import messages from "../../images/messages.svg";
import lightMessages from "../../images/messages-filled.svg";
import arrowActive from '../../images/Arrow 6.svg'
import arrowUnactive from '../../images/Arrow 5.svg'

// light navbar icons
import messagesLightTheme from '../../images/theme-icons/light-navbar/message.svg'
import notifyLightTheme from '../../images/theme-icons/light-navbar/notification.svg'
import lightSearch from '../../images/theme-icons/light-navbar/search.svg'

import s from "./Header.module.scss";

const Header = ({ openUsersList }) => {

  const dispatch = useDispatch();
  const location = useLocation();
  const sidebarOpened = useSelector((store) => store.navigation.sidebarOpened);
  const sidebarStatic = useSelector((store) => store.navigation.sidebarStatic);
  const navbarType = useSelector((store) => store.layout.navbarType);
  const navbarColor = useSelector((store) => store.layout.navbarColor);
  const currentUser = useSelector((store) => store.auth.currentUser);

  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [notificationsTabSelected, setNotificationsTabSelected] = useState(1);
  const [focus, setFocus] = useState(false);
  const [arrowImg, setArrowImg] = useState(arrowUnactive);

  const toggleFocus = () => {
    setFocus(prevState => !prevState);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(prevState => !prevState);
  }

  const toggleMessages = () => {
    setMessagesOpen(prevState => !prevState);
  }

  const toggleAccount = () => {
    setAccountOpen(prevState => !prevState);
  }

  const doLogout = () => {
    dispatch(logoutUser());
  }

  const changeArrowImg = () => {
    setArrowImg(arrowActive)
  }

  const changeArrowImgOut = () => {
    setArrowImg(arrowUnactive)
  }

  // collapse/uncolappse
  const switchSidebar = () => {
    if (sidebarOpened) {
      dispatch(closeSidebar());
      dispatch(changeActiveSidebarItem(null));
    } else {
      const paths = location.pathname.split("/");
      paths.pop();
      dispatch(openSidebar());
      dispatch(changeActiveSidebarItem(paths.join("/")));
    }
  }

  // tables/non-tables
  const toggleSidebar = () => {
    dispatch(toggleSidebar());
    if (sidebarStatic) {
      localStorage.setItem("staticSidebar", "false");
      dispatch(changeActiveSidebarItem(null));
    } else {
      localStorage.setItem("staticSidebar", "true");
      const paths = location.pathname.split("/");
      paths.pop();
      dispatch(changeActiveSidebarItem(paths.join("/")));
    }
  }

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  }

  const user = currentUser;
  const avatar = user && user.avatar && user.avatar.length >=0 && user.avatar[0] && user.avatar[0].publicUrl;
  const firstUserLetter = ((user && user.firstName) || (user && user.email) || "P")[0].toUpperCase();

  return (
    <Navbar
      className={`${s.root} ${cx({[s.rootLight]: navbarColor === '#FFFFFF'})} d-print-none ${
        navbarType === NavbarTypes.FLOATING ? s.navbarFloatingType : ""
      }`}
      style={{ zIndex: !openUsersList ? 100 : 0, backgroundColor: navbarColor }}
    >
      <NavItem className={`${s.toggleSidebarNav} d-md-none d-flex mr-2`}>
        <NavLink
          className="ml-2 pr-4 pl-3"
          id="toggleSidebar"
          onClick={toggleSidebar}
        >
          <i
            className={`la la-bars text-color`}
          />
        </NavLink>
      </NavItem>
      <NavItem className={"d-md-down-block d-md-none ml-auto"}>
        <img
          src={navbarColor === '#FFF' ? lightSearch : search}
          alt="search"
          width="24px"
          height="23px"
          style={{ marginRight: 12 }}
        />
      </NavItem>
      <Form className={`d-md-down-none ml-auto`} inline>
        <InputGroup
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          className={`${cx("input-group-no-border", { focus: !!focus })}`}
        >
          <Input
            id="search-input"
            placeholder="Search"
            // eslint-disable-next-line no-useless-computed-key
            className={`${cx({ focus: !!focus, ['form-control-light']: navbarColor === "#FFFFFF", [s.headerSearchInput]: navbarColor === '#323232', [s.headerSearchInputLight]: navbarColor === '#FFFFFF'})}`}
            style={{ borderBottomLeftRadius: 4, borderTopLeftRadius: 4 }}
          />

          <InputGroupAddon
              addonType={"prepend"}
              // eslint-disable-next-line no-useless-computed-key
              className={`${cx({['input-group-prepend-light']: 
              navbarColor === "#FFFFFF" })}`}
          >
            <img
              src={search}
              alt="search"
              width="24px"
              height="23px"
              style={{ marginRight: 12 }}
            />
          </InputGroupAddon>
        </InputGroup>
      </Form>
      <Nav>
        <Dropdown
          nav
          isOpen={notificationsOpen}
          toggle={toggleNotifications}
          id="basic-nav-dropdown"
          className={`${s.notificationsMenu}`}
        >
          <DropdownToggle
            nav
            className={`${
              chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""
            }`}
            style={{ marginLeft: 20 }}
          >
            {notificationsOpen ? (
              <img
                src={lightNotify}
                alt="notify"
                width="24px"
                height={"24px"}
              />
            ) : (
              <>
                <img src={navbarColor === "#FFFFFF" ? notifyLightTheme: notify} alt="notify" width="24px" height={"24px"} />
                <i
                  className={`fa fa-circle text-danger mb-2 ${s.circleStyle}`}
                />
              </>
            )}
          </DropdownToggle>
          <DropdownMenu
            right
            className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}
          >
            <Notifications />
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          isOpen={messagesOpen}
          toggle={toggleMessages}
          nav
          className={`${s.notificationsMenu}`}
        >
          <DropdownToggle
            nav
            className={`${
              chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""
            }`}
            style={{ marginLeft: 20 }}
          >
            {messagesOpen ? (
              <img
                src={lightMessages}
                alt="notify"
                width="24px"
                height={"24px"}
              />
            ) : (
              <>
                <img
                  src={navbarColor === "#FFFFFF" ? messagesLightTheme : messages}
                  alt="email"
                  width="24px"
                  height={"24px"}
                />
                <i
                  className={`fa fa-circle text-success mb-2 ${s.emailStyle}`}
                />
              </>
            )}
          </DropdownToggle>
          <DropdownMenu
            right
            className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}
          >
            <Notifications notificationsTabSelected={2} />
          </DropdownMenu>
        </Dropdown>
        <Dropdown nav className={`${s.notificationsMenu}`} isOpen={accountOpen}
                  toggle={toggleAccount}>
          <DropdownToggle
            nav
            className={`${
              chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""
            }`}
            style={{ marginLeft: 20 }}
          >
            <span
              className={`${s.avatar} rounded-circle thumb-sm float-left mr-2`}
            >
              {avatar ? (
                <img src={avatar} alt="..." title={user && (user.firstName || user.email)} />
              ) : (
                <span>{firstUserLetter}</span>
              )}
            </span>
          </DropdownToggle>
          <DropdownMenu
              right
              className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}
          >
            <Notifications notificationsTabSelected={4} />
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}

export default Header;

