

import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({ notification, notifications, setNotifications }) {
  return (
    <div
      className={`${!notification.isRead ? "bg-light-blue" : "bg-white"} cursor-pointer w-[343px] p-[16px] md:w-[670px] md:pt-[20px] md:pl-[20px] md:pb-[18px]`}
      onClick={() => {
        const newNotifications = notifications.map(currentMessage => {
          if (notification.id === currentMessage.id) {
            return { ...currentMessage, isRead: true };
          }
          return currentMessage;
        });
        setNotifications(newNotifications);
      }}
    >
      <div className="flex items-center">
        <img
          className="w-[39px] h-[39px] mr-[13px] md:w-[45px] md:h-[45px] md:mr-[19px]"
          src={notification.profilePicture}
          alt="profile picture"
        />
        <div>
          <span className="mr-[6px] text-light-black text-[14px] font-extrabold md:text-[16px]">
            {notification.username}
          </span>
          <span className="text-[14px] font-medium text-dark-gray md:text-[16px]">
            {notification.action}
          </span>
          {notification.post ? (
            <span className="ml-[6px] text-[14px] font-bold text-dark-gray md:text-[16px]">
              {notification.post}
            </span>
          ) : null}
          {notification.groupName ? (
            <span className="ml-[6px] text-[14px] font-bold text-dark-blue md:text-[16px]">
              {notification.groupName}
            </span>
          ) : null}
          {!notification.isRead ? (
            <div className="ml-[6px] bg-light-red w-[8px] h-[8px] rounded-[50%] inline-block"></div>
          ) : null}
          <p className="mt-[4px] text-[14px] font-medium text-light-gray md:text-[16px]">
        {notification.time}
          </p> 
        </div>
      </div>
      {notification.text ? (
        <p className="mt-[12px] ml-[52px] text-[14px] font-medium text-dark-gray w-[263px] h-[138px] border-solid border-[1px] border-gray-200 p-[16px] hover:bg-sky-blue md:text-[16px] md:w-[566px] md:h-[97px] md:mt-[13px] md:mb-0 md:ml-[64px] md:p-[12px]">
          {notification.text}
        </p>
      ) : null}
        {notification.userPicture ? (
            <img
              className="mt-[-50px] ml-[272px] w-[39px] h-[39px] md:w-[45px] md:h-[45px] md:ml-[588px]"
              src={notification.userPicture}
              alt="user picture"
            />
          ) : null}
    </div>
  );
}

Notification.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
    profilePicture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    post: PropTypes.string,
    groupName: PropTypes.string,
    userPicture: PropTypes.string,
    time: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isRead: PropTypes.bool.isRequired,
      profilePicture: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      post: PropTypes.string,
      groupName: PropTypes.string,
      userPicture: PropTypes.string,
      time: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ).isRequired,
  setNotifications: PropTypes.func.isRequired,
};


















