package com.example.layout_week6_home;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.view.inputmethod.InputMethodManager;

public class MainActivity extends AppCompatActivity {
    EditText edit1, edit2;


    Button btnAdd, btnSub, btnMul, btnDiv,
            n0, n1, n2, n3, n4, n5, n6, n7, n8, n9;
    TextView textResult;
    String num1, num2;
    Integer result;
    public void hideKeyboard(View view) {
        InputMethodManager imm = (InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
        View currentFocus = getCurrentFocus(); // 현재 포커스가 있는 뷰를 가져옵니다.

        if (currentFocus != null) {
            imm.hideSoftInputFromWindow(currentFocus.getWindowToken(), 0); // 키보드 숨기기
        }
    }



    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getSupportActionBar().setDisplayShowHomeEnabled(true);
        getSupportActionBar().setIcon(R.drawable.ic_launcher);
        setTitle("테이블레이아웃 계산기");
        edit1 = (EditText) findViewById(R.id.Edit1);
        edit2 = (EditText) findViewById(R.id.Edit2);
        btnAdd = (Button) findViewById(R.id.BtnAdd);
        btnSub = (Button) findViewById(R.id.BtnSub);
        btnMul = (Button) findViewById(R.id.BtnMul);
        btnDiv = (Button) findViewById(R.id.BtnDiv);

        n0 = (Button) findViewById(R.id.N0);
        n1 = (Button) findViewById(R.id.N1);
        n2 = (Button) findViewById(R.id.N2);
        n3 = (Button) findViewById(R.id.N3);
        n4 = (Button) findViewById(R.id.N4);
        n5 = (Button) findViewById(R.id.N5);
        n6 = (Button) findViewById(R.id.N6);
        n7 = (Button) findViewById(R.id.N7);
        n8 = (Button) findViewById(R.id.N8);
        n9 = (Button) findViewById(R.id.N9);

        edit1.setOnClickListener(v -> hideKeyboard(v));
        edit2.setOnClickListener(v -> hideKeyboard(v));


        textResult = (TextView) findViewById(R.id.TextResult);
        final InputMethodManager manager = (InputMethodManager)getSystemService(INPUT_METHOD_SERVICE) ;

        View.OnClickListener buttonClickListener = view -> {
            String value = ((Button) view).getText().toString();
            if (edit1.getText().toString().isEmpty()) {
                edit1.setText(value);
            } else if (edit2.getText().toString().isEmpty()) {
                edit2.setText(value);
            }
        };





        btnAdd.setOnTouchListener(new View.OnTouchListener() {
            public boolean onTouch(View arg0, MotionEvent arg1) {
                num1 = edit1.getText().toString();
                num2 = edit2.getText().toString();
                result = Integer.parseInt(num1) + Integer.parseInt(num2);
                textResult.setText("계산 결과 : " + result.toString());
                return false;
            }
        });
        btnSub.setOnTouchListener(new View.OnTouchListener() {
            public boolean onTouch(View arg0, MotionEvent arg1) {
                num1 = edit1.getText().toString();
                num2 = edit2.getText().toString();
                result = Integer.parseInt(num1) - Integer.parseInt(num2);
                textResult.setText("계산 결과 : " + result.toString());
                return false;
            }
        });

        btnMul.setOnTouchListener(new View.OnTouchListener() {
            public boolean onTouch(View arg0, MotionEvent arg1) {
                num1 = edit1.getText().toString();
                num2 = edit2.getText().toString();
                result = Integer.parseInt(num1) * Integer.parseInt(num2);
                textResult.setText("계산 결과 : " + result.toString());
                return false;
            }
        });
        btnDiv.setOnTouchListener(new View.OnTouchListener() {
            public boolean onTouch(View arg0, MotionEvent arg1) {
                num1 = edit1.getText().toString();
                num2 = edit2.getText().toString();
                result = Integer.parseInt(num1) / Integer.parseInt(num2);
                textResult.setText("계산 결과 : " + result.toString());
                return false;
            }
        });
    }


    }
