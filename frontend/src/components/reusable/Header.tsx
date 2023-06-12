function clearData() {
    localStorage.clear();
    window.location.reload();
}

function Header() {
    return (
        <div id="header">
            <h1>Androids Within</h1>
            <div onClick={() => clearData()}>Reset</div>
        </div>
    )
}

export default Header;