import './index.css';
import $ from 'jquery'; 
import Suite_Balcony from '../src/img/room/Suite_Balcony.jpg';
import Diamond_Bar_Day_Light_1 from '../src/img/room/Diamond-Bar-Day-Light-1.jpg';
import Classic_Room from '../src/img/room/ClassicRoom.jpg';
import Deluxe_Room from '../src/img/room/Delexu.jpg';
import Family_Room from '../src/img/room/Family.jpg';
import Junior_Room from '../src/img/room/junior.jpg';
import Excutive_Room from '../src/img/room/excutive.jpg';
import Vip_Room from '../src/img/room/Vip.jpg';
import President_Room from '../src/img/room/president.jpg'

import event_1 from '../src/img/events/1.jpg';
import event_2 from '../src/img/events/2.jpg';
import event_3 from '../src/img/events/3.jpg';

import news_1 from '../src/img/news/1.jpg'; 
import news_2 from '../src/img/news/2.jpg';
import news_3 from '../src/img/news/3.jpg';

import feedback_1 from '../src/img/feedback/1.PNG';
import feedback_2 from '../src/img/feedback/2.PNG';
import feedback_3 from '../src/img/feedback/3.PNG';
import feedback_4 from '../src/img/feedback/4.PNG';
import feedback_5 from '../src/img/feedback/5.jpg';
import feedback_6 from '../src/img/feedback/6.JPG';
import feedback_7 from '../src/img/feedback/7.PNG';
import feedback_8 from '../src/img/feedback/8.PNG';
import feedback_9 from '../src/img/feedback/9.PNG';

import Sky_spa from '../src/img/services/Skybar.jpg';
import Restaurant from '../src/img/services/restaurant.jpg';
import Promotion from '../src/img/services/promotion.jpg';
import Club_Chill from '../src/img/services/clubchill.jpg';
import Swimming_Pool from '../src/img/services/pool.jpg';
import Spa from '../src/img/services/spa.jpg';

// import IMAGES_ROOM from '../src/img/img/room.js';
// import IMAGES_EVENTS from '../src/img/img/events.js';
// import IMAGES_NEWS from '../src/img/img/news.js';
// import IMAGES_FEEDBACK from '../src/img/img/feedback.js';
// import IMAGES_SERVICES from '../src/img/img/services.js';



