package com.marsthink.rndemo;

import android.app.Activity;
import android.os.Bundle;
import android.view.KeyEvent;
import android.widget.LinearLayout;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

/**
 * Created by zhoumao on 2018/7/8.
 * Description:
 */

public class RnMixActivity extends Activity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_rn_mix);
        LinearLayout linearLayout = findViewById(R.id.layout);


        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index.android") //对应index.android.js
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(true) //开发者支持，BuildConfig.DEBUG的值默认是false，无法使用开发者菜单
                .setUseDeveloperSupport(true) //开发者支持,开发的时候要设置为true，不然无法使用开发者菜单
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        //这里的ReactNativeView对应index.android.js中AppRegistry.registerComponent('ReactNativeView',
        // () => ReactNativeView)的ReactNativeView
        mReactRootView.startReactApplication(mReactInstanceManager, "RNFirstComponent", null);
        linearLayout.addView(mReactRootView);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy(this);
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        //当我们点击菜单的时候打开发者菜单，一个弹窗（此处需要悬浮窗权限才能显示）
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }
}
