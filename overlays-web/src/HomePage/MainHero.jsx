import { Carousel } from "react-bootstrap";
import mobimg1 from "./heroimg/Bundle_offer.Mobile_1.jpg";
import mobimg2 from "./heroimg/Summer-Banner_mobile.jpg";
import lepimg1 from "./heroimg/Freedom_For_You_Desktop_Banner__2.jpg";
import lepimg2 from "./heroimg/Get_your_Black_Friday_Mood_on_1b_Desktop_Banner.jpg";
const MainHero = () => {
  console.log(window.innerWidth);
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            src={mobimg1}
            className="w-[100%] lep:hidden"></img>
          <img
            src={lepimg1}
            className="hidden lep:block"></img>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            src={mobimg2}
            className="w-[100%] lep:hidden"></img>
          <img
            src={lepimg2}
            className="hidden lep:block"></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainHero;
