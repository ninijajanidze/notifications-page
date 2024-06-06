
import { useState } from "react";
import data from "./data.json";
import Notification from "./components/Notification";
function App() {
  const [notifications, setNotifications] = useState(data);
  const notificationCounter = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  return (
    <div className="pt-[24px] px-[16px] pb-[29px] w-[375px] 
    md:w-[730px] md:pt-[33px] md:pr-[27px] md:pb-0 md:pl-[30px]">
      <header className="flex justify-between items-center h-[25px] mb-[24px]
      md:h-[30px] md:mb-[31px]">
        <h2 className="font-extrabold text-light-black text-[20px]
        md:text-[24px]">Notifications</h2>
         <span className="mr-[74px] bg-dark-blue px-[11px] text-[16px] font-extrabold text-white rounded-[6px]
         md:mr-[356px]">{notificationCounter}</span>
        <p className="mt-[4px] text-dark-gray text-[14px] font-medium cursor-pointer md:text-[16px]"
        onClick={() => {
          const newNotifications = notifications.map((notification) => {
            return {...notification, isRead: true};
          });
          setNotifications(newNotifications);
        }}
        >
          Mark all as read</p>
      </header>

      <main className="flex flex-col gap-[10px] md:gap-[8px] md:w-[670px]"> 
      {notifications.map((notification) => {
        return (
          <Notification 
            key={notification.id} 
            notification={notification}
            notifications={notifications}
            setNotifications={setNotifications} 
          />
        )
      })}
      </main>
    </div>
  );
}

export default App;

