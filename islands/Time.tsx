/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";


export default function TimeIsland() {
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date();

            setCurrentTime(
                `${today.getHours()} hrs ${today.getMinutes()} minutes ${today.getSeconds()} seconds`
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [])
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
    }}>
    <p style={{ fontSize: "2rem", fontWeight: "bold", letterSpacing: "2px" }}>{currentTime}</p>

    </div>
  );
}
