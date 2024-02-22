import React, { useState } from 'react';

function Notification(props) {
  const [isVisible, setIsVisible] = useState(true);

  const handleNotificationClick = () => {
    setIsVisible(false);

    // props.handleClick();
  };

  return (
    <>
      {isVisible && (
        <div className="notification-overlay"> 
          <div className="notification">
            <p>Item claimed successfully!</p>
            <p>Please coordinate pick up with {props.contactNum}</p>
          </div>
            <button className='btn btn-dark blue-btn' onClick={handleNotificationClick}>Confirm</button>
        </div>
      )}
    </>
  );
}

export default Notification;
