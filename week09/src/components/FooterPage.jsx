import React from "react";

function FooterPage() {
    return (
      <footer className="footer">
        <div className="footer_bottom">
            <p>질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)(무료 전화)</p>
    
            <ul className="footer_link">
            <li><a href="#">자주 묻는 질문</a></li>
            <li><a href="#">고객 센터</a></li>
            <li><a href="#">이용 약관</a></li>
            <li><a href="#">개인정보</a></li>
            <li><a href="#">쿠키 설정</a></li>
            <li><a href="#">회사 정보</a></li>
            </ul>

            <select className="footer_lang">
                <option>한국어</option>
                <option>English</option>
            </select>

            <small className="footer_detail">
            넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)<br />
            대표: 레지널드 숀 톰슨<br />
            이메일 주소: korea@netflix.com<br />
            주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161<br />
            사업자등록번호: 165-87-00119<br />
            클라우드 호스팅: Amazon Web Services Inc.<br />
            공정거래위원회 웹사이트
            </small>
        </div>
    </footer>
    );
}

export default FooterPage;