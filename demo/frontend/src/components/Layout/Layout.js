
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';
import Header from '../Header';
import { DashboardThemes } from "../../reducers/layout";
import Helper from '../Helper';
import Sidebar from '../Sidebar';
import { openSidebar, closeSidebar, toggleSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';
import BreadcrumbHistory from '../BreadcrumbHistory';


import UsersFormPage from 'pages/CRUD/Users/form/UsersFormPage';
import UsersTablePage from 'pages/CRUD/Users/table/UsersTablePage';
import UsersViewPage from 'pages/CRUD/Users/page/UsersViewPage';

import BooksFormPage from 'pages/CRUD/Books/form/BooksFormPage';
import BooksTablePage from 'pages/CRUD/Books/table/BooksTablePage';
import BooksViewPage from 'pages/CRUD/Books/page/BooksViewPage';

import TagsFormPage from 'pages/CRUD/Tags/form/TagsFormPage';
import TagsTablePage from 'pages/CRUD/Tags/table/TagsTablePage';
import TagsViewPage from 'pages/CRUD/Tags/page/TagsViewPage';

import Table_4FormPage from 'pages/CRUD/Table_4/form/Table_4FormPage';
import Table_4TablePage from 'pages/CRUD/Table_4/table/Table_4TablePage';
import Table_4ViewPage from 'pages/CRUD/Table_4/page/Table_4ViewPage';

import Table_5FormPage from 'pages/CRUD/Table_5/form/Table_5FormPage';
import Table_5TablePage from 'pages/CRUD/Table_5/table/Table_5TablePage';
import Table_5ViewPage from 'pages/CRUD/Table_5/page/Table_5ViewPage';



import ChangePasswordFormPage from 'pages/CRUD/ChangePassword/ChangePasswordFormPage';
import Dashboard from '../../pages/dashboard';
import { SidebarTypes } from '../../reducers/layout';

const Layout = () => {
  const sidebarOpened = useSelector((store) => store.navigation.sidebarOpened);
  const sidebarStatic = useSelector((store) => store.navigation.sidebarStatic);
  const dashboardTheme = useSelector((store) => store.layout.dashboardTheme);
  const sidebarType = useSelector((store) => store.layout.sidebarType);
  const sidebarColor = useSelector((store) => store.layout.sidebarColor);

  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      dispatch(toggleSidebar());
    } else if (window.innerWidth >= 768) {
      dispatch(openSidebar());
    }
  }

  const handleCloseSidebar = (e) => {
    if (e.target.closest("#sidebar-drawer") == null && sidebarOpened && window.innerWidth <= 768) {
      dispatch(toggleSidebar());
    }
  }

  const handleSwipe = (e) => {
    if ("ontouchstart" in window) {
      if (e.direction === 4) {
        dispatch(openSidebar());
        return;
      }
      if (e.direction === 2 && sidebarOpened) {
        dispatch(closeSidebar());
        return;
      }
    }
  }

  return (
    <div
      className={[
        s.root,
        !sidebarOpened ? s.sidebarClose : "",
        "flatlogic-one",
        `dashboard-${sidebarType === SidebarTypes.TRANSPARENT ? "light" : sidebarColor}`,
        `dashboard-${
          dashboardTheme !== "light" &&
          dashboardTheme !== "dark"
            ? dashboardTheme
            : ""
        }`,

      ].join(" ")}
      onClick={e => handleCloseSidebar(e)}
    >
      <Sidebar />
      <div className={s.wrap}>
        <Header />
        <Helper />
        <Hammer onSwipe={handleSwipe}>
          <main className={s.content}>
          <BreadcrumbHistory url={location.pathname} />
            <Switch>
              <Route path={"/app/dashboard"} exact component={Dashboard} />
              <Route path={"/app/profile"} exact component={UsersFormPage} />
              <Route path={"/app/password"} exact component={ChangePasswordFormPage} />

        
              <Route path={"/admin/users"} exact component={UsersTablePage} />
              <Route path={"/admin/users/new"} exact component={UsersFormPage} />
              <Route path={"/admin/users/:id/edit"} exact component={UsersFormPage} />
              <Route path={"/admin/users/:id"} exact component={UsersViewPage} />
        
              <Route path={"/admin/books"} exact component={BooksTablePage} />
              <Route path={"/admin/books/new"} exact component={BooksFormPage} />
              <Route path={"/admin/books/:id/edit"} exact component={BooksFormPage} />
              <Route path={"/admin/books/:id"} exact component={BooksViewPage} />
        
              <Route path={"/admin/tags"} exact component={TagsTablePage} />
              <Route path={"/admin/tags/new"} exact component={TagsFormPage} />
              <Route path={"/admin/tags/:id/edit"} exact component={TagsFormPage} />
              <Route path={"/admin/tags/:id"} exact component={TagsViewPage} />
        
              <Route path={"/admin/table_4"} exact component={Table_4TablePage} />
              <Route path={"/admin/table_4/new"} exact component={Table_4FormPage} />
              <Route path={"/admin/table_4/:id/edit"} exact component={Table_4FormPage} />
              <Route path={"/admin/table_4/:id"} exact component={Table_4ViewPage} />
        
              <Route path={"/admin/table_5"} exact component={Table_5TablePage} />
              <Route path={"/admin/table_5/new"} exact component={Table_5FormPage} />
              <Route path={"/admin/table_5/:id/edit"} exact component={Table_5FormPage} />
              <Route path={"/admin/table_5/:id"} exact component={Table_5ViewPage} />
        

            </Switch>
            <footer className={s.contentFooter}>
demo3 - Made by <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank">Flatlogic</a>
            </footer>
          </main>
        </Hammer>
      </div>
    </div>
  );
}

export default Layout;
