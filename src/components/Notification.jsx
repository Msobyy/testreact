import React, { useState, useEffect } from "react";
import { generateToken, onMessageListener } from "../firebase.config";

const Notification = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });
  const notify = () => <ToastDisplay />;
  function ToastDisplay() {
    console.log(notification?.title);
    console.log(notification?.body);
  }
  useEffect(() => {
    if (notification?.title) {
      notify();
    }
  }, [notification]);
  generateToken();
  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("failed: ", err));
  return (
    <div style={{color:"red"}}>
        HLLLLLO
    </div>
  )
};

export default Notification;
