import '../assets/css/index.css';
import '../assets/css/responsive.css';
import logo from '../img/logo.PNG';

function Header() {
    return (
        <div className="Header">
            <header id="header">
                <div className="phone_mail">
                    <div className="phone">
                        <ion-icon style={{ marginRight: 5 }} name="phone-portrait-outline" />
                        <p>Phone: +84 123 456 789</p>
                    </div>
                    <div className="mail">
                        <ion-icon style={{ marginRight: 5 }} name="mail-outline" />
                        <p>Mail: vinhtrung@gmail.com</p>
                    </div>
                </div>
                <ul className="nav_menu">
                    <div className="nav_menu_top">
                        <div className="nav_menu_top_left">
                            <li>
                                <a href="#INTRO">Home</a>
                            </li>
                            <li>
                                <a href="#">About us</a>
                                <ion-icon name="chevron-down-outline" style={{ color: '#fff', fontSize: 17, transform: 'translate(-10px,3px)', cursor: 'pointer' }} />
                                <div className="subnav_menu sub_nav_about">
                                    <ul>
                                        <li> <a href>About us</a> </li>
                                        <li> <a href>Our Team</a> </li>
                                        <li> <a href>Testimonials</a> </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                            <a href="#ROOM_SUITES">Room & Suite</a>

                                <ion-icon name="chevron-down-outline" style={{ color: '#fff', fontSize: 17, transform: 'translate(-10px,3px)', cursor: 'pointer' }} />
                                <div className="subnav_menu sub_nav_about">
                                    <ul>
                                        <li> <a href>classic room</a> </li>
                                        <li> <a href>deluxe room</a> </li>
                                        <li> <a href>family room</a> </li>
                                        <li> <a href>junior room</a> </li>
                                        <li> <a href>excutive room</a> </li>
                                        <li> <a href>vip room</a> </li>
                                        <li> <a href>president room</a> </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#FEEDBACK">Dinning & Experience</a>
                                <ion-icon name="chevron-down-outline" style={{ color: '#fff', fontSize: 17, transform: 'translate(-10px,3px)', cursor: 'pointer' }} />
                                <div className="subnav_menu sub_nav_about">
                                    <ul>
                                        <li> <a href>restaurant</a> </li>
                                        <li> <a href>sky bar</a> </li>
                                        <li> <a href>spa</a> </li>
                                        <li> <a href>promotion</a> </li>
                                        <li> <a href>CLUB CHILL</a> </li>
                                        <li> <a href>SWIMMING POOL</a> </li>
                                    </ul>
                                </div>
                            </li>
                        </div>

                        <li>
                            <img src={logo} alt />
                        </li>

                        <div className="nav_menu_top_right">
                            <li>
                                <a href>New &amp; Event</a>
                                <ion-icon name="chevron-down-outline" style={{ color: '#fff', fontSize: 17, transform: 'translate(-10px,3px)', cursor: 'pointer' }} />
                                <div className="subnav_menu sub_nav_about">
                                    <ul>
                                        <li> <a href>cuisine</a> </li>
                                        <li> <a href>DESTINATION</a> </li>
                                        <li> <a href>PLAY POINT</a> </li>
                                        <li> <a href>EXPERIENCE</a> </li>
                                        <li> <a href>FESTIVAL</a> </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href>Tour Service</a>
                                <ion-icon name="chevron-down-outline" style={{ color: '#fff', fontSize: 17, transform: 'translate(-10px,3px)', cursor: 'pointer' }} />
                                <div className="subnav_menu sub_nav_about">
                                    <ul>
                                        <li> <a href>HANOI CITY TOUR</a> </li>
                                        <li> <a href>STREET FOOD TOUR</a> </li>
                                        <li> <a href>SAPA TOUR</a> </li>
                                        <li> <a href>NINH BINH TOUR</a> </li>
                                        <li> <a href>TRAVEL GUIDE</a> </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href>Gallery</a>
                            </li>
                            <li>
                                <a href>Contact</a>
                            </li>
                        </div>


                    </div>
                    <div className="nav_menu_bot">
                        <hr width="100%" size={0} color="#ccc" />
                    </div>
                </ul>
            </header>

        </div>
    );
}

export default Header;
