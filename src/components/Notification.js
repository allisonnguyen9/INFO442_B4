import React, { useState } from 'react';

function Notification() {
  const [isVisible, setIsVisible] = useState(true);

  const handleNotificationClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="notification-overlay" onClick={handleNotificationClick}>
          <div className="notification">
            <p>Item claimed successfully!</p>
            <p>Please coordinate pick up with CONTACT NAME</p>
            </div>
        </div>
      )}
    </>
  );
}

export default Notification;
