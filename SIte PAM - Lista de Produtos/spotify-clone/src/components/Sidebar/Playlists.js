function Playlists() {
    return (
        <div className="mx-6 mt-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
           <ul>
            {new Array(1).fill(
                <li>
                    <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
                        1. Playlist - Só as Puras
                    </a>
                    
                    <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
                        2. Playlist - Funks de Verdade
                    </a>
                    
                    <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
                        3. Playlist - Real Trap
                    </a>
                </li>
            )}
                
           </ul>
        </div>
    )
}

export default Playlists;
