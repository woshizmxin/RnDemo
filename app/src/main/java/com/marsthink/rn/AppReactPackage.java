package com.marsthink.rn;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.marsthink.rn.components.CircleManager;
import com.marsthink.rn.components.RnTest;

import java.util.Arrays;
import java.util.List;

public class AppReactPackage implements ReactPackage {

    //Rn调原生
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
                new RnTest(reactContext)
        );
    }

    // Rn调原生view；
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new CircleManager()
        );
    }
}
