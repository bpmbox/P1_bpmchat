import React, { useState } from "react";
import cx from "classnames";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import {
  DashboardThemes,
  SidebarTypes,
  NavbarTypes,
} from "../../reducers/layout";
import {
  changeTheme,
  changeThemeColor,
  changeSidebarColor,
  changeNavbarColor,
  navbarTypeToggle,
  sidebarTypeToggle,
} from "../../actions/layout";
import CustomColorPicker from "../ColorPicker";
import config from "../../config";

import themeImg from "../../images/theme-change-img.svg";

import Widget from "../Widget";

import s from "./Helper.module.scss"; // eslint-disable-line

const Helper = () => {

  const dispatch = useDispatch();
  const sidebarColor = useSelector((store) => store.layout.sidebarColor);
  const navbarColor = useSelector((store) => store.layout.navbarColor);
  const navbarType = useSelector((store) => store.layout.navbarType);
  const sidebarType = useSelector((store) => store.layout.sidebarType);
  const themeColor = useSelector((store) => store.layout.themeColor);
  const dashboardTheme = useSelector((store) => store.layout.dashboardTheme);

  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened(prevState => !prevState)
  };

  const changeTheme = (state) => {
    // this.props.dispatch(changeTheme(state));
    dispatch(changeSidebarColor(state));
    if (state === 'dark') {
      dispatch(sidebarTypeToggle("solid"));
    }
  };

  const navbarStateToggle = (state) => {
    dispatch(navbarTypeToggle(state));
  };

  const sidebarStateToggle = (state) => {
    dispatch(sidebarTypeToggle(state));
    if (state === 'transparent') {
      dispatch(changeSidebarColor("light"));
    }
  };

  const updateColor = (value) => {
    dispatch(changeNavbarColor(value));
  };

  const updateThemeColor = (value) => {
    dispatch(changeTheme(value));
    dispatch(changeThemeColor(value));
  };

  return (
    <div className={cx(s.themeHelper, { [s.themeHelperOpened]: isOpened })}>
      <div
        className={`${s.themeHelperBtn} helper-button`}
        onClick={toggle}
      >
        <img src={themeImg} alt="theme-color-change" className={"mr-1"} width={"30px"}/>
      </div>
      <Widget className={`${s.themeHelperContent} mb-0 rounded-0`}>
        <div className={s.helperHeader}>
          <h5 className="m-0 fw-bold">Theme</h5>
        </div>

        <div className="theme-settings">
          <h6 className="navbar-type-switcher mb-3 fw-semi-bold">
            Navbar Type
          </h6>
          <div className="form-group row">
            <div className="abc-radio">
              <input
                onChange={() => navbarStateToggle(NavbarTypes.STATIC)}
                type="radio"
                checked={navbarType === NavbarTypes.STATIC}
                name="navbar-type"
                id="navbar_static"
              />
              <label htmlFor="navbar_static">Static</label>
            </div>

            <div className="abc-radio">
              <input
                onChange={() => navbarStateToggle(NavbarTypes.FLOATING)}
                type="radio"
                checked={navbarType === NavbarTypes.FLOATING}
                name="navbar-type"
                id="navbar_floating"
              />
              <label htmlFor="navbar_floating">Floating</label>
            </div>
          </div>

          <h6 className="mt-4 navbar-color-picker mb-3 fw-semi-bold">
            Navbar Color
          </h6>
          <CustomColorPicker
            colors={config.app.colors}
            activeColor={navbarColor}
            updateColor={updateColor}
            customizationItem={"navbar"}
          />

          <h6 className="mt-4 sidebar-type-switcher mb-3 fw-semi-bold">
            Sidebar Type
          </h6>
          <div className="form-group row">
            <div className="abc-radio">
              <input
                type="radio"
                onChange={() => sidebarStateToggle(SidebarTypes.TRANSPARENT)}
                checked={sidebarType === SidebarTypes.TRANSPARENT ? true : ""}
                name="sidebar-type"
                id="sidebar_transparent"
              />
              <label htmlFor="sidebar_transparent">Transparent</label>
            </div>

            <div className="abc-radio">
              <input
                type="radio"
                onChange={() => sidebarStateToggle(SidebarTypes.SOLID)}
                checked={sidebarType === SidebarTypes.SOLID ? true : ""}
                name="sidebar-type"
                id="sidebar_solid"
              />
              <label htmlFor="sidebar_solid">Solid</label>
            </div>
          </div>

          <h6 className="mt-4 sidebar-color-picker mb-3 fw-semi-bold">
            Sidebar Color
          </h6>
          <CustomColorPicker
            colors={config.app.colors}
            activeColor={sidebarColor}
            updateColor={changeTheme}
            customizationItem={"sidebar"}
          />

          <h6 className="mt-4 navbar-color-picker mb-3 fw-semi-bold">
            Theme Color
          </h6>
          <CustomColorPicker
            colors={config.app.themeColors}
            activeColor={themeColor}
            updateColor={updateThemeColor}
            customizationItem={"theme"}
          />
        </div>
        <div className="mt-5">
          <Button
            href="https://flatlogic.com/admin-dashboards/sing-app-react"
            target="_blank"
            className="btn-block fs-mini purchase-button"
            style={{ backgroundColor: "#323232" }}
          >
            <span className="text-white">Purchase</span>
          </Button>
          <Button
            href="http://demo.flatlogic.com/sing-app/documentation/"
            target="_blank"
            className="btn-block fs-mini text-white mt-3"
            color="warning"
          >
            Documentation
          </Button>
        </div>
      </Widget>
    </div>
  );
}

export default Helper;
