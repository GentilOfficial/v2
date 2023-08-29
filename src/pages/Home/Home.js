import React from "react";
import HomeHeader from "./components/HomeHeader";
import HomeFeatureSection from "./components/HomeFeatureSection";

export default function HomeIndex(x) {
    return (
        <div className="space-y-16">
            <HomeHeader isIT={x.isIT} />
            <HomeFeatureSection isIT={x.isIT} />
        </div>
    );
}
