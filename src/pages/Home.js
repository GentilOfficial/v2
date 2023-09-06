import React from "react";
import HomeHeader from "../components/home_components/HomeHeader";
import HomeDivider from "../components/home_components/HomeDivider";
import HomeFeatureSection from "../components/home_components/HomeFeatureSection";

export default function Home(x) {
    return (
        <div className="space-y-16">
            <HomeHeader isIT={x.isIT} />
            <HomeDivider />
            <HomeFeatureSection isIT={x.isIT} />
        </div>
    );
}
