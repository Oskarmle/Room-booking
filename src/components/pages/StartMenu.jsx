import React from "react";
import "../../index.css";

export default function StartMenu() {
  return (
    <div className="startMenu">
      <main className="startMenuBox">
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="password" />
      </main>
    </div>
  );
}
