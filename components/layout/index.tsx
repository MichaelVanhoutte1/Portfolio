import Navbar from "../navbar";
import Footer from "../footer";

interface LayoutProps {
    children: any;
}

const LayoutComponent = ({ children }: LayoutProps) => {
    return (
        <>
            {/* <Navbar /> */}
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default LayoutComponent;
