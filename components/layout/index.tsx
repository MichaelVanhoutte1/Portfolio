import Navbar from "../navbar";
import Footer from "../footer";
import Hero from "../hero";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface LayoutProps {
    children: any;
}

const LayoutComponent = ({ children }: LayoutProps) => {
    const router = useRouter();
    const [ isHomepage , setIsHomepage ] = useState<boolean>(router.pathname === "/" ? true : false)

    useEffect(() => {
        setIsHomepage(router.pathname === "/" ? true : false)
    },[router.pathname])
    
    return (
        <>
            <Navbar />
            {isHomepage && <Hero /> }
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default LayoutComponent;
