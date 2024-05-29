"use client";
import { useEffect, useState } from "react";

import CoolButton from "../componnents/CoolButton/CoollButton";

import { MessageData } from "@/src/pages/interface";
import { useRouter } from "next/navigation";

export const HomePage = () => {
  const [isWelcomeUser, setIsWelcomeUser] = useState(false);
  const [curMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);
  const router = useRouter();

  const messageData: MessageData[] = [
    {
      message: "This is detais when you can see about this TestApp",
      linkText: "About",
      route: "about",
    },
    {
      message: "This is Products  page were you can chose Product",
      linkText: "Products",
      route: "/products",
    },
  ];

  function openAllNotifications() {
    setIsOpenNotifications(true);
    if (isOpenNotifications) {
      setCurrentMessageIndex(0);
    }
  }
  function moveNotifications() {
    setCurrentMessageIndex(curMessageIndex + 1);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsWelcomeUser(true);
    }, 1000);
  });

  return (
    <>
      <div className="w-full max-w-[1440px] border-solid border-emerald-500 relative ">
        <div className="w-[60px] bg-decorationColor absolute h-[40px] bottom-[-40px]"></div>
        <div className="w-[60px] bg-decorationColor h-[40px] absolute bottom-[-40px] right-0"></div>
        <div className="flex flex justify-between bg-mainColor w-full h-[300px] p-4">
          <nav>
            <ul className="flex gap-[10px] relative">
              {messageData.map((it, i) => (
                <div className="" key={i}>
                  <div
                    onClick={() => router.push(it.route)}
                    className="cursor-pointer"
                  >
                    <li className="text-welcomeUserMessageColor">
                      {it.linkText}
                    </li>
                  </div>
                  {i === curMessageIndex &&
                  isOpenNotifications &&
                  curMessageIndex !== messageData.length ? (
                    <div className="flex-col gap-[10px] w-[300px] bg-white absolute top-[100px] p-4">
                      <div className="">{it.message}</div>

                      <button
                        onClick={() => moveNotifications()}
                        className="bg-decorationColor p-2 text-white"
                      >
                        next
                      </button>
                      <div className="absolute w-[10px] bg-decorationColor h-[40px] top-[-40px]"></div>
                    </div>
                  ) : null}
                </div>
              ))}
            </ul>
          </nav>
          <div className="w-full bg-white max-w-[190px] max-h-[30px] rounded-[25px]  text-center">
            Logo
          </div>
          <div className="text-welcomeUserMessageColor">NEXT JS TEST APP</div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] border-solid border-emerald-500 max-h-screen">
        <div className="flex flex justify-center bg-secondColor w-full h-[500px] p-4">
          <div
            className={`text-4xl text-welcomeUserMessageColor font-bold ease-in-out ${
              isWelcomeUser
                ? "translate-y-[100px] duration-700 ease-in-out scale-110"
                : "translate-y-[3110px] duration-700 ease-in-out scale-12"
            }`}
          >
            Welcome User!!
          </div>
          {isWelcomeUser ? (
            <div className="absolute bottom-[20%]">
              <CoolButton openAllNotifications={openAllNotifications} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
