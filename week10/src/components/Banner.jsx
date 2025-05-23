import "./Banner.css";

function Banner({ backgroundImage, titleImage, subtitle }) {
  return (
    <div >
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) , rgba(0, 0, 0, 0)),
      url(${backgroundImage}`,
        }}
      >
        <div className="banner-wrapper">
          <div
            className="title"
            style={{ backgroundImage: `url(${titleImage})` }}
          />
          <div className="subtitle">{subtitle}</div>
          <div className="button-container">
            <button className="playBtn"> ▶ 재생</button>
            <button className="moreBtn"> ℹ 상세 정보</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
