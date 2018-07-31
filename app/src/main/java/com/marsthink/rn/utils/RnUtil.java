package com.marsthink.rn.utils;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by zhoumao on 2018/7/31.
 * Description:
 */

public class RnUtil {
    public static void sendEvent(ReactContext reactContext, String eventName, Object object) {
        System.out.println("reactContext=" + reactContext);

        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, object);
    }
}
