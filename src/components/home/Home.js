import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";

const toursData = require("../data/db.json");

function Home(props) {
    return (
        <>
        <Header/>
        {
            toursData.map(tour => {
                return (
                    <Tours id = {`id: (${tour.id})`} name = {tour.name} info = {tour.info} price = {tour.price} image = {tour.image} alt = "image" />
                )
            })
            
        }
        <Footer/>
        </>
    )
}

export default Home;