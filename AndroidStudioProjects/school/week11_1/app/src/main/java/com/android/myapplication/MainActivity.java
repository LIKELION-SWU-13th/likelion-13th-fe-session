package com.android.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.BlurMaskFilter;
import android.graphics.Canvas;
import android.graphics.ColorMatrix;
import android.graphics.ColorMatrixColorFilter;
import android.graphics.Paint;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;
import android.widget.LinearLayout;

public class MainActivity extends AppCompatActivity {

    // UI 요소 선언 (각 ImageButton과 그래픽 뷰)
    ImageButton ibZoomin, ibZoomout, ibRotate, ibBright, ibDark, ibGray, ibBlurring;
    MyGraphicView graphicView; // 커스텀 뷰로 이미지를 그릴 영역
    // 이미지 변환을 위한 정적 변수 선언
    static float scaleX = 1, scaleY = 1; // 스케일 값 (확대/축소)
    static float angle = 0; // 회전 각도
    static float color = 1; // 색상 계수 (밝기 조절)
    static float satur = 1; // 채도 (색상 강도)

    static float radius = 1;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main); // 레이아웃 설정
        getSupportActionBar().setDisplayShowHomeEnabled(true); // 액션바에 아이콘 표시 여부 설정
        getSupportActionBar().setIcon(R.drawable.ic_launcher); // 액션바 아이콘 설정
        setTitle("홍수의 미니 포토샵"); // 앱 제목 설정
        // LinearLayout에 MyGraphicView 추가 (이미지를 그리기 위한 커스텀 뷰)
        LinearLayout pictureLayout = (LinearLayout) findViewById(R.id.pictureLayout);
        graphicView = (MyGraphicView) new MyGraphicView(this);
        pictureLayout.addView(graphicView); // 커스텀 뷰 추가
        // 버튼 클릭 리스너 설정
        clickIcons();
    }

    // 각 버튼의 클릭 이벤트를 설정하는 메서드
    private void clickIcons() {
        // 확대 버튼 설정
        ibZoomin = (ImageButton) findViewById(R.id.ibZoomin);
        ibZoomin.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                scaleX = scaleX + 0.2f; // 스케일을 20% 증가
                scaleY = scaleY + 0.2f;
                graphicView.invalidate(); // 뷰를 다시 그리도록 요청
            }
        });
        // 축소 버튼 설정
        ibZoomout = (ImageButton) findViewById(R.id.ibZoomout);
        ibZoomout.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                scaleX = scaleX - 0.2f; // 스케일을 20% 증가
                scaleY = scaleY - 0.2f;
                graphicView.invalidate(); // 뷰를 다시 그리도록 요청
            }
        });

        // 회전 버튼 설정
        ibRotate = (ImageButton) findViewById(R.id.ibRotate);
        ibRotate.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                angle = angle + 20; // 20도 회전
                graphicView.invalidate(); // 뷰를 다시 그리도록 요청
            }
        });
        // 밝기 증가 버튼 설정
        ibBright = (ImageButton) findViewById(R.id.ibBright);
        ibBright.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                color = color + 0.2f; // 색상 계수를 증가시켜 밝기 증가
                graphicView.invalidate(); // 뷰를 다시 그리도록 요청
            }
        });
        // 밝기 감소 버튼 설정
        ibDark = (ImageButton) findViewById(R.id.ibDark);
        ibDark.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                color = color + 0.2f; // 색상 계수를 증가시켜 밝기 증가
                graphicView.invalidate(); // 뷰를 다시 그리도록 요청
            }
        });

        // 흑백/컬러 전환 버튼 설정
        ibGray = (ImageButton) findViewById(R.id.ibGray);
        ibGray.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                if (satur == 0)
                    satur = 1;
                else
                    satur = 0;
                graphicView.invalidate(); // 뷰를 다시 그리도록 요청
            }
        });


        // 블러링 전환 버튼 설정
        ibBlurring = (ImageButton) findViewById(R.id.ibBlurring);
        ibBlurring.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                // 블러 반경 값을 증가시켜 효과를 점점 강하게
                radius = radius + 30;
                graphicView.invalidate(); // 뷰를 다시 그리도록 요청
            }
        });

    }

    // 커스텀 뷰 클래스 정의
    private static class MyGraphicView extends View {
        public MyGraphicView(Context context) {
            super(context);
        }

        protected void onDraw(Canvas canvas) {
            super.onDraw(canvas);
            // 중심 좌표 계산
            int cenX = this.getWidth() / 2;
            int cenY = this.getHeight() / 2;
            // 캔버스 확대/축소 적용
            canvas.scale(scaleX, scaleY, cenX, cenY);
            // 캔버스 회전 적용
            canvas.rotate(angle, cenX, cenY);
            // Paint 객체 생성 및 색상 필터 설정
            Paint paint = new Paint();
            // 20개의 요소로 구성되며, 각각은 특정 색상 채널에 대한 변환을 정의
            BlurMaskFilter bMask;
            //블러링을 위한
            float[] array = {
                    color, 0, 0, 0, 0, //  빨강(R) 채널을 조정
                    0, color, 0, 0, 0, //  초록(G) 채널을 조정
                    0, 0, color, 0, 0, // 파랑(B) 채널을 조정
                    0, 0, 0, 1, 0 // 알파(A) 채널은 그대로 유지 (투명도 변경 없음)
            };
            ColorMatrix cm = new ColorMatrix(array); // 컬러 필터 배열 생성
            // 채도 설정 (0이면 흑백)
            if (satur == 0)
                cm.setSaturation(satur);
            paint.setColorFilter(new ColorMatrixColorFilter(cm)); // Paint 객체에 컬러 필터 설정
            // Bitmap 객체 생성 및 이미지 중심에 그리기
            Bitmap picture = BitmapFactory.decodeResource(getResources(), R.drawable.lena256);
            int picX = (this.getWidth() - picture.getWidth()) / 2;
            int picY = (this.getHeight() - picture.getHeight()) / 2;
            bMask = new BlurMaskFilter(radius, BlurMaskFilter.Blur.NORMAL);
            paint.setMaskFilter(bMask);

            canvas.drawBitmap(picture, picX, picY, paint); // Paint 속성을 사용해 Bitmap을 그림
            picture.recycle(); // Bitmap 메모리 해제
        }
    }
}


