import { useEffect, useState } from "react";

const EnveloppeAnimationComponent = () => {
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    if (typeof window === "undefined") {
        return <></>;
    } else {
        return (
            <>
                <body>
                    <div id="card">
                        <div className="heart"></div>
                        <div className="heart1"></div>
                        <div className="heart2"></div>
                        <div className="heart3"></div>
                        <div className="heart4"></div>
                    </div>
                </body>
            </>
        );
    }
};

export default EnveloppeAnimationComponent;
