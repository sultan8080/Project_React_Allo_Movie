
export default function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">ALLO-MOVIE</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <CustomLink href="/"> Accueil </CustomLink>
                    <CustomLink href="/Mesfavoris"> Mesfavoris </CustomLink>
                    {/* <li className="nav-item">
                        <a className="nav-link active" href="/">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Mesfavoris">Mes Favoris</a>
                    </li> */}
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            </div>
        </div>
    </nav>
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <>
            <li className="nav-item">
                <a className={path === href ? "active nav-link" : "nav-link"} href={href} {...props}> {children}</a>
            </li>
        </>
    )

}