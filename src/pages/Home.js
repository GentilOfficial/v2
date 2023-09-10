import React from "react";
import HomeHeader from "../components/home_components/HomeHeader";
import HomeFeatureSection from "../components/home_components/HomeFeatureSection";

export default function Home(x) {
    return (
        <div className="space-y-16">
            <HomeHeader isIT={x.isIT} />
            <HomeFeatureSection isIT={x.isIT} />
        </div>
    );
}
