import MainHero from "./HomePage/MainHero";
import WhatsNew from "./HomePage/WhatsNew";
import SeasonFav from "./HomePage/seasonFav";
import InstaImages from "./HomePage/InstaImages";
import BigPoster from "./HomePage/BigPoster";
import DiscoverSlider from "./HomePage/DiscoverSlider";

const MainHome = () => {
  return (
    <div>
      <MainHero />
      <DiscoverSlider />
      <WhatsNew />
      <BigPoster />
      <SeasonFav />
      <InstaImages />
    </div>
  );
};

export default MainHome;
