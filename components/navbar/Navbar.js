import Link from 'next/link'

function Navbar() {
    return (
        <nav className='header'>
            <h1 className='logo'>
                <Link href='/'>
                    <a>405</a>
                </Link>
            </h1>
            <ul className='main-nav loaded'>
                <li>
                    <Link href='/'>
                        <a>Inicio</a>
                    </Link>
                </li>
                <li>
                    <Link href='/clientes'>
                        <a>Clientes</a>
                    </Link>
                </li>
                <li>
                    <Link href='/corridas'>
                        <a>Corridas</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar