import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return <nav className="dark:bg-gray-900 mx-20">
        <div className="flex flex-wrap items-center justify-between p-3">
            <Link to="/allo-movie">
                <div className="flex items-center">
                    <i class="bi bi-film" ></i>
                    <span className="mr-3 rotate-90 text-cyan-400">
                        <i class="bi bi-film" width="20" height="18" ></i>
                    </span>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-400">
                        ALLO-MOVIE</span>
                </div>
            </Link>

            <ul className="flex p-4 text-cyan-500 gap-4 items-center ">
                <CustomLink to="/"> ACCUEIL </CustomLink>
                <CustomLink to="/Mesfavoris">MES FAVORIS </CustomLink>
            </ul>
        </div>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <>
            <li className=" hover:text-cyan-100">
                <Link className={isActive ? "text-cyan-500" : ""} to={to} {...props}> {children}</Link>
            </li>
        </>
    )

}