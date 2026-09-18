function Header() {
    return (
        <header style={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd"
        }}>

            <h1>DEV@Deakin</h1>

            <nav>
                <a href="#about" style={{ margin: "10px" }}>About</a>
                <a href="#articles" style={{ margin: "10px" }}>Articles</a>
                <a href="#tutorials" style={{ margin: "10px" }}>Tutorials</a>
                <a href="#contact" style={{ margin: "10px" }}>Contact</a>
            </nav>

        </header>
    )
}

export default Header