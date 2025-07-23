import './hero.css';

const Hero = () => {

    return (
        <div className='hero-container'>
            <div className='title-container'>
                <h1 className='cursor typewriter-animation'>Membantu Menemukan <br />Rumah Yang Anda Inginkan</h1>
                <p>Rumah singgah hadir untuk membantu anda merekomendasikan rumah yang aman dan lingkungan yang nyaman</p>
                <div className="button-group">
                    <button className='explore-button'>Temukan Rumah</button>
                    <button className='Layanan-button'>Layanan Kami</button>
                </div>
            </div>
        
            <div className="hero-image">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    );
}

export default Hero;