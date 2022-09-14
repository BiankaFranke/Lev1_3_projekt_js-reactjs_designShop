import './Header.css';
import '../App.css';

const Header = () => {
    return ( 
        <nav>
            <ul>
                <div>
                    <li id='logo'><h1>THE DESIGN SHOP</h1></li>
                </div>
                <div>                
                    <div>
                        <li><a href='#'>Featured</a></li>
                        <li><a href='#'>Lifestyle</a></li>
                        <li><a href='#'>Books</a></li>
                        <li><a href='#'>Digital</a></li>
                    </div>
                    <div>
                        <li><a href='#'>Weekly Picks</a></li>
                        <li><a href='#'>The Design Blog</a></li>
                    </div>
                </div>
            </ul>
        </nav>
     );
}
 
export default Header;