import React from "react";

import "./Hobbies.css";
import "../sideLinkPage.css";

import SideBarNavbar from "../Header/SideBarNavbar";
import Carousel from "../Carousel";
import Gallery from 'react-grid-gallery';

import StickyBtn from "../buttons/StickyBtn";
import ExpandableText from "../buttons/ExpandableText";

const Hobbies = () => {

    const carouselImages = [
        require('../../assets/images/carousel/2.jpeg'),
        require('../../assets/images/carousel/3.jpeg'),
        require('../../assets/images/carousel/4.jpeg')
    ]

    // const IMAGES = [
    //     {
    //         src: require('../../assets/images/hobbies/05b79f59-8006-4d44-9afb-a5b69704c90e.jpg'),
    //         thumbnail: require('../../assets/images/hobbies/05b79f59-8006-4d44-9afb-a5b69704c90e.jpg'),
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 174,
    //         isSelected: true,
    //         caption: "After Rain (Jeshu John - designerspics.com)"
    //     }
    // ]

    const IMAGES =
        [
            {
                src: require('../../assets/images/hobbies/05b79f59-8006-4d44-9afb-a5b69704c90e.jpg'),
                thumbnail: require('../../assets/images/hobbies/05b79f59-8006-4d44-9afb-a5b69704c90e.jpg'),
                thumbnailWidth: 120,
                thumbnailHeight: 140,
                isSelected: true,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: require('../../assets/images/hobbies/35af7dba-ab07-4160-969a-7526d4a512c3.jpg'),
                thumbnail: require('../../assets/images/hobbies/35af7dba-ab07-4160-969a-7526d4a512c3.jpg'),
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                caption: "Boats (Jeshu John - designerspics.com)"
            },

            {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },
            {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: true,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                caption: "Boats (Jeshu John - designerspics.com)"
            },

            {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212
            }]

    return (
        <div>

            {/* <!-- Hobbies --> */}
            <div class="hobbies-page">
                <div className="side-link-page">
                    <p>hobbies</p>
                </div>
                <p id="head-title">Hobbies</p>


                <div class="container">

                        <div class="hobbies-container main-area d-flex flex-wrap">
                            {/* <!-- First main column --> */}
                            <div class="col1 col-lg-8">

                                <Carousel 
                                    carouselImg={carouselImages}>
                                </Carousel>


                                {/* <!-- Other related articles section --> */}
                                <div class="other-articles">
                                    <p>Read about my travels: </p>
                                    <div class="article-first-row row d-flex">
                                        <div class="article-col col-xs-12 col-lg-6">
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/0919db4e-1fbe-4ba1-b6f2-cc5762f27de4.jpg')} />
                                            </a>
                                            <h2 class="entry-header">
                                                <a href="#">
                                                    <p class="title-header">Title here...</p>
                                                </a>
                                            </h2>
                                            <div class="meta-header d-flex">
                                                <p>Posted on <time class="entry-time">October 10, 2019</time></p>
                                                <a href="#">
                                                    <p>-Leave a comment</p>
                                                </a>
                                            </div>
                                            <ExpandableText>
                                                <p>
                                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                                    in
                                                    their infancy. Various versions have evolved over the years, sometimes by accident,
                                                    sometimes on purpose (injected humour and the like).
                                    </p>
                                            </ExpandableText>
                                            {/* <button type="button" class="btn btn-outline-dark">Read more</button> */}
                                        </div>

                                        <div class="article-col col-xs-12 col-lg-6">
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/7940779e-6f86-4a82-9f03-6f5d41eff004.jpg')} />
                                            </a>
                                            <h2 class="entry-header">
                                                <a href="#">
                                                    <p class="title-header">Title here...</p>
                                                </a>
                                            </h2>
                                            <div class="meta-header d-flex">
                                                <p>Posted on <time class="entry-time">October 10, 2019</time></p>
                                                <a href="#">
                                                    <p>-Leave a comment</p>
                                                </a>
                                            </div>
                                            <ExpandableText>
                                                <p>
                                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                                    in
                                                    their infancy. Various versions have evolved over the years, sometimes by accident,
                                                    sometimes on purpose (injected humour and the like).
                                        </p>

                                            </ExpandableText>
                                        </div>
                                    </div>
                                    <div class="article-second-row row">
                                        <div class="article-col col-xs-12 col-lg-6">
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/b16a90ad-a8b6-48e2-b072-9dad323aaec8.jpg')} />
                                            </a>
                                            <h2 class="entry-header">
                                                <a href="#">
                                                    <p class="title-header">Title here...</p>
                                                </a>
                                            </h2>
                                            <div class="meta-header d-flex">
                                                <p>Posted on <time class="entry-time">October 10, 2019</time></p>
                                                <a href="#">
                                                    <p>-Leave a comment</p>
                                                </a>
                                            </div>
                                            <p>
                                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                                default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                                in
                                                their infancy. Various versions have evolved over the years, sometimes by accident,
                                                sometimes on purpose (injected humour and the like).
                            </p>
                                            <button type="button" class="btn btn-outline-dark">Read more</button>
                                        </div>
                                        <div class="article-col col-xs-12 col-lg-6">
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/991e8b73-21f8-437e-ae3f-96fa03b164f8.jpg')} />
                                            </a>
                                            <h2 class="entry-header">
                                                <a href="#">
                                                    <p class="title-header">Title here...</p>
                                                </a>
                                            </h2>
                                            <div class="meta-header d-flex">
                                                <p>Posted on <time class="entry-time">October 10, 2019</time></p>
                                                <a href="#">
                                                    <p>-Leave a comment</p>
                                                </a>
                                            </div>
                                            <p>
                                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                                default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                                in
                                                their infancy. Various versions have evolved over the years, sometimes by accident,
                                                sometimes on purpose (injected humour and the like).
                            </p>
                                            <button type="button" class="btn btn-outline-dark">Read more</button>
                                            <br />
                                            <button type="button" class="btn more-btn btn-outline-dark">More related
                                articles...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Sidebar - second main column --> */}
                            <div class="col2 col-lg-4 d-flex flex-column">

                                {/* <!-- Social network icons --> */}
                                <div class="widget-wrap-social-networks">
                                    <p class="title-header">Follow me on</p>
                                    <ul class="social-networks d-flex justify-content-between">
                                        <li>
                                            <a href="https://www.instagram.com/nicotuturuga/?igshid=19603gdl5y8a0&fbclid=IwAR2ilC241XTONY6kJr3a2XzwEyorZI-x8CdL7uQzFFudpa7Ngy9YRp1VuFk"
                                                title="Instagram" target="blank">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-facebook-square"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-envelope"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-pinterest"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* <!-- Search bar --> */}
                                <form class="search-from">
                                    <label class="title-header" for="search">Search on the blog</label>
                                    <div class="d-flex">
                                        <input type="text" id="search" placeholder="Search this website" />
                                        <button type="submit">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </form>

                                {/* <!-- Other travels section --> */}
                                <div class="other-travels">
                                    <p class="title-header">Other travels</p>
                                    <div class="other-photos-container">

                                        <div class="d-flex">

                                            {/* <Gallery images={IMAGES}/> */}

                                            <a href="#gallery-grid">
                                                <img
                                                    src={require('../../assets/images/hobbies/05b79f59-8006-4d44-9afb-a5b69704c90e.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/35af7dba-ab07-4160-969a-7526d4a512c3.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/19fd0410-a760-459d-988a-6dd5d82b35fd.jpg')} />
                                            </a>
                                        </div>
                                        <div class="d-flex">
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/47e6296d-5042-4a16-ba98-66accedda90e.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/85e446bd-4668-4ef2-b117-ab4f71723eef.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/29536ea1-7ca6-4eae-b04b-c04d112f5f87.jpg')} />
                                            </a>
                                        </div>
                                        <div class="d-flex">
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/f0653171-8aaa-445f-b3f2-9db5f687f171.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/781f1ec4-895f-4bea-b20b-883d4edd0646.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/840196eb-9970-4d05-9c0d-2dd709e1c0bb.jpg')} />
                                            </a>
                                        </div>
                                        <button type="button" class="btn btn-outline-dark">More travels</button>
                                    </div>
                                </div>

                                {/* <!-- Cooking section --> */}
                                <div class="cooking">
                                    <p class="title-header">Sweets</p>
                                    <div class="other-photos-container">
                                        <div class="d-flex">
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/a5bf70ed-6fdc-4fe9-bc6c-c4ffa006b2b9.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/a1bdadae-f3ee-44bd-a891-fb8c457cee4d.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/ac1d73e3-236c-4b1e-8b1d-fe71ccf129ec.jpg')} />
                                            </a>
                                        </div>
                                        <div class="d-flex">
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/b6c4b7c9-cb29-4a43-8eaa-76fbc42a1ce2.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/684d407a-d36c-486e-8f13-ae44c0ae5214.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/32104e36-d96a-4f07-b0c9-d16c2fceb7c2.jpg')} />
                                            </a>
                                        </div>
                                        <div class="d-flex">
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/6be3843f-8fcf-44a3-b335-38fab1a492ee.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/017be026-4669-45c2-8e33-3dd8eca92010.jpg')} />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src={require('../../assets/images/hobbies/10506f92-bad0-4f56-b0f8-c54030bcafd3.jpg')} />
                                            </a>
                                        </div>
                                        <button type="button" class="btn btn-outline-dark">More sweets</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>

                <div id="gallery-grid">
                    <Gallery images={IMAGES} />

                </div>

                <SideBarNavbar></SideBarNavbar>

                <StickyBtn></StickyBtn>

            </div>
        </div >
    )
}

export default Hobbies;