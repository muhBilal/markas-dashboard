import Footer from './Footer';
import Header from './Header';
import MobileNavbar from './MobileNavbar';
import Script from './Script';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            {/* header */}
            <Header />
            <MobileNavbar />
            <main className="main">
                {/* sidebar */}
                    <Sidebar />
                <div className='box-content'>
                    <div>{children}</div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default Layout;
