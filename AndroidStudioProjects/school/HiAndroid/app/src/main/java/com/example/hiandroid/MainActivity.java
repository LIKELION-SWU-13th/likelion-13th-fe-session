package com.example.hiandroid;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.app.SearchManager;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.provider.AlarmClock;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    Button btnCall, btnEmail, btnAlarm, btnWeb, btnNetwork;
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        getSupportActionBar().setDisplayShowHomeEnabled(true);
        getSupportActionBar().setIcon(R.drawable.ic_launcher);

        btnCall = (Button) findViewById(R.id.button1);
        btnEmail = (Button) findViewById(R.id.button2);
        btnAlarm = (Button) findViewById(R.id.button3);
        btnWeb = (Button) findViewById(R.id.button4);
        btnNetwork = (Button) findViewById(R.id.button5);


        btnCall.setBackgroundColor(Color.RED);
        btnEmail.setBackgroundColor(Color.GREEN);
        btnAlarm.setBackgroundColor(Color.BLUE);
        btnWeb.setBackgroundColor(Color.YELLOW);
        btnNetwork.setBackgroundColor(Color.LTGRAY);

        btnCall.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View view)
            {
                Intent mIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://m.google.com"));
                startActivity(mIntent);
            }
        });

        btnEmail.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View view)
            {
                Intent emailIntent = new Intent(Intent.ACTION_SENDTO);
                emailIntent.setData(Uri.parse("ch020524@gmail.com"));
                emailIntent.putExtra(Intent.EXTRA_SUBJECT, "제목");
                startActivity(emailIntent);
            }
        });

        btnAlarm.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View view)
            {
                Intent alarmIntent = new Intent(AlarmClock.ACTION_SET_ALARM)
                        .putExtra(AlarmClock.EXTRA_HOUR, 6)
                        .putExtra(AlarmClock.EXTRA_MINUTES, 10)
                        .putExtra(AlarmClock.EXTRA_MESSAGE, "조깅");
                if (alarmIntent.resolveActivity(getPackageManager()) != null){
                    startActivity(alarmIntent);
            }
            }
        });

        btnWeb.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View view)
            {
               Intent webSearchIntent = new Intent(Intent.ACTION_WEB_SEARCH);
               webSearchIntent.putExtra(SearchManager.QUERY, "서울여자대학교");
               startActivity(webSearchIntent);
            }
        });

        btnNetwork.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View view)
            {
                Intent intent = new Intent(Intent.ACTION_MANAGE_NETWORK_USAGE);
                if (intent.resolveActivity(getPackageManager()) != null){
                    startActivity(intent);}
            }
        });

    }
}