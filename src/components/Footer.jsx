function Footer() {
    return (
        <footer
            id="contact"
            style={{
                padding: "40px",
                marginTop: "40px",
                backgroundColor: "#222",
                color: "white",
                textAlign: "center"
            }}
        >

            <h2>Sign up for our daily insider</h2>

            <div>
                <input
                    type="email"
                    placeholder="Enter your email"
                />

                <button>
                    Subscribe
                </button>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "80px",
                marginTop: "30px",
                flexWrap: "wrap"
            }}>

                <div>
                    <h3>Explore</h3>
                    <p>Home</p>
                    <p>Questions</p>
                    <p>Articles</p>
                    <p>Tutorials</p>
                </div>

                <div>
                    <h3>Support</h3>
                    <p>FAQs</p>
                    <p>Help</p>
                    <p>Contact Us</p>
                </div>

                <div>
                    <h3>Stay Connected</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </div>

            </div>

            <p>DEV@Deakin 2026</p>

        </footer>
    )
}

export default Footer