import { useEffect, useState } from "react";

function CursorFollower() {
    const [pos, setPos] = useState({ x: 0, y: 1000 });

    useEffect(() => {
        const move = (e) => {
            setPos({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", move);

        return () => {
        window.removeEventListener("mousemove", move);
        };
    }, []);

    return (
        <div
        // backdrop-blur-sm
        className="backdrop-invert fixed top-0 left-0 h-20 w-20 z-99 pointer-events-none"
        style={{
            transform: `translate(${pos.x-40}px, ${pos.y-36}px)`,
        }}
        />
    );
}

export default CursorFollower;