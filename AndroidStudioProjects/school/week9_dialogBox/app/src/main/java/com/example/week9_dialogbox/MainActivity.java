package com.example.week9_dialogbox;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.DialogInterface;
import android.preference.DialogPreference;
import android.view.View;
import android.widget.Button;
import android.os.Bundle;
import android.widget.CompoundButton;
import android.widget.Toast;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {
    ImageView imgSchool;


    @SuppressLint("ClickableViewAccessibility")
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        imgSchool = findViewById(R.id.ImgSchool); // ImageView 연결
        final Button button1 = findViewById(R.id.button1);

        button1.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                final String[] versionArray = new String[]{"서울여자대학교", "숙명여자대학교", "이화여자대학교"};
                final int[] imageArray = new int[]{R.drawable.school1, R.drawable.school2, R.drawable.school3}; // 각 대학에 맞는 이미지 리소스 ID

                AlertDialog.Builder dlg = new AlertDialog.Builder(MainActivity.this);
                dlg.setTitle("내가 선호하는 대학은?");
                dlg.setIcon(R.mipmap.ic_launcher);
                dlg.setSingleChoiceItems(versionArray, 0, new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        button1.setText(versionArray[which]);
                        imgSchool.setImageResource(imageArray[which]);
                        imgSchool.setVisibility(View.VISIBLE);
                    }
                });
                dlg.setPositiveButton("닫기", null);
                dlg.show();
            }
        });
    }

    public void Onclick(View v){
        AlertDialog.Builder dlg = new AlertDialog.Builder(MainActivity.this);
        dlg.setTitle("제목입니다.");
        dlg.setMessage("이곳이 내용입니다.");
        dlg.setIcon(R.mipmap.ic_launcher);
        dlg.setPositiveButton("확인",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which){
                        Toast.makeText(MainActivity.this, "확인을 눌렀네요", Toast.LENGTH_SHORT).show();
                    }
                });
        dlg.show();
    }


}