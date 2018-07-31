package com.marsthink.rn.components;

import android.text.TextUtils;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.IllegalViewOperationException;

public class RnTest extends ReactContextBaseJavaModule {
    public RnTest(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    // ReactContextBaseJavaModule要求派生类实现getName方法。这个函数用于返回一个字符串
    // 这个字符串用于在JavaScript端标记这个原生模块
    @Override
    public String getName() {
        return "ToastByAndroid";
    }

    // 获取应用包名
    // 要导出一个方法给JavaScript使用，Java方法需要使用注解@ReactMethod
    @ReactMethod
    public void getPackageName() {
        String name = getReactApplicationContext().getPackageName();
        Toast.makeText(getReactApplicationContext(), name, Toast.LENGTH_LONG).show();
    }

    // android端代码
    @ReactMethod
    public void tryCallBack(String name, String psw, Callback errorCallback,
            Callback successCallback) {
        try {
            if (TextUtils.isEmpty(name) && TextUtils.isEmpty(psw)) {
                // 失败时回调
                errorCallback.invoke("user or psw  is empty");
            }
            // 成功时回调
            successCallback.invoke("add user success");
        } catch (IllegalViewOperationException e) {
            // 失败时回调
            errorCallback.invoke(e.getMessage());
        }
    }

    @ReactMethod
    public void tryPromise(String name, String psw, Promise promise) {
        try {
            if (TextUtils.isEmpty(name) && TextUtils.isEmpty(psw)) {
                promise.reject("0", "user name  or psw is empty");
            }
            WritableMap map = Arguments.createMap();
            map.putString("user_id", "success");
            promise.resolve(map);
        } catch (IllegalViewOperationException e) {
            promise.reject("2", e.getMessage());
        }
    }
}
