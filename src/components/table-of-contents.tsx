"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DeveloperCard } from "./developer-card";

interface TableOfContentsProps {
  items: {
    title: string;
    id: string;
  }[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers = new Map();

    const callback = (entries: IntersectionObserverEntry[]) => {
      // Find all intersecting entries
      const intersectingEntries = entries.filter(entry => entry.isIntersecting);
      
      if (intersectingEntries.length > 0) {
        // Sort by their distance from the top of the viewport
        const closestToTop = intersectingEntries.reduce((prev, curr) => {
          return (Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top)) ? curr : prev;
        });
        
        setActiveId(closestToTop.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-80px 0% -50% 0%",
      threshold: [0, 0.1, 0.5, 1.0],
    });

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      // Force first item if at the very top
      if (window.scrollY < 120) {
        setActiveId(items[0].id);
        return;
      }
      
      // Force last item if at the very bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveId(items[items.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  return (
    <div className="sticky top-24 h-fit max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 scrollbar-none flex flex-col justify-between gap-12">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#605A57]/60 mb-6">On This Page</p>
        <ul className="space-y-4 text-[13px] font-medium text-[#605A57]">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={cn(
                  "block transition-all duration-300 hover:text-[#37322F]",
                  activeId === item.id 
                    ? "text-[#37322F] translate-x-1" 
                    : "text-[#605A57]"
                )}
              >
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "h-1 w-1 rounded-full transition-all duration-300",
                    activeId === item.id ? "bg-[#37322F] scale-100" : "bg-transparent scale-0"
                  )} />
                  {item.title}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 pt-4 border-t border-[#E0DEDB]/60">
        <DeveloperCard />
      </div>
    </div>
  );
}
