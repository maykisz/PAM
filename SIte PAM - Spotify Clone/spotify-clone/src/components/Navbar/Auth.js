import { Menu } from '@headlessui/react';
import { Icon } from 'Icons';


function Auth() {
    const user = {
        name: "Maykon e Vinicius",
        avatar: "https://i.pinimg.com/736x/6f/9f/27/6f9f27fd878df271b36b599377b46c20.jpg"
    }

    return (

        <Menu as="nav" className={"relative"}>
            {({ open }) => (
                <>
                    <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'}`}>
                        <img className={"w-8 h-8 rounded-full p-0.5 mr-2"} src={user.avatar} alt={"furkan's"} />
                        <span className={"text-sm font-semibold mr-2"}>{user.name}</span>
                        <span className={`${open && 'rotate-180'}`}>
                            <Icon name="downDir" size={16} />
                        </span>
                    </Menu.Button>
                    <Menu.Items className="w-48 rounded absolute top-full right-0 bg-active translate-y-2 z-10">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 text-sm items-center justify-between px-2 rounded flex ${active && 'bg-white bg-opacity-10'}`}
                                    href="/account-settings"
                                >
                                    Configurações do Perfil
                                    <Icon size={16} name="external" />
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 text-sm items-center justify-between px-2 rounded flex ${active && 'bg-white bg-opacity-10'}`}
                                    href="/profile"
                                >
                                    Sua conta
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 text-sm items-center justify-between px-2 rounded flex ${active && 'bg-white bg-opacity-10'}`}
                                    href="/logout"
                                >
                                    Sair
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>

    )
}

export default Auth;