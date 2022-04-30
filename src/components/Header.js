// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Coffeeandblunt" />

            <div className='header__content'>
                <h1>Ayo, I'm Coffeeandblunt</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:coffeeandblunt.eth@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;