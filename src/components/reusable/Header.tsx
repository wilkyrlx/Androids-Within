function clearData() {
    localStorage.clear();
    window.location.reload();
}

function quitClicked() {
    const r = window.confirm("Are you sure you want to quit?");
    if (r) {
        clearData();
    }
}

function Header() {
    return (
        <div id="header">
            <h1>Androids Within</h1>
            <div onClick={quitClicked}>Quit</div>
        </div>
    )
}

export default Header;