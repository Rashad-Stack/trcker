import React, { useState } from "react";
import DesktopAside from "./DesktopAside";
import MobileAside from "./MobileAside";

export default function Aside() {
  const [isShown,setIsShown]=useState(false)
  return (
    <aside>
      <DesktopAside isShown={isShown} />
      <MobileAside isShown={isShown} setIsShown={setIsShown} />
    </aside>
  );
}
