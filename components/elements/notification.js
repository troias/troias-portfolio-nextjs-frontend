import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';


import classes from './notification.module.css';

function Notification(props) {
  const { title, message, status, submitting } = props;

 

  const [_document, set_document] = useState(null)



  useEffect(() => set_document(document), [])



  let statusClasses = '';

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (submitting === false) {
    statusClasses = classes.hidden;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

 

  return ReactDOM.createPortal(( <div className={cssClasses}><h2>{title}</h2><p>{message}</p> </div>), document.getElementById("myportal") )



}

export default Notification;