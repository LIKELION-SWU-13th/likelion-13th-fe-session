package com.example.imagebutton;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.ImageView;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    TextView text1, text2;
    CheckBox chkAgree;
    RadioGroup rGroup1;
    RadioButton rdoDog, rdoCat, rdoRabbit;
    Button btnOK;
    ImageView imgPet;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getSupportActionBar().setDisplayShowHomeEnabled(true);
        getSupportActionBar().setIcon(R.drawable.ic_launcher);
        setTitle("애완동물 사진 보기");
        // 위젯을 변수에 대입
        text1 = (TextView) findViewById(R.id.Text1);
        chkAgree = (CheckBox) findViewById(R.id.ChkAgree);
        text2 = (TextView) findViewById(R.id.Text2);
        rGroup1 = (RadioGroup) findViewById(R.id.Rgroup1);
        rdoDog = (RadioButton) findViewById(R.id.RdoDog);
        rdoCat = (RadioButton) findViewById(R.id.RdoCat);
        rdoRabbit = (RadioButton) findViewById(R.id.RdoRabbit);
        btnOK = (Button) findViewById(R.id.BtnOK);
        imgPet = (ImageView) findViewById(R.id.ImgPet);
        // 동의함 체크박스의 체크가 변경되면
        chkAgree.setOnCheckedChangeListener((arg0, arg1) -> {
            // 체크되면 모두 보이도록 설정
            if (chkAgree.isChecked() == true) {
                text2.setVisibility(View.VISIBLE);
                rGroup1.setVisibility(View.VISIBLE);
                btnOK.setVisibility(View.VISIBLE);
                imgPet.setVisibility(View.VISIBLE);
            } else {
                text2.setVisibility(View.INVISIBLE);
                rGroup1.setVisibility(View.INVISIBLE);
                btnOK.setVisibility(View.INVISIBLE);
                imgPet.setVisibility(View.INVISIBLE);
            }
        });

        // 선택확인 버튼을 클릭하면
        btnOK.setOnClickListener(new View.OnClickListener() {
            public void onClick(View arg0) {
                int checkedRadio = rGroup1.getCheckedRadioButtonId();
                if (checkedRadio == R.id.RdoDog)
                    imgPet.setImageResource(R.drawable.dog);
                else if (checkedRadio == R.id.RdoCat)
                    imgPet.setImageResource(R.drawable.cat);
                else if (checkedRadio == R.id.RdoRabbit)
                    imgPet.setImageResource(R.drawable.rabbit);
                else
                    Toast.makeText(getApplicationContext(), "동물 먼저 선택하세요", Toast.LENGTH_SHORT).show();
            }
        });
    }
}