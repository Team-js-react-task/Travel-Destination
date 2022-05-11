

function Tours(props) {
    return (

        <div style={{ textAlign: "center" }}>
            <h2>{props.name}</h2>
            <p style={{ background: "#dddd", maxWidth: "80%", marginLeft: "150px" }}>{props.info}</p>
            <h3>{props.price}</h3>
            <h5>{props.id}</h5>
            <img src={props.image} alt={props.alt} />
        </div>
    )
}

export default Tours;