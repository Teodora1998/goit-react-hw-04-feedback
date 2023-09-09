import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);

  const showNotification = () => {
    setIsNotificationVisible(true);
  };
  const hideNotification = () => {
    setIsNotificationVisible(false);
  };
  
  useEffect(() => {
    if (isNotificationVisible) {
      const timer = setTimeout(hideNotification, 2000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(showNotification, 1000);
      return () => clearTimeout(timer);
    }
  }, [isNotificationVisible]);
  
  return isNotificationVisible && <p className={css.notification}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
