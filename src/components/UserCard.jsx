const UserCard = ({id, name, image, age, handleRemove}) => {
    return <div className="user-card">
        <div className="infor">
        <figure>
            <img className="profile" src={image} alt="profile" />
        </figure>
        <figcaption className="user-detail">
            <h2>{name}</h2>
            <p>Age: {age} year old</p>
        </figcaption>
        </div>
        <div className="btn-group">
            <button onClick={ () => handleRemove(id)  } className="btn-remove">Remove</button>
        </div>
    </div>
}
export default UserCard;