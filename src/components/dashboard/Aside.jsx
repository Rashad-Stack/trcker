import React from "react";
import DesktopAside from "./DesktopAside";
import MobileAside from "./MobileAside";

export default function Aside() {
  return (
    <aside>
      <DesktopAside />
      <MobileAside />
    </aside>
  );
}
