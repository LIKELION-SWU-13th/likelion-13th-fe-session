package com.android.week131;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import android.os.Environment;
import android.os.Handler; // Handler를 추가
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.ProgressBar;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    ListView listViewMP3;
    Button btnPlay, btnStop;
    TextView tvMP3;
    ProgressBar pbMP3;

    ArrayList<String> mp3List;
    String selectedMP3;

    String mp3Path = Environment.getExternalStorageDirectory().getPath() + "/";
    MediaPlayer mPlayer;
    Handler handler; // Handler 객체 추가
    Runnable updateProgressBar; // ProgressBar 업데이트를 위한 Runnable 추가

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getSupportActionBar().setDisplayShowHomeEnabled(true);
        getSupportActionBar().setIcon(R.drawable.ic_launcher);
        setTitle("SWU 간단 MP3 플레이어");
        ActivityCompat.requestPermissions(this, new String[]{android.Manifest.permission.WRITE_EXTERNAL_STORAGE}, MODE_PRIVATE);

        mp3List = new ArrayList<String>();

        // SD 카드의 MP3 파일 목록 읽기
        File[] listFiles = new File(mp3Path).listFiles();
        String fileName, extName;
        for (File file : listFiles) {
            fileName = file.getName();
            extName = fileName.substring(fileName.length() - 3);
            if (extName.equals("mp3"))
                mp3List.add(fileName);
        }

        listViewMP3 = (ListView) findViewById(R.id.listViewMP3);
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this,
                android.R.layout.simple_list_item_single_choice, mp3List);
        listViewMP3.setChoiceMode(ListView.CHOICE_MODE_SINGLE);
        listViewMP3.setAdapter(adapter);
        listViewMP3.setItemChecked(0, true);

        listViewMP3.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            public void onItemClick(AdapterView<?> arg0, View arg1, int arg2, long arg3) {
                selectedMP3 = mp3List.get(arg2);
            }
        });
        selectedMP3 = mp3List.get(0);

        btnPlay = (Button) findViewById(R.id.btnPlay);
        btnStop = (Button) findViewById(R.id.btnStop);
        tvMP3 = (TextView) findViewById(R.id.tvMP3);
        pbMP3 = (ProgressBar) findViewById(R.id.pbMP3);

        handler = new Handler(); // Handler 초기화

        btnPlay.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    mPlayer = new MediaPlayer();
                    mPlayer.setDataSource(mp3Path + selectedMP3);
                    mPlayer.prepare();
                    mPlayer.start();

                    btnPlay.setClickable(false);
                    btnStop.setClickable(true);
                    tvMP3.setText("실행중인 음악 :  " + selectedMP3);
                    pbMP3.setVisibility(View.VISIBLE);

                    // MP3 재생 길이에 따라 ProgressBar 설정
                    pbMP3.setMax(mPlayer.getDuration()); // MP3 길이를 ProgressBar 최대값으로 설정
                    updateProgressBar = new Runnable() {
                        @Override
                        public void run() {
                            if (mPlayer != null && mPlayer.isPlaying()) {
                                pbMP3.setProgress(mPlayer.getCurrentPosition()); // 현재 위치를 ProgressBar에 반영
                                handler.postDelayed(this, 500); // 0.5초마다 업데이트
                            }
                        }
                    };
                    handler.post(updateProgressBar); // 업데이트 시작
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });



        btnStop.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                if (mPlayer != null) {
                    mPlayer.stop();
                    mPlayer.reset();

                    btnPlay.setClickable(true);
                    btnStop.setClickable(false);
                    tvMP3.setText("실행중인 음악 :  ");
                    pbMP3.setVisibility(View.INVISIBLE);

                    // ProgressBar 업데이트 중지
                    handler.removeCallbacks(updateProgressBar);
                    pbMP3.setProgress(0); // ProgressBar 초기화
                }
            }
        });

        btnStop.setClickable(false); // 초기 상태에서 정지 버튼 비활성화
    }
}
