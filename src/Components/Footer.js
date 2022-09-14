import '../App.css';
import './Footer.css';

// import twitter from './Img/twitter.svg';
// import facebook from './Img/facebook.svg';
// import pinterest from './Img/pinterest.svg';
// import instagram from './Img/instagram.svg';

const Footer = () => {
    return ( 
        <footer>
            <div className='info'>
                <div>
                    <h2>Info</h2>
                    <p className='footerGrey'>Carefully curated online design store. Featuring simple, beautiful and thoughtfully designed products for everyday use.</p>
                </div>
                <div>
                    <h2>Get in touch</h2>
                    <p>hello@thedesignshop.com</p>
                    <p className='footerGrey'>Los Angeles, CA</p>
                </div>
                <div>
                    <h2>Newsletter</h2>
                    <p><span>Sign up</span> for the latest arrivals, special offers and weekly picks.</p>
                </div>
                <div>
                    <h2>Follow us</h2>
                </div>
            </div>

            <div className='copyright'>
                <div>
                    <p>(C) 2021 The Design Shop</p>
                </div>

                <div className='shortCuts'>
                    <p>Disclaimer</p>
                    <p>Shop</p>
                    <p>Weekly picks</p>
                </div>

                <div className='madeBy'>
                    <p><span>Made/Curated by</span> Ruby Bacanovic</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;