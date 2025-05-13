import React from "react";

function LoginFooter() {
  return (
    <>
      <p className="login_signup">
        Netflix가 처음이신가요? <b>지금 가입하세요.</b>
      </p>
      <small className="login_notice">
        이 페이지는 reCAPTCHA로 보호를 받아 사용자가 로봇이 아님을 확인합니다. <br />
      </small>
      <small className="login_detail">
        자세히 알아보기
      </small>
    </>
  );
}

export default LoginFooter;
