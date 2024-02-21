import React, { useState, useEffect } from 'react';

function Notification() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && <div className="notification-overlay"><div className="notification">Item claimed successfully!</div></div>}
    </>
  );
}

export default Notification;
