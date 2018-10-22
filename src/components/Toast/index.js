import React from 'react';
import { toast as callToast } from 'react-toastify';
import { ToastContainer } from 'components';

const NOTIFICATION = 'NOTIFICATION';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const TRANSACTION = 'TRANSACTION';

const Toast = (type, message, link, onClose) => {
  let icon;
  let messageType;
  if (type === NOTIFICATION) {
    icon = ['fas', 'info-circle'];
    messageType = callToast.TYPE.INFO;
  }
  if (type === SUCCESS) {
    icon = ['far', 'check-circle'];
    messageType = callToast.TYPE.SUCCESS;
  }
  if (type === ERROR) {
    icon = ['fas', 'exclamation-triangle'];
    messageType = callToast.TYPE.ERROR;
  }
  if (type === TRANSACTION) {
    icon = ['fas', 'ellipsis-h'];
    messageType = callToast.TYPE.WARNING;
  }

  return callToast(
    <ToastContainer.BaseToast icon={icon} message={message} link={link} />,
    { type: messageType, onClose }
  );
};

Toast.TYPE = {
  NOTIFICATION: NOTIFICATION,
  SUCCESS: SUCCESS,
  ERROR: ERROR,
  TRANSACTION: TRANSACTION
};

export default Toast;