function Main() {
    return (
        <div className="Main">
            <main id="content">
                {/* Introduce */}
                <div id="INTRO" className="introduce">
                    <div className="image-slider">
                        <div className="image-item">
                            <h1>Enjoy Your Life</h1>
                            <div className="btn_RM col-md-3 col-sm-3 col-xs-6">
                                <a href="" className="btn btn-sm animated-button victoria-two">Read More</a>
                            </div>
                            <img src={Suite_Balcony} alt="image" />
                            <div className="after"> </div>
                        </div>
                        <div className="image-item">
                            <h1>Your Journey Begins Here</h1>
                            <div className="btn_RM col-md-3 col-sm-3 col-xs-6">
                                <a href="" className="btn btn-sm animated-button victoria-two">Read More</a>
                            </div>
                            <img src={Diamond_Bar_Day_Light_1} alt="image" />
                            <div className="after"> </div>
                        </div>
                    </div>
                </div>
                {/* ROOMS & SUITES */}
                <h1 style={{ fontWeight: 500, color: '917300', marginLeft: 50, fontFamily: '"Playfair Display", serif' }}>
                    ROOMS &amp; SUITES
                </h1>
                <div id="ROOM_SUITES" className="rooms_suites">
                    <div className="container_room_types">
                        <div className="room_types">
                            <img src={Classic_Room} alt="image" />
                            <div className="room_types_content">
                                <h2>CLASSIC ROOM</h2>
                                <p>Comfy &amp; cozy, accommodate up to 2 persons.</p>
                                <p className="description">
                                    <ion-icon name="checkmark-outline" />
                                    <span>Free Wi-Fi / Breakfast</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="eye-outline" />
                                    <span>Window View: <b>Beach View</b> </span>
                                </p>
                                <p className="description">
                                    <ion-icon name="person-outline" />
                                    <span>Max. occupancy: 2 pax</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="bed-outline" />
                                    <span>Double Bed</span>
                                </p>
                                <div className="book_room">
                                    <a href><button className="custom-btn btn-1">Book Now</button></a>
                                    <p>500.000VND</p>
                                </div>
                            </div>
                        </div>
                        <div className="room_types">
                            <img src={Deluxe_Room} alt="image" />
                            <div className="room_types_content">
                                <h2>DELUXE ROOM</h2>
                                <p>Comfy &amp; cozy, accommodate up to 2 persons.</p>
                                <p className="description">
                                    <ion-icon name="checkmark-outline" />
                                    <span>Free Wi-Fi / Breakfast</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="eye-outline" />
                                    <span>Window View: <b>City New</b> </span>
                                </p>
                                <p className="description">
                                    <ion-icon name="person-outline" />
                                    <span>Max.Occupancy: 2 pax</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="bed-outline" />
                                    <span>Double Bed</span>
                                </p>
                                <div className="book_room">
                                    <a href=""> <button className="custom-btn btn-1">Book Now</button></a>
                                    <p>500.000VND</p>
                                </div>
                            </div>
                        </div>
                        <div className="room_types">
                            <img src={Family_Room} alt="image" />
                            <div className="room_types_content">
                                <h2>FAMILY ROOM</h2>
                                <p>Comfy &amp; cozy, accommodate up to 2 persons.</p>
                                <p className="description">
                                    <ion-icon name="checkmark-outline" />
                                    <span>Free Wi-Fi / Breakfast</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="eye-outline" />
                                    <span>Window View: <b>Ha Long Bay</b> </span>
                                </p>
                                <p className="description">
                                    <ion-icon name="person-outline" />
                                    <span>Max. occupancy: 2 pax</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="bed-outline" />
                                    <span>Double Bed</span>
                                </p>
                                <div className="book_room">
                                    <a href=""> <button className="custom-btn btn-1">Book Now</button></a>
                                    <p>500.000VND</p>
                                </div>
                            </div>
                        </div>
                        <div className="room_types">
                            <img src={Vip_Room} alt="image" />
                            <div className="room_types_content">
                                <h2>VIP ROOM</h2>
                                <p>Comfy &amp; cozy, accommodate up to 2 persons.</p>
                                <p className="description">
                                    <ion-icon name="checkmark-outline" />
                                    <span>Free Wi-Fi / Breakfast</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="eye-outline" />
                                    <span>Window View: <b>Horizon Line</b> </span>
                                </p>
                                <p className="description">
                                    <ion-icon name="person-outline" />
                                    <span>Max. occupancy: 2 pax</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="bed-outline" />
                                    <span>Double Bed</span>
                                </p>
                                <div className="book_room">
                                    <a href=""> <button className="custom-btn btn-1">Book Now</button></a>
                                    <p>500.000VND</p>
                                </div>
                            </div>
                        </div>
                        <div className="room_types">
                            <img src={President_Room} alt="image" />
                            <div className="room_types_content">
                                <h2>PRESIDENT ROOM</h2>
                                <p>Comfy &amp; cozy, accommodate up to 2 persons.</p>
                                <p className="description">
                                    <ion-icon name="checkmark-outline" />
                                    <span>Free Wi-Fi / Breakfast</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="eye-outline" />
                                    <span>Window View: <b>Sea Sunset</b> </span>
                                </p>
                                <p className="description">
                                    <ion-icon name="person-outline" />
                                    <span>Max. occupancy: 2 pax</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="bed-outline" />
                                    <span>Double Bed</span>
                                </p>
                                <div className="book_room">
                                    <a href=""> <button className="custom-btn btn-1">Book Now</button></a>
                                    <p>500.000VND</p>
                                </div>
                            </div>
                        </div>
                        <div className="room_types">
                            <img src={Junior_Room} alt="image" />
                            <div className="room_types_content">
                                <h2>JUNIOR SUITE</h2>
                                <p>Comfy &amp; cozy, accommodate up to 2 persons.</p>
                                <p className="description">
                                    <ion-icon name="checkmark-outline" />
                                    <span>Free Wi-Fi / Breakfast</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="eye-outline" />
                                    <span>Window View: <b>Skyscraper</b> </span>
                                </p>
                                <p className="description">
                                    <ion-icon name="person-outline" />
                                    <span>Max. occupancy: 2 pax</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="bed-outline" />
                                    <span>Double Bed</span>
                                </p>
                                <div className="book_room">
                                    <a href=""> <button className="custom-btn btn-1">Book Now</button></a>
                                    <p>500.000VND</p>
                                </div>
                            </div>
                        </div>
                        <div className="room_types">
                            <img src={Excutive_Room} alt="image" />
                            <div className="room_types_content">
                                <h2>EXECUTIVE SUITE</h2>
                                <p>Comfy &amp; cozy, accommodate up to 2 persons.</p>
                                <p className="description">
                                    <ion-icon name="checkmark-outline" />
                                    <span>Free Wi-Fi / Breakfast</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="eye-outline" />
                                    <span>Window View: <b>Sea City</b> </span>
                                </p>
                                <p className="description">
                                    <ion-icon name="person-outline" />
                                    <span>Max. occupancy: 2 pax</span>
                                </p>
                                <p className="description">
                                    <ion-icon name="bed-outline" />
                                    <span>Double Bed</span>
                                </p>
                                <div className="book_room">
                                    <a href=""> <button className="custom-btn btn-1">Book Now</button></a>
                                    <p>500.000VND</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HOTEL SERVICES */}
                <h1 style={{ fontWeight: 500, marginLeft: 50, fontFamily: '"Playfair Display", serif' }}>
                    <span style={{ color: '917300' }}>HOTEL</span> SERVICES
                </h1>
                <div className="hotel_service">
                    <ul className="hotel_service_flex cs-style-6">
                        <li>
                            <figure>
                                <img src={Sky_spa} alt="img01" />
                                <figcaption>
                                    <h3>Sky Bar</h3>
                                    <span>Bring a modern, youthful, friendly.</span>
                                    <a href="">Book Now</a>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={Restaurant} alt="img03" />
                                <figcaption>
                                    <h3>RESTAURANT</h3>
                                    <span>Serving signature dishes every day.</span>
                                    <a href="">Book Now</a>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={Promotion} alt="img04" />
                                <figcaption>
                                    <h3>PROMOTION</h3>
                                    <span>Acoustic coffee on the rooftop.</span>
                                    <a href="">Book Now</a>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={Spa} alt="img02" />
                                <figcaption>
                                    <h3>SPA</h3>
                                    <span>Coming Soon</span>
                                    <a href="http://dribbble.com/shots/1115960-Music">Book Now</a>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={Club_Chill} alt="img05" />
                                <figcaption>
                                    <h3>CLUB CHILL</h3>
                                    <span>Enjoy relaxing moments with friends.</span>
                                    <a href="http://dribbble.com/shots/1116775-Safari">Book Now</a>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={Swimming_Pool} alt="img06" />
                                <figcaption>
                                    <h3>SWIMMING POOL</h3>
                                    <span>A place to relax after a tiring day.</span>
                                    <a href="http://dribbble.com/shots/1118904-Game-Center">Book Now</a>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>

                {/* FEED BACK */}
                <h1 style={{ color: '917300', fontWeight: 500, marginLeft: 50, fontFamily: '"Playfair Display", serif' }}>
                    SHARE MOMENTS
                </h1>
                <div id="FEEDBACK" className="share_moment">
                    <div className="share_content_top">
                        <p><i style={{ color: '939393' }}>Share your moment with us!</i></p>
                        <h3>HAPPYHOTEL</h3>
                        <p><ion-icon name="logo-instagram" />Discover Happy Hotel through the eyes of our guests.
                            Share your experience with EAGLEHOTEL
                            and mention @HAPPYHOTEL for chance to be featured.</p>
                    </div>
                    <div className="feedback_container">
                        <div className="feedback_item">
                            <img src={feedback_1} alt="image" />
                        </div>
                        <div className="feedback_item">
                            <img src={feedback_2} alt="image" />
                        </div>
                        <div className="feedback_item">
                            <img src={feedback_3} alt="image" />
                        </div>
                        <div className="feedback_item">
                            <img src={feedback_4} alt="image" />
                        </div>
                        <div className="feedback_item">
                            <img src={feedback_5} alt="image" />
                        </div>
                        <div className="feedback_item">
                            <img src={feedback_6} alt="image" />
                        </div>
                        <div className="feedback_item">
                            <img src={feedback_7} alt="image" />
                        </div>
                        <div className="feedback_item">
                            <img src={feedback_8} alt="image" />
                        </div>
                        <div className="feedback_item">
                            <img src={feedback_9} alt="image" />
                        </div>
                    </div>
                </div>

                {/* NEWS */}
                <div className="hotel_news">
                    <div className="news_container">
                        <h1> NEWS </h1>
                        <div className="news_item">
                            <img src={news_1} alt="image" />
                            <div className="news_content">
                                <div className="news_content_top">
                                    <div className="data_news">
                                        <p>21</p>
                                        <p>NOVEMBER</p>
                                    </div>
                                    <h4>GEO - CULTURAL FACTORS</h4>
                                </div>
                                <p className="p_contentnews">The geo-cultural factor is the territory of the land, the specific
                                    characteristics and
                                    advantages of geographical position, the natural conditions that directly affect and
                                    leave a mark in the cultural life of residents. The culture of the residents of BR-VT...
                                </p>
                                <a href="">Read more <ion-icon name="arrow-forward-circle-outline" /></a>
                            </div>
                        </div>
                        <div className="news_item">
                            <img src={news_2} alt="image" />
                            <div className="news_content">
                                <div className="news_content_top">
                                    <div className="data_news">
                                        <p>25</p>
                                        <p>DECEMBER</p>
                                    </div>
                                    <h4>QUOC TU GIAM TEMPLE</h4>
                                </div>
                                <p className="p_contentnews">If you name the top tourist attractions in Hanoi in the past and
                                    now, perhaps everyone will immediately think of Van Mieu Quoc Tu Giam. This is a leading
                                    cultural...
                                </p>
                                <a href="">Read more <ion-icon name="arrow-forward-circle-outline" /></a>
                            </div>
                        </div>
                        <div className="news_item">
                            <img src={news_3} alt="image" />
                            <div className="news_content">
                                <div className="news_content_top">
                                    <div className="data_news">
                                        <p>21</p>
                                        <p>NOVEMBER</p>
                                    </div>
                                    <h4>HANOI OLD QUARTER...</h4>
                                </div>
                                <p className="p_contentnews">If you want to learn about the life, culture and people of Trang
                                    An, you should not ignore the old town - one of the tourist attractions in Hanoi full of
                                    interesting and attractive to...
                                </p>
                                <a href="">Read more <ion-icon name="arrow-forward-circle-outline" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* EVENT */}
                <div className="hotel_events">
                    <div className="events_container">
                        <div className="events_item">
                            <img src={event_1} alt="image" />
                            <div className="events_content">
                                <div className="events_content_top">
                                    <div className="data_events">
                                        <p>21</p>
                                        <p>NOVEMBER</p>
                                    </div>
                                    <h4>NGHINH ONG FESTIVAL</h4>
                                </div>
                                <p className="p_contentevents">Held at Lang Co Ong, Hoang Hoa Tham street, Vung Tau city, Nghinh
                                    Ong festival to honor Ca Ong. According to the concept of fishermen in Vung Tau coastal
                                    area,...
                                </p>
                                <a href="">Read more <ion-icon name="arrow-forward-circle-outline" /></a>
                            </div>
                        </div>
                        <div className="events_item">
                            <img src={event_2} alt="image" />
                            <div className="events_content">
                                <div className="events_content_top">
                                    <div className="data_events">
                                        <p>25</p>
                                        <p>DECEMBER</p>
                                    </div>
                                    <h4>TEMPLE FESTIVAL BA NGU HANH</h4>
                                </div>
                                <p className="p_contentevents">Festival of Ba Ngu Hanh Temple Together with the mausoleum of Mr.
                                    Nam Hai and the communal house of Thang Tam, the temple of Ba Ngu Hanh forms an
                                    architectural...
                                </p>
                                <a href="">Read more <ion-icon name="arrow-forward-circle-outline" /></a>
                            </div>
                        </div>
                        <div className="events_item">
                            <img src={event_3} alt="image" />
                            <div className="events_content">
                                <div className="events_content_top">
                                    <div className="data_events">
                                        <p>21</p>
                                        <p>NOVEMBER</p>
                                    </div>
                                    <h4>UNIQUE TRUNG CUU FESTIVAL IN VUNG TAU CITY</h4>
                                </div>
                                <p className="p_contentevents">Traveling to Vung Tau in September of lunar calendar, you will be
                                    participating in Trung Cuu festival. This festival is held every year, praying for
                                    peace, health and...
                                </p>
                                <a href="">Read more <ion-icon name="arrow-forward-circle-outline" /></a>
                            </div>
                        </div>
                        <h1> EVENTS </h1>
                    </div>
                </div>
                {/* MAPS */}
                <h1 style={{ color: '917300', fontWeight: 500, marginLeft: 50, fontFamily: '"Playfair Display", serif' }}>
                    LOCATION
                </h1>
                <div className="hotel_map">
                    <div className="maps_content">
                        <h1 style={{ textAlign: 'center', fontFamily: '"Montserrat", sans-serif', fontWeight: 600 }}>HAPPY HOTEL</h1>
                        <ion-icon name="location-outline" /><p>Address: 123 Nguyen Van Linh, Tp.Ho Chi Minh</p>
                        <br />
                        <ion-icon name="phone-portrait-outline" /><p>Phone: +84 123 456 789</p>
                        <br />
                        <ion-icon name="mail-unread-outline" /><p>Email:
                            <a href="mailto: trung@info.com.vn"> trung@info.com.vn</a></p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1712.8693326547511!2d106.68953587273144!3d10.733242136149904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f5caf944d0b%3A0x8d472bdaa02fcbaf!2sSweet%20Hotel!5e0!3m2!1svi!2s!4v1673868085019!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </main>
        </div>
    );
}



$(document).ready(function () {
	$(".image-slider").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		arrows: false


	});
});

$(document).ready(function () {
	$(".container_room_types").slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 2,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev_suites"><ion-icon name="arrow-back-outline"></ion-icon></button>',
		nextArrow: '<button type="button" class="slick-next_suites"><ion-icon name="arrow-forward-outline"></ion-icon></button>',

	});
});

$(document).ready(function () {
	$(".feedback_container").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 3,
		adaptiveHeight: true,
		speed: 700,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev_feedback"><ion-icon name="arrow-back-outline"></ion-icon></button>',
		nextArrow: '<button type="button" class="slick-next_feedback"><ion-icon name="arrow-forward-outline"></ion-icon></button>',
	});
});


export default Main;
