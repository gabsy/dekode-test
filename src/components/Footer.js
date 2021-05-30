import { Grid, Row, Col } from 'react-flexbox-grid';
import logo from './../assets/logo.svg';
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="inner-block">
                <div className="logo-footer">
                    <img src={logo} alt="Purple Circles"/>
                </div>
                <Grid fluid className="flexbox-grid">
                    <Row>
                        <Col xs={12} sm={6} md={4}>
                            <ul>
                                <li>
                                    Dekode AS
                                </li>
                                <li>
                                    Tlf: 23 08 00 00
                                </li>
                                <li>
                                    E-post: info@dekode.no
                                </li>
                                <li>
                                   &nbsp;
                                </li>
                                <li>
                                    Tollbugata 11, Oslo
                                </li>
                                <li>
                                    Postboks 489 Sentrum, 0105 Oslo
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <ul>
                                <li>
                                    <a href="/">Tjenester</a>
                                </li>
                                <li>
                                    <a href="/">Produkter</a>
                                </li>
                                <li>
                                    <a href="/">Kontakt</a>
                                </li>
                                <li>
                                    <a href="/">Abonnement</a>
                                </li>
                                <li>
                                    <a href="/">Logg inn</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <ul>
                                <li>
                                    <a href="/">Personvernerklæring</a>
                                </li>
                                <li>
                                    <a href="/">Cookies</a>
                                </li>
                                <li>
                                    <a href="/">Language: ENG (US)</a>
                                </li>
                                <li>
                                    &nbsp;
                                </li>
                                <li>
                                    <SocialIcons/>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
