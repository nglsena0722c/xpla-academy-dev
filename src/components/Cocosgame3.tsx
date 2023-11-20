import React, { useEffect } from "react";
// import * as crypto from 'crypto';

export default function Cocosgame2() {
  useEffect(() => {
    if (typeof window !== undefined) {
      const test = async () => {
        const encoder = new TextEncoder();
        const data = encoder.encode("hihi");
        const hash = await window.crypto.subtle.digest("SHA-256", data);
        console.log('test1')
        console.log('isit ok?', hash);
      };
      test();
    }
  }, [])

  const iframe =
    '<iframe src="/xpla-academy-dev/img/web-desktop-latest/index.html" width="100%" height="100%"></iframe>';
  return (
    <div
      style={{ width: 1000, height: 800 }}
      dangerouslySetInnerHTML={{ __html: iframe }}
    ></div>
  );
}
