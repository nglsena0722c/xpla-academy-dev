import React from "react";

export default function Cocosgame2() {
  const iframe = '<iframe src="/xpla-academy-dev/img/web-desktop-hard/index.html" width="100%" height="100%"></iframe>';
  return (
    <div
      style={{ width: 1000, height: 800 }}
      dangerouslySetInnerHTML={{ __html: iframe }}
    ></div>
  );
}