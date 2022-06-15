import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  let [pURL, setPURL] = useState('NULL');
  useEffect(() => {
    const pURL =
      window.location != window.parent.location
        ? document.referrer
        : document.location.href;
    if (pURL) {
      setPURL(pURL);
    }
  }, []);
  return <h1>The parent url is [{pURL}]</h1>;
}
