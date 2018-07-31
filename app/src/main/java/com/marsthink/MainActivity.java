package com.marsthink;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import com.marsthink.rndemo.R;
import com.marsthink.rn.RNActivity;
import com.marsthink.rn.activity.RnMixActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findViewById(R.id.rn_btn1).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, RNActivity.class);
                startActivity(intent);
            }
        });
        findViewById(R.id.rn_btn2).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, RnMixActivity.class);
                startActivity(intent);
            }
        });
    }
}
