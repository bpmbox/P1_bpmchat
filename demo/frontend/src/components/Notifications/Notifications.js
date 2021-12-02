import React, { useState } from "react";
import NotificationsDemo from "./notifications-demo/Notifications";
import NewNotificationsDemo from "./notifications-demo/NewNotifications";
import MessagesDemo from "./notifications-demo/Messages";
import ProgressDemo from "./notifications-demo/Progress";
import AccountDemo from './notifications-demo/Account'

import s from "./Notifications.module.scss";

const Notifications = () => {

  const [notificationsTabSelected, setNotificationsTabSelected] = useState(1);
  const [newNotifications, setNewNotifications] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  const changeNotificationsTab = (tab) => {
    setNotificationsTabSelected(tab);
    setNewNotifications(null)
  };

  const loadNotifications = () => {
    setIsLoad(true);
    setTimeout(() => {
      changeNotificationsTab(1);
      setNewNotifications(<NewNotificationsDemo />);
      setIsLoad(false);
    }, 1500)
  }

  let notificationsTab;

  switch (notificationsTabSelected) {
    case 1:
      notificationsTab = <NotificationsDemo />;
      break;
    case 2:
      notificationsTab = <MessagesDemo />;
      break;
    case 3:
      notificationsTab = <ProgressDemo />;
      break;
    case 4:
      notificationsTab = <AccountDemo />;
      break;
    default:
      notificationsTab = <NotificationsDemo />;
      break;
  }
  return (
    <section className={`${notificationsTabSelected === 4 ? s.notificationsAccount : s.notifications} card navbar-notifications`}>
      {newNotifications || notificationsTab}
    </section>
  );
}

export default Notifications;
