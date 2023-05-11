import { Link } from "react-router-dom";

const ShowCard = ({ setId, showObj: { show } }) => {
  if (show.image !== null) {
    return (
      <div className="card">
        <div className="card__body">
          <img
            src={show.image.original}
            alt={show.name}
            className="card__image"
          />
          <h2 className="card__title"> {show.name}</h2>
          <p className="card__language">{show.language}</p>
          <Link
            onClick={() => setId(show.id)}
            to="/summary"
            className="card__btn"
          >
            Book Your Show
          </Link>
        </div>
      </div>
    );
  }
};

export default ShowCard;
