import { Icon } from 'Icons';
import { NavLink, useMatch } from 'react-router-dom';

function Menu() {
    const homeButton = useMatch("/")
    const searchButton = useMatch("/search")
    const libraryButton = useMatch("/collection/playlists")

    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink
                        to={"/"}
                        className={({ isActive }) => "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4" + (isActive ? ' active' : '')}>
                        <span>
                            {
                                homeButton ? <Icon name="activeHome" /> : <Icon name="home" />
                            }

                        </span>
                        Início
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/search"}
                        className={({ isActive }) => "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4" + (isActive ? ' active' : '')}>
                        <span>
                            {
                                searchButton ? <Icon name="activeSearch" /> : <Icon name="search" />
                            }
                        </span>
                        Pesquisar
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/collection/playlists"}

                        className={({ isActive }) => "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4" + (isActive ? ' active' : ' ')}>
                        <span>
                            {
                                libraryButton ? <Icon name="collectionActive" /> : <Icon name="collection" />
                            }
                        </span>
                        Sua Biblioteca
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Menu