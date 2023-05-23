import { useState } from "react";
import { pageView } from "../types/pageView";

/**
 * Landing page component with two buttons, changes pageview
 */
function Landing({ setView }: { setView: any }) {

    const [isCreateGameButtonDisabled, setCreateGameButtonDisabled] = useState(false);
    const [isJoinGameButtonDisabled, setJoinGameButtonDisabled] = useState(false);

    const handleCreateGameClick = () => {
        setView(pageView.HOST_DETAILS);
        setCreateGameButtonDisabled(true);
    };

    const handleJoinGameClick = () => {
        setView(pageView.JOIN_DETAILS);
        setJoinGameButtonDisabled(true);
    };

    return (
        <div id="landing">
            <button disabled={isCreateGameButtonDisabled} onClick={handleCreateGameClick}>
                Create Game
            </button>
            <button disabled={isJoinGameButtonDisabled} onClick={handleJoinGameClick}>
                Join Game
            </button>
        </div>
    )
}

export default Landing;