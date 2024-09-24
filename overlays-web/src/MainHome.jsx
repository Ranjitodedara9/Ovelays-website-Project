import { Suspense, lazy } from "react";
import LoginUser from "./LoginUser";

// Lazy loading components
const MainHero = lazy(() => import("./HomePage/MainHero"));
const WhatsNew = lazy(() => import("./HomePage/WhatsNew"));
const SeasonFav = lazy(() => import("./HomePage/seasonFav"));
const InstaImages = lazy(() => import("./HomePage/InstaImages"));
const BigPoster = lazy(() => import("./HomePage/BigPoster"));
const DiscoverSlider = lazy(() => import("./HomePage/DiscoverSlider"));

const MainHome = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MainHero />
        <DiscoverSlider />
        <WhatsNew />
        <BigPoster />
        <SeasonFav />
        <InstaImages />
      </Suspense>
    </div>
  );
};

export default MainHome;
