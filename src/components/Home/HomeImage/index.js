
import './index.css'

function HomeImage(){
    return(
        <div className="home-image-bg-container">
            <div className="home-image-sub-container">
                <h1 className="app-main-heading" style={{color:"#fff"}} >MERI MASJID</h1>
                <p className="app-para-text" style={{color:"#fff"}}>Grow community of your Masjid by new technology!</p>
                <div className="home-page-button-container">
                    <button className="app-container-button">REGISTER YOUR MASJID NOW</button>
                    <button className="app-container-button-1">SELECT MASJID</button>
                </div>
            </div>
        </div>
    )
}
export default HomeImage