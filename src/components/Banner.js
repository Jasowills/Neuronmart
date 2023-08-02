import bannerImage from "../images/generator2.png";
import bannerImage2 from "../images/alcohol.png";
import bannerImage3 from "../images/micro2.png";
import bannerImage4 from "../images/hisense.png";
import bannerImage5 from "../images/milo.png";
import bannerImage6 from "../images/rice1.png";
function Banner() {
  return (
    <div className="banner">
      <div className="side">
        <div className="text">
          <h2>Shopping And Department Store.</h2>
          <p>
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="side extra">
        <div className="banner-images">
          <img src={bannerImage} alt="" />
          <img src={bannerImage2} alt="" />
          <img src={bannerImage3} alt="" />
          <img src={bannerImage4} alt="" />
          <img src={bannerImage5} alt="" />
          <img src={bannerImage6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
