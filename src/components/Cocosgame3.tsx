import React from "react";

export default function Cocosgame2() {
  const test = async () => {
    const encoder = new TextEncoder();
    const data = encoder.encode("hihi");
    const hash = await crypto.subtle.digest("SHA-256", data);
    console.log('test')
    console.log('isit ok?', hash);
  };
  test();

  const iframe =
    '<iframe src="/xpla-academy-dev/img/web-desktop-latest/index.html" width="100%" height="100%"></iframe>';
  return (
    <div
      style={{ width: 1000, height: 800 }}
      dangerouslySetInnerHTML={{ __html: iframe }}
    ></div>
  );
}
