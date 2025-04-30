import React from "react";

//추가 컴포넌트1. 프로필사진 변경 컴포넌트
function ProfileImageUpload({ onImageChange }) {
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <label
        htmlFor="fileUpload"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          color: "#FF7043",
          border: "2px solid #FF7043",
          backgroundColor: "white",
          borderRadius: "15px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        사진 수정
      </label>

      <input
        id="fileUpload"
        type="file"
        accept="image/*"
        onChange={handleImage}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ProfileImageUpload;
