
function HostDetails({ setView }: { setView: any }) {
    return (
        <div id="host-details">
            <input id="player-count" type="text" placeholder="Enter Exact Number of Players" />
            <button>Start Game</button>
        </div>
    )
}

export default HostDetails;