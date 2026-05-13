"use client";

import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { FileCode } from "lucide-react";
import { CopyButton } from "./copy-button";

interface ComponentPreviewClientProps {
  preview: React.ReactNode;
  code: string;
  filePath: string;
  highlightedCode: React.ReactNode;
}

export const ComponentPreviewClient = ({ 
  preview, 
  code, 
  filePath, 
  highlightedCode 
}: ComponentPreviewClientProps) => {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="group relative my-12 flex flex-col space-y-4">
      <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="relative w-full">
        <div className="flex items-center justify-between pb-3">
          <Tabs.List className="flex items-center gap-6 border-b border-slate-800 bg-transparent p-0">
            {["preview", "code"].map((tab) => (
              <Tabs.Trigger
                key={tab}
                value={tab}
                className="relative h-9 bg-transparent px-1 pb-3 pt-2 font-medium text-slate-400 transition-colors hover:text-white data-[state=active]:text-white capitalize"
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500"
                  />
                )}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>
        
        <div className="mt-2">
          {activeTab === "preview" && (
            <Tabs.Content 
              value="preview" 
              forceMount
              className="relative rounded-xl border border-slate-800 bg-slate-950/50 p-12 flex items-center justify-center min-h-[400px] overflow-hidden backdrop-blur-sm shadow-2xl focus-visible:outline-none"
            >
              <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
              <div className="relative z-10 transition-all duration-500 hover:scale-105">
                {preview}
              </div>
            </Tabs.Content>
          )}
          
          {activeTab === "code" && (
            <Tabs.Content value="code" forceMount className="focus-visible:outline-none">
              <div className="relative flex flex-col rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-800">
                    <FileCode className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 tracking-tight">
                    {filePath}
                  </span>
                </div>
                <CopyButton value={code} className="h-8 w-8 bg-slate-900/50 border-slate-800 hover:bg-slate-800 text-slate-400" />
              </div>
              
              <div className="relative max-h-[500px] overflow-auto p-6 text-sm font-mono leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
                <div className="flex">
                  <div className="mr-6 flex flex-col text-right text-slate-700 select-none min-w-[1.5rem]">
                    {code.split("\n").map((_, i) => (
                      <span key={i} className="block">{i + 1}</span>
                    ))}
                  </div>
                  <div className="flex-1">
                     {highlightedCode}
                  </div>
                </div>
              </div>
            </div>
            </Tabs.Content>
          )}
        </div>
      </Tabs.Root>
    </div>
  );
};
