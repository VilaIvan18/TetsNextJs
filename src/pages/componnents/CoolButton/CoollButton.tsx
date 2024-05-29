import { useEffect, useState } from "react";

interface CoolButton {
  openAllNotifications: () => void;
}

export default function CoolButton({ openAllNotifications }: CoolButton) {
  const [buttonOpacity, setButtonOpacity] = useState(true);

  useEffect(() => {
    const changeOpacity = setInterval(() => {
      setButtonOpacity(!buttonOpacity);
    }, 1000);
    return () => {
      clearInterval(changeOpacity);
    };
  }, [buttonOpacity]);

  return (
    <div>
      <button
        onClick={() => openAllNotifications()}
        className={`opacity-[0.5px] bg-mainColor text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg ${
          buttonOpacity ? "opacity-100" : "opacity-30"
        }`}
      >
        Click this Button!!
      </button>
    </div>
  );
}
