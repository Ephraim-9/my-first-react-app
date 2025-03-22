function UserCard(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Job: {props.job}</p>
        </div>
    );
}

export default UserCard;