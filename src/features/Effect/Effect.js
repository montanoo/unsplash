import React, {useState, useEffect} from 'react';

export const Effect = () => {
  const [clickCount, setClickCount] = useState(0)

  const increment = () => setClickCount((prev) => prev + 1)

  // event handlers, every time we have one, we need another one tu clean up.
  useEffect(() => {
    document.addEventListener('mousedown', increment)

    return () => {
      document.removeEventListener('mousedown', increment)
    }
  }, [])
  // dependencie array: empty: when whatever happens, else: await for the parameter to happen.
  return(
    <h1>Document Click: {clickCount}</h1>
  )
}