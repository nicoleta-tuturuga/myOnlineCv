import React from "react";

import "./Hobbies.css";
import "../sideLinkPage.css";

import SideBarNavbar from "../Header/SideBarNavbar";
import Carousel from "../Carousel";
import Gallery from 'react-grid-gallery';
import { SocialIcon } from 'react-social-icons';

import StickyBtn from "../buttons/StickyBtn";
import ExpandableText from "../buttons/ExpandableText";
import Footer from "../footer/Footer";

const Hobbies = () => {

  const carouselImages = [
    require('../../assets/images/carousel/2.jpeg'),
    require('../../assets/images/carousel/3.jpeg'),
    require('../../assets/images/carousel/4.jpeg')
  ]


  const IMAGES =
    [
      {
        src: require('../../assets/images/hobbies/05b79f59-8006-4d44-9afb-a5b69704c90e.jpg'),
        thumbnail: require('../../assets/images/hobbies/05b79f59-8006-4d44-9afb-a5b69704c90e.jpg'),
        thumbnailWidth: 170,
        thumbnailHeight: 170,
        isSelected: true
      },
      {
        src: require('../../assets/images/hobbies/29536ea1-7ca6-4eae-b04b-c04d112f5f87.jpg'),
        thumbnail: require('../../assets/images/hobbies/29536ea1-7ca6-4eae-b04b-c04d112f5f87.jpg'),
        thumbnailWidth: 200,
        thumbnailHeight: 212
      },

      {
        src: require('../../assets/images/hobbies/19fd0410-a760-459d-988a-6dd5d82b35fd.jpg'),
        thumbnail: require('../../assets/images/hobbies/19fd0410-a760-459d-988a-6dd5d82b35fd.jpg'),
        thumbnailWidth: 250,
        thumbnailHeight: 212
      },
      {
        src: require('../../assets/images/hobbies/991f0c7e-c016-474e-9cb8-0505a325bc5f.jpg'),
        thumbnail: require('../../assets/images/hobbies/991f0c7e-c016-474e-9cb8-0505a325bc5f.jpg'),
        thumbnailWidth: 170,
        thumbnailHeight: 174
      },
      {
        src: require('../../assets/images/hobbies/85e446bd-4668-4ef2-b117-ab4f71723eef.jpg'),
        thumbnail: require('../../assets/images/hobbies/85e446bd-4668-4ef2-b117-ab4f71723eef.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },

      {
        src: require('../../assets/images/hobbies/f0653171-8aaa-445f-b3f2-9db5f687f171.jpg'),
        thumbnail: require('../../assets/images/hobbies/f0653171-8aaa-445f-b3f2-9db5f687f171.jpg'),
        thumbnailWidth: 170,
        thumbnailHeight: 212
      },
      {
        src: require('../../assets/images/hobbies/70823f2f-260b-4da7-aba7-1d30e0b63e23.jpg'),
        thumbnail: require('../../assets/images/hobbies/70823f2f-260b-4da7-aba7-1d30e0b63e23.jpg'),
        thumbnailWidth: 250,
        thumbnailHeight: 212
      },
      {
        src: require('../../assets/images/hobbies/7c4de6fb-dc7a-4be9-a4ea-0ac7156852cf.jpg'),
        thumbnail: require('../../assets/images/hobbies/7c4de6fb-dc7a-4be9-a4ea-0ac7156852cf.jpg'),
        thumbnailWidth: 200,
        thumbnailHeight: 212
      },
      {
        src: require('../../assets/images/hobbies/6f9f7269-214d-4e43-8465-a2818303b5d1.jpg'),
        thumbnail: require('../../assets/images/hobbies/6f9f7269-214d-4e43-8465-a2818303b5d1.jpg'),
        thumbnailWidth: 400,
        thumbnailHeight: 212
      },
      {
        src: require('../../assets/images/hobbies/5f58717a-ffdf-4ff9-ac5d-192cbf44d0bd.jpg'),
        thumbnail: require('../../assets/images/hobbies/5f58717a-ffdf-4ff9-ac5d-192cbf44d0bd.jpg'),
        thumbnailWidth: 250,
        thumbnailHeight: 212
      },
      {
        src: require('../../assets/images/hobbies/35af7dba-ab07-4160-969a-7526d4a512c3.jpg'),
        thumbnail: require('../../assets/images/hobbies/35af7dba-ab07-4160-969a-7526d4a512c3.jpg'),
        thumbnailWidth: 200,
        thumbnailHeight: 212
      },

      {
        src: require('../../assets/images/hobbies/991e8b73-21f8-437e-ae3f-96fa03b164f8.jpg'),
        thumbnail: require('../../assets/images/hobbies/991e8b73-21f8-437e-ae3f-96fa03b164f8.jpg'),
        thumbnailWidth: 200,
        thumbnailHeight: 212
      },
      {
        src: require('../../assets/images/hobbies/74b97e45-7f1e-4613-a378-245a17f108ca.jpg'),
        thumbnail: require('../../assets/images/hobbies/74b97e45-7f1e-4613-a378-245a17f108ca.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require('../../assets/images/hobbies/47e6296d-5042-4a16-ba98-66accedda90e.jpg'),
        thumbnail: require('../../assets/images/hobbies/47e6296d-5042-4a16-ba98-66accedda90e.jpg'),
        thumbnailWidth: 170,
        thumbnailHeight: 212
      },
      {
        src: require('../../assets/images/hobbies/781f1ec4-895f-4bea-b20b-883d4edd0646.jpg'),
        thumbnail: require('../../assets/images/hobbies/781f1ec4-895f-4bea-b20b-883d4edd0646.jpg'),
        thumbnailWidth: 290,
        thumbnailHeight: 212
      },
      {
        src: require('../../assets/images/hobbies/95601605-aa76-437a-8466-caa44a152fc6.jpg'),
        thumbnail: require('../../assets/images/hobbies/95601605-aa76-437a-8466-caa44a152fc6.jpg'),
        thumbnailWidth: 270,
        thumbnailHeight: 212
      }
    ]


  return (
    <div>

      {/* <!-- Hobbies --> */}
      <div className="hobbies-page">
        <div className="side-link-page">
          <p>hobbies</p>
        </div>
        <p id="head-title">Hobbies</p>

        <div className="hobbies-container-parent">

          <div className="hobbies-container main-area d-flex flex-wrap">
            {/* <!-- First main column --> */}
            <div className="col1 col-lg-8">

              <Carousel
                carouselImg={carouselImages}>
              </Carousel>

              {/* <!-- Other related articles section --> */}
              <div className="other-articles">
                <p>Read about my travels: </p>
                <div className="article-first-row row d-flex">
                  <div className="article-col col-xs-12 col-lg-6">
                    <img
                      src={require('../../assets/images/hobbies/0919db4e-1fbe-4ba1-b6f2-cc5762f27de4.jpg')} alt="" />
                    <h2 className="entry-header">
                      <p className="title-header">Paris, France</p>
                    </h2>
                    <div className="meta-header d-flex">
                      <p><time className="entry-time">October, 2018</time></p>
                    </div>
                    <ExpandableText>
                      <p>
                        Paris is the capital and most populous city of France, with a population of 2,148,271 residents (official estimate, 1 January 2020) in an area of 105 square kilometres (41 square miles). Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science and the arts. The City of Paris is the centre and seat of government of the Île-de-France, or Paris Region, which has an estimated official 2020 population of 12,278,210, or about 18 percent of the population of France.
                      </p>
                    </ExpandableText>
                  </div>

                  <div className="article-col col-xs-12 col-lg-6">
                    <img
                      src={require('../../assets/images/hobbies/7940779e-6f86-4a82-9f03-6f5d41eff004.jpg')} alt="" />
                    <h2 className="entry-header">
                      <p className="title-header">Maslinica, Croatia</p>
                    </h2>
                    <div className="meta-header d-flex">
                      <p> <time className="entry-time">August, 2019</time></p>
                    </div>
                    <ExpandableText>
                      <p>
                        Maslinica (Italian: Porto Olivetto) is a port village on the island of Šolta in Croatia in the Split-Dalmatia County. It is connected by the D111 highway. Maslinica has 208 inhabitants. The center of the village, the westernmost town of the island, the castle Martinis Marchi, now a luxury hotel with marina for about 60 boats.
                        During the time of the Austro-Hungarian Empire the villages of Šolta still have their Italian names as well as Porto Olivetto.
                        In the 19th century the best wine of the island came from Maslinica. The best qualities of national importance were created in the 1870s and 80s by Pietro degli Alberti from Porto Oliveto di Solta. At the Vienna World Fair in 1873 he received an honorary prize. At the Triester exhibition in 1882 he received a gold medal.
                      </p>
                    </ExpandableText>
                  </div>
                </div>
                <div className="article-second-row row">
                  <div className="article-col col-xs-12 col-lg-6">
                    <img
                      src={require('../../assets/images/hobbies/dubrovnik.jpg')} alt="" />
                    <h2 className="entry-header">
                      <p className="title-header">Dubrovnik, Croatia</p>
                    </h2>
                    <div className="meta-header d-flex">
                      <p><time className="entry-time">August, 2019</time></p>
                    </div>
                    <ExpandableText>
                      <p>
                        Dubrovnik (historically Latin: Ragusa) is a city on the Adriatic Sea in southern Croatia. It is one of the most prominent tourist destinations in the Mediterranean Sea, a seaport and the centre of Dubrovnik-Neretva County. Its total population is 42,615 (census 2011). In 1979, the city of Dubrovnik joined the UNESCO list of World Heritage sites.
                        The prosperity of the city was historically based on maritime trade; as the capital of the maritime Republic of Ragusa, it achieved a high level of development, particularly during the 15th and 16th centuries, as it became notable for its wealth and skilled diplomacy.
                        </p>
                    </ExpandableText>
                  </div>
                  <div className="article-col col-xs-12 col-lg-6">
                    <img
                      src={require('../../assets/images/hobbies/b16a90ad-a8b6-48e2-b072-9dad323aaec8.jpg')} alt="" />
                    <h2 className="entry-header">
                      <p className="title-header">Alicante, Spain</p>
                    </h2>
                    <div className="meta-header d-flex">
                      <p><time className="entry-time">December, 2019</time></p>
                    </div>
                    <ExpandableText>
                      <p>
                        Alicante is a city located in Spain. It sits along the Costa Blanca, is the capital of the province of Alicante, and the comarca of Alacantí. It is also a historic Mediterranean port. The population of the city of Alicante proper was 330,525, estimated as of 2016, ranking as the second-largest Valencian city. Including nearby municipalities, the Alicante conurbation had 452,462 residents. The population of the metropolitan area (including Elche and satellite towns) is 757,085 as of 2014 estimates, ranking as the eighth-largest metropolitan area of Spain.
                      </p>
                    </ExpandableText>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Sidebar - second main column --> */}
            <div className="col2 col-lg-4 d-flex flex-column">

              {/* <!-- Social network icons --> */}
              <div className="widget-wrap-social-networks">
                <p className="title-header">Follow me on</p>
                <ul className="social-networks d-flex">
                  <li>
                    <SocialIcon network="instagram" url="https://www.instagram.com/nicotuturuga/?igshid=19603gdl5y8a0&fbclid=IwAR2ilC241XTONY6kJr3a2XzwEyorZI-x8CdL7uQzFFudpa7Ngy9YRp1VuFk" bgColor="#000000"
                      title="instagram" target="_blank"></SocialIcon>
                  </li>
                  <li>
                    <SocialIcon network="facebook" bgColor="#000000"
                      url="https://www.facebook.com/tuturuga.niko"
                      title="facebook" target="_blank"></SocialIcon>
                  </li>
                  <li>
                    <SocialIcon network="github" bgColor="#000000"
                      url="https://github.com/nicoleta-tuturuga"
                      title="github" target="_blank"></SocialIcon>
                  </li>
                </ul>
              </div>


              {/* <!-- Other travels section --> */}
              <div className="other-travels">
                <p className="title-header">Love for travel</p>
                <div className="other-photos-container">

                  <div className="d-flex">
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/05b79f59-8006-4d44-9afb-a5b69704c90e.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/35af7dba-ab07-4160-969a-7526d4a512c3.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/19fd0410-a760-459d-988a-6dd5d82b35fd.jpg')} alt="" />
                    </a>
                  </div>
                  <div className="d-flex">
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/47e6296d-5042-4a16-ba98-66accedda90e.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/85e446bd-4668-4ef2-b117-ab4f71723eef.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/29536ea1-7ca6-4eae-b04b-c04d112f5f87.jpg')} alt="" />
                    </a>
                  </div>
                  <div className="d-flex">
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/f0653171-8aaa-445f-b3f2-9db5f687f171.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/781f1ec4-895f-4bea-b20b-883d4edd0646.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/840196eb-9970-4d05-9c0d-2dd709e1c0bb.jpg')} alt="" />
                    </a>
                  </div>
                  <a href="#gallery-grid">
                    <button type="button" className="custom-styled-btn">More travels</button>
                  </a>
                </div>
              </div>

              {/* <!-- Cooking section --> */}
              <div className="cooking">
                <p className="title-header">Passion for cooking sweets</p>
                <div className="other-photos-container">
                  <div className="d-flex">
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/a5bf70ed-6fdc-4fe9-bc6c-c4ffa006b2b9.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/a1bdadae-f3ee-44bd-a891-fb8c457cee4d.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/ac1d73e3-236c-4b1e-8b1d-fe71ccf129ec.jpg')} alt="" />
                    </a>
                  </div>
                  <div className="d-flex">
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/b6c4b7c9-cb29-4a43-8eaa-76fbc42a1ce2.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/684d407a-d36c-486e-8f13-ae44c0ae5214.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/32104e36-d96a-4f07-b0c9-d16c2fceb7c2.jpg')} alt="" />
                    </a>
                  </div>
                  <div className="d-flex">
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/6be3843f-8fcf-44a3-b335-38fab1a492ee.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/017be026-4669-45c2-8e33-3dd8eca92010.jpg')} alt="" />
                    </a>
                    <a href="#gallery-grid">
                      <img
                        src={require('../../assets/images/hobbies/10506f92-bad0-4f56-b0f8-c54030bcafd3.jpg')} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="gallery-grid" className="travel-gallery">
          <p id="head-title">More photos from my travels</p>
          <Gallery images={IMAGES} />

        </div>

        <SideBarNavbar></SideBarNavbar>

        <StickyBtn></StickyBtn>

      </div>

      <Footer />

    </div >
  )
}

export default Hobbies;