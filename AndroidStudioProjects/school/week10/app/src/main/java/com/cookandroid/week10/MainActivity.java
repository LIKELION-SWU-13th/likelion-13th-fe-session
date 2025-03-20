package com.cookandroid.week10;

import androidx.appcompat.app.AppCompatActivity;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;
public class MainActivity extends AppCompatActivity {

    Button btnWrite, btnRead;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btnWrite = (Button) findViewById(R.id.btnWrite);
        btnWrite.setOnClickListener(new View.OnClickListener() { // btnWrite 버튼 클릭 시 이벤트 설정
            public void onClick(View v) {
                try {
                    FileOutputStream outFs = openFileOutput("file.txt", Context.MODE_PRIVATE);

                    String str = "쿡북 안드로이드";
                    outFs.write(str.getBytes());
                    outFs.close();
                    Toast.makeText(getApplicationContext(), "file.txt가 생성됨", Toast.LENGTH_SHORT).show();
                } catch (IOException e) {
                }
            }
        });

        btnRead.setOnClickListener(new View.OnClickListener() { // btnRead 버튼 클릭 시 이벤트 설정
            public void onClick(View v) {
                try {
                    FileInputStream inFs = openFileInput("file.txt");

                    byte[] txt = new byte[30];

                    inFs.read(txt);

                    String str = new String(txt);

                    Toast.makeText(getApplicationContext(), str, Toast.LENGTH_SHORT).show();

                    inFs.close();
                } catch (IOException e) {
                    Toast.makeText(getApplicationContext(), "파일 없음", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }


}