import React, { useState } from 'react';

function Fight() {
  const [message, setMessage] = useState(false);

  const cheerUp = () => {
    setMessage(true);

    setTimeout(() => {
      setMessage(false);
    }, 1000);
  };

  return (
    <div>
      <button className="button" onClick={cheerUp}>응원하기</button>

      {message && (
        <p style={{color: "orange"}}>파이팅!! 너의 하루를 응원해!!</p>
      )}
    </div>
  );
}

export default Fight;
