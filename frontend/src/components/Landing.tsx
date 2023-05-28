import { useState } from "react";
import { pageView } from "../types/pageView";

// Landing page, has two buttons for users to click to either host or join a game
// Create Game button => pageView.HOST_DETAILS
// Join Game button => pageView.JOIN_DETAILS
function Landing({ setView }: { setView: any }) {

    return (
        <div id="landing" className="container">
            <button className="button" onClick={() => setView(pageView.HOST_DETAILS)}> Create Game </button>
            <button className="button" onClick={() => setView(pageView.JOIN_DETAILS)}> Join Game </button>
        </div>
    )
}

export default Landing;