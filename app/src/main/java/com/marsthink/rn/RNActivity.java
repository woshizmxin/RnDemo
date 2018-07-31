package com.marsthink.rn;

import com.facebook.react.ReactActivity;

import javax.annotation.Nullable;

/**
 * Created by weiyang on 2017/7/31 0031.
 */

public class RNActivity extends ReactActivity {
    @Nullable
    @Override
    protected String getMainComponentName() {
        return "RNFirstComponent";
    }
}
