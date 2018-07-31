package com.marsthink.rn.components;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.marsthink.components.CircleView;

public class CircleManager extends SimpleViewManager<CircleView> {

    /**
     * 设置js引用名
     */
    @Override
    public String getName() {
        return "MCircle";
    }

    /**
     * 创建UI组件实例
     */
    @Override
    protected CircleView createViewInstance(ThemedReactContext reactContext) {
        return new CircleView(reactContext);
    }

    /**
     * 传输背景色参数
     */
    @ReactProp(name = "color")
    public void setColor(CircleView view, Integer color) {
        view.setColor(color);
    }

    /**
     * 传输半径参数
     */
    @ReactProp(name = "radius")
    public void setRadius(CircleView view, Integer radius) {
        view.setRadius(radius);
    }
}
