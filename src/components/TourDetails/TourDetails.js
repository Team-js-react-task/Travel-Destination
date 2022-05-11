import toursData from "../../data/db.json";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { useState } from 'react';

function TourDetails() {
    const { id } = useParams();
    // console.log(id);
    const [isShown, setShown] = useState(false);

    function clickhandle() {
        setShown(!isShown);
    }

    return (
        <>

            <Header />
            {
                toursData.filter((city) => city.id === id)
                    .map(
                        (el) => (
                            <>
                                <p>{el.name}</p>
                                <p>
                                    {isShown ? el.info : `${el.info.substring(0, 240)}`}
                                    {isShown ? <button onClick={clickhandle}>see less</button> : <button onClick={clickhandle}>see more</button>}
                                </p>
                                <p>{`  Price : ${el.price}$`}</p>
                                <img src={el.image}></img>
                            </>
                        )
                        //   console.log(el.name)
                    )}
        </>
    );

}
export default TourDetails;