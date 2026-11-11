"use client";

import { useEffect } from "react";

let greeted = false;

/** A small hello for anyone who opens the browser console. */
const DevGreeting = () => {
  useEffect(() => {
    if (greeted) return;
    greeted = true;
    console.log(
      "%c👋 Hi there, fellow developer!",
      "font-size:16px;font-weight:700;color:#60a5fa"
    );
    console.log(
      "%cCurious how this site works? It's Next.js, TypeScript and Tailwind, with React Bits-inspired motion.\nI'm open to full-time roles. Say hi at linnmu2030@gmail.com",
      "font-size:12px;line-height:1.6;color:#a78bfa"
    );
  }, []);

  return null;
};

export default DevGreeting;
