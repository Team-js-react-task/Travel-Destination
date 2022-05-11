import { Link } from "react-router-dom";

function Tours(props) {
    return (
        <>
            <Link to={`city/${props.id}`}>
                <div style={{ textAlign: "center" }}>

                    <h2>{props.name}</h2>
                    <img src={props.image} alt={props.alt} />

                    {/* <p style={{ background: "#dddd", maxWidth: "80%", marginLeft: "150px" }}>{props.info}</p> */}

                    {/* <h3>{props.price}</h3> */}
                    {/* <h5>{props.id}</h5> */}


                </div>
            </Link>
        </>
    )
}

export default Tours;