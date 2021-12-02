import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { Collapse, Badge } from "reactstrap";
import { Route } from "react-router";
import classnames from "classnames";
import {
  closeSidebar,
} from "../../../actions/navigation";

import s from "./LinksGroup.module.scss";

const LinksGroup = (props) => {
  /* eslint-disable */
  const {
    header,
    link = '',
    childrenLinks = null,
    iconName,
    className = '',
    badge,
    label = '',
    activeItem = '',
    isHeader = false,
    index,
    deep = 0,
    onActiveSidebarItemChange,
    labelColor,
    exact = true,
    target,
    onClick,
    children
  } = props;

  const sidebarColor = useSelector((store) => store.layout.sidebarColor);
  const dispatch = useDispatch();
  const [headerLinkWasClicked, setHeaderLinkWasClicked] = useState(true);
  /* eslint-enable */
  const togglePanelCollapse = (link) => {
    onActiveSidebarItemChange(link);
    setHeaderLinkWasClicked(prevState => !prevState || (activeItem && !activeItem.includes(index)) )
  }

  const closeSidebarOnClick = () => {
    if (window.innerWidth <= 768) {
      dispatch(closeSidebar())
    }
  }

  const isOpen = activeItem && activeItem.includes(index) && headerLinkWasClicked;

  if (!link) {
    return (
      <li
        className={classnames("link-wrapper", s.headerLink, className)}
        onClick={onClick}
      >
        <NavLink
          to={link}
          exact={exact}
          target={target}
        >
          {children}
          {header}{" "}
          {label && (
            <sup className={`${s.headerLabel} ${s.headerUpdate} bg-${labelColor || "warning"}`}>
              {label}
            </sup>
          )}
          {badge && (
            <Badge className={s.badge} pill>
              9
            </Badge>
          )}
        </NavLink>
      </li>
    );
  }

  if (!childrenLinks) {
    if (isHeader) {
      return (
        <li
          className={classnames(
            "link-wrapper",
            s.headerLink,
            className
          )}
          onClick={() => {
            closeSidebarOnClick();
            togglePanelCollapse(link)
          }}
        >
          <NavLink
            to={link}
            activeClassName={s.headerLinkActive}
            exact={exact}
            target={target}
          >
            {children}
            {header}{" "}
            {label && (
              <sup
                className={`${s.headerLabel} ${s.headerUpdate} bg-${labelColor || "warning"}`}
              >
                {label}
              </sup>
            )}
            {badge && (
              <Badge className={s.badge} pill>
                9
              </Badge>
            )}
          </NavLink>
        </li>
      );
    }
    return (
      <li>
        <NavLink
          to={link}
          activeClassName={s.headerLinkActive}
          style={{ paddingLeft: `${60 + 10 * (deep - 1)}px` }}
          onClick={e => {
            // able to go to link is not available(for Demo)
            if (link.includes("menu")) {
              e.preventDefault();
            }
            onClick();
          }}
          exact={exact}
        >
          {header}{" "}
          {label && (
            <sup
              className={`${s.headerLabel} bg-${labelColor ||
                "warning"}`}
            >
              {label}
            </sup>
          )}
        </NavLink>
      </li>
    );
  }

  /* eslint-disable */
  return (
    <Route
      path={link}
      children={params => {
        const { match } = params;
        return (
          <li
            className={classnames(
              "link-wrapper",
              { [s.headerLink]: isHeader },
              className
            )}
          >
            <a
              className={classnames(
                { [s.headerLinkActive]: match },
                { [s.collapsed]: isOpen },
                "d-flex"
              )}
              onClick={() => togglePanelCollapse(link)}
            >
              {isHeader ? (
                <>
                  {children}
                </>
              ) : null}
              {header}{" "}
              {label && (
                <sup
                  className={`${s.headerLabel} ${
                    s.headerNode
                  } ml-1 bg-${labelColor || "warning"}`}
                >
                  {label}
                </sup>
              )}
              { isOpen ?
                  <i className={`fa fa-angle-down fa-rotate-270 ${s.activeCaret}`} aria-hidden="true" /> :
                  <i className={`fa fa-angle-down fa-rotate-270 ${s.caret}`} aria-hidden="true" />
              }
            </a>
            {/* eslint-enable */}
            <Collapse className={s.panel} isOpen={isOpen}>
              <ul>
                {childrenLinks &&
                  childrenLinks.map((child, ind) => (
                    <LinksGroup
                      onActiveSidebarItemChange={onActiveSidebarItemChange}
                      activeItem={activeItem}
                      header={child.header}
                      link={child.link}
                      index={child.index}
                      childrenLinks={child.childrenLinks}
                      deep={deep + 1}
                      key={ind} // eslint-disable-line
                      onClick={() => {
                        closeSidebarOnClick()
                        if (child.onClick) child.onClick()
                      }}
                    />
                  ))}
              </ul>
            </Collapse>
          </li>
        );
      }}
    />
  );
}

export default LinksGroup;
