package com.android.week123;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.Gallery;
import android.widget.ImageView;
import android.widget.Toast;
import android.view.Menu;
import android.view.MenuItem;
import android.view.SubMenu;

@SuppressWarnings("deprecation")
public class MainActivity extends AppCompatActivity {

    private ImageView ivPoster; // 하단에 큰 이미지를 표시하는 ImageView

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getSupportActionBar().setDisplayShowHomeEnabled(true);
        getSupportActionBar().setIcon(R.drawable.ic_launcher);
        setTitle("갤러리 영화 포스터");

        Gallery gallery = findViewById(R.id.gallery1);
        ivPoster = findViewById(R.id.ivPoster); // 하단 큰 이미지 뷰 초기화

        // 투표 수, 이미지 이름, 포스터 ID 초기화
        final int[] voteCount = new int[10];
        final String[] imgName = { "01", "02", "03", "04", "05", "06", "07", "08", "09", "10" };
        final Integer[] imageId = {
                R.drawable.mov11, R.drawable.mov12, R.drawable.mov13, R.drawable.mov14,
                R.drawable.mov15, R.drawable.mov16, R.drawable.mov17, R.drawable.mov18,
                R.drawable.mov19, R.drawable.mov20
        };

        // Gallery Adapter 설정
        MyGalleryAdapter galAdapter = new MyGalleryAdapter(this, imageId, imgName, voteCount);
        gallery.setAdapter(galAdapter);

        // 투표 종료 버튼
        Button btnFinish = findViewById(R.id.btnResult);
        btnFinish.setOnClickListener(v -> {
            Intent intent = new Intent(getApplicationContext(), GalleryActivity.class);
            intent.putExtra("VoteCount", voteCount);
            intent.putExtra("ImageName", imgName);
            startActivity(intent);
        });
    }

    // Gallery Adapter 클래스
    public class MyGalleryAdapter extends BaseAdapter {

        private Context context;
        private Integer[] posterID;
        private String[] imgName;
        private int[] voteCount;

        public MyGalleryAdapter(Context context, Integer[] posterID, String[] imgName, int[] voteCount) {
            this.context = context;
            this.posterID = posterID;
            this.imgName = imgName;
            this.voteCount = voteCount;
        }

        @Override
        public int getCount() {
            return posterID.length;
        }

        @Override
        public Object getItem(int position) {
            return null;
        }

        @Override
        public long getItemId(int position) {
            return 0;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            ImageView imageView = new ImageView(context);
            imageView.setLayoutParams(new Gallery.LayoutParams(300, 400));
            imageView.setScaleType(ImageView.ScaleType.FIT_CENTER);
            imageView.setPadding(5, 5, 5, 5);
            imageView.setImageResource(posterID[position]);

            // 클릭 이벤트 추가
            final int pos = position; // 클릭된 포지션 저장
            imageView.setOnClickListener(v -> {
                // 투표 수 증가
                voteCount[pos]++;
                Toast.makeText(context, imgName[pos] + ": 총 " + voteCount[pos] + " 표", Toast.LENGTH_SHORT).show();

                // 클릭된 포스터를 하단에 크게 표시
                ivPoster.setScaleType(ImageView.ScaleType.FIT_CENTER);
                ivPoster.setImageResource(posterID[pos]);
            });

            return imageView;
        }
    }

    public boolean onCreateOptionMenu(Menu menu){
        super.onCreateOptionsMenu(menu):

        menu.add(0, 1, 0, "블러링1");
        menu.add(0, 2, 0, "블러링2");
        menu.add(0, 3, 0, "블러링3");
        menu.add(0, 4, 0, "블러링4");

    }
}
