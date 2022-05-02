import image from '../img/Logo.svg';
export function Header () {
return(
<header className='header'>
    <div className='container-img'>
        <img src={image} alt="Logo softopic paradise img" className='img' />
    </div>
    <nav className='navigation'>
        <ul className='navigation__ul'>
            <li className='navigation__ul-li'>
                <a
                href='#home'
                className='link'>
                    Home
                </a>
            </li>
            <li className='navigation__ul-li'>
                <a
                href='#quienes-somos'
                className='link'>
                    Quienes somos?
                </a>
            </li>
            <li  className='navigation__ul-li'>
                <a
                href='#trabajamos'
                className='link'>
                    Trabajamos con
                </a>
            </li>
            <li  className='navigation__ul-li'>
                <a
                href='#crew'
                className='link'>
                    Nuestro equipo
                </a>
            </li>
        </ul>
    </nav>
</header>
    )
}