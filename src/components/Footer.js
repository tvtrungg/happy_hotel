import '../assets/css/index.css';
import '../assets/css/responsive.css';


function Footer() {
    return (
        <div className="Footer">
            <footer id="FOOTER">
                <div className="footer_container">
                    <div className="footer-top">
                        <div className="footer_row">
                            <div className="col-md-6 col-lg-3 about-footer">
                                <h3>Communications </h3>
                                <ul>
                                    <li>
                                        <a href="tel:(+84) 1234 4321">
                                            <ion-icon name="call-outline" />
                                            (+84) 1234 4321
                                        </a>
                                    </li>
                                    <li><ion-icon name="location-outline" />
                                        123 Nguyễn Văn Cừ / TP.HCM
                                    </li>
                                </ul>
                                <a href className="btn red-btn">Book Now</a>
                            </div>
                            <div className="col-md-6 col-lg-2 page-more-info">
                                <div className="footer-title">
                                    <h4>Page links</h4>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Testimonial</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-3 page-more-info">
                                <div className="footer-title">
                                    <h4>More Info</h4>
                                </div>
                                <ul>
                                    <li><a href="#">PRIVACY POLICY</a></li>
                                    <li><a href="#">TERMS &amp; CONDITIONS</a></li>
                                    <li><a href="#">COVID - 19 SAFETY &amp; NOTICE</a></li>
                                    <li><a href="#">PAYMENT METHODS</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4 open-hours">
                                <div className="footer-title">
                                    <h4>Open hours</h4>
                                    <ul className="footer-social">
                                        <li><a href target="_blank"><ion-icon name="logo-facebook" /></a></li>
                                        <li><a href target="_blank"><ion-icon name="logo-instagram" /></a></li>
                                        <li><a href target="_blank"><ion-icon name="logo-linkedin" /></a></li>
                                    </ul>
                                </div>
                                <table className="footer_table">
                                    <tbody>
                                        <tr>
                                            <td><ion-icon name="time-outline" />Monday</td>
                                            <td>9:00am - 5:00pm</td>
                                        </tr>
                                        <tr>
                                            <td><ion-icon name="time-outline" />Friday</td>
                                            <td>9:00am - 4:00pm</td>
                                        </tr>
                                        <tr>
                                            <td><ion-icon name="time-outline" />Sturday</td>
                                            <td>9:00am - 1:30pm</td>
                                        </tr>
                                        <tr>
                                            <td><ion-icon name="time-outline" />Sunday</td>
                                            <td>9:30am - 12:00pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-bottom">
                        <div className="footer_row">
                            <div className="col-sm-8">
                                <p>Copyright © Happy Hotel 2023 | @vinhtrung.vn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    );
}

export default Footer;
