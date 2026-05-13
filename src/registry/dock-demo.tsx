"use client";

import React from "react";
import { Home, Search, Settings, User, Bell } from "lucide-react";
import { Dock, DockIcon } from "./dock";

export const DockDemo = () => {
  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon>
          <Home className="h-full w-full text-white" />
        </DockIcon>
        <DockIcon>
          <Search className="h-full w-full text-white" />
        </DockIcon>
        <DockIcon>
          <Bell className="h-full w-full text-white" />
        </DockIcon>
        <DockIcon>
          <User className="h-full w-full text-white" />
        </DockIcon>
        <DockIcon>
          <Settings className="h-full w-full text-white" />
        </DockIcon>
      </Dock>
    </div>
  );
};
