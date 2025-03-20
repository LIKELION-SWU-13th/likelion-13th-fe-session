package com.example.week5_calculator;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    EditText edit1, edit2;
    Button btnAdd, btnSub, btnMul, btnDiv, btnMax, btnMin, btnFactorial, btnTotal;
    TextView textResult;
    String num1, num2;
    Integer result;


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        getSupportActionBar().setDisplayShowHomeEnabled(true);
        getSupportActionBar().setIcon(R.drawable.ic_launcher);
        setTitle("초단간 계산기");

        edit1 = (EditText) findViewById(R.id.Edit1);
        edit2 = (EditText) findViewById(R.id.Edit2);

        btnAdd = (Button) findViewById(R.id.BtnAdd);
        btnSub = (Button) findViewById(R.id.BtnSub);
        btnMul = (Button) findViewById(R.id.BtnMul);
        btnDiv = (Button) findViewById(R.id.BtnDiv);
        btnMax = (Button) findViewById(R.id.BtnMax);
        btnMin = (Button) findViewById(R.id.BtnMin);
        btnFactorial = (Button) findViewById(R.id.BtnFactorial);
        btnTotal = (Button) findViewById(R.id.BtnTotal);

        textResult = (TextView) findViewById(R.id.TextResult);

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

        btnMax.setOnTouchListener(new View.OnTouchListener() {
            public boolean onTouch(View arg0, MotionEvent arg1) {
                String num1Str = edit1.getText().toString();
                String num2Str = edit2.getText().toString();
                int num1 = Integer.parseInt(num1Str);
                int num2 = Integer.parseInt(num2Str);

                // 최대공약수 계산
                int gcd = findGCD(num1, num2);

                textResult.setText("최대공약수 : " + gcd);
                return true; // 이벤트 처리가 완료되었음을 나타냄
            }
        });

        btnMin.setOnTouchListener(new View.OnTouchListener() {
            public boolean onTouch(View arg0, MotionEvent arg1) {
                String num1Str = edit1.getText().toString();
                String num2Str = edit2.getText().toString();
                int num1 = Integer.parseInt(num1Str);
                int num2 = Integer.parseInt(num2Str);
                // 최대공약수 계산
                int gcd = findGCD(num1, num2);

                // 최소공배수 계산
                int lcm = (num1 * num2) / gcd;

                textResult.setText("최대공약수 : " + gcd + "\n최소공배수 : " + lcm);
                return true; // 이벤트 처리가 완료되었음을 나타냄
            }
        });


        btnFactorial.setOnTouchListener(new View.OnTouchListener() {
            public boolean onTouch(View arg0, MotionEvent arg1) {
                //num1 = edit1.getText().toString();
                //num2 = edit2.getText().toString();
                // String num1Str = edit1.getText().toString();
                int num1 = Integer.parseInt(edit1.getText().toString());
                int num2 = Integer.parseInt(edit2.getText().toString());
                int n = 1;
                int result1=1, result2 =1;
                while (n <= num1){
                    result1 *= n;
                    n++;
                }
                n = 1;

                while (n <= num2){
                    result2 *= n;
                    n++;
                }
                textResult.setText("두 수의 팩토리얼 합 계산 : " + (result1+result2));
                return false;
            }
        });

        btnTotal.setOnTouchListener(new View.OnTouchListener() {
            public boolean onTouch(View arg0, MotionEvent arg1) {
                num1 = edit1.getText().toString();
                num2 = edit2.getText().toString();
                result = Integer.parseInt(num1) / Integer.parseInt(num2);
                textResult.setText("합계 : " + result.toString());
                return false;
            }
        });
    }

    // 유클리드 알고리즘을 사용하여 최대공약수 구하기
    private int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b; // 나머지를 사용하여 반복
            a = temp;
        }
        return a; // 최대공약수 반환
    }
}

