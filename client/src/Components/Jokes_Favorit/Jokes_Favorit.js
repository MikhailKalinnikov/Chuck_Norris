import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_ALL, DELETE_JOKES_FAVORITE } from "../../redux/types";

const Jokes_Favorit = () => {
  const dispatch = useDispatch();
  const myJokes = useSelector((state) => state.jokes_favorite);

  const DeleteJoke = (id) => {
    dispatch({ type: DELETE_JOKES_FAVORITE, payload: id });
  };

  const DeleteAll = () => {
    dispatch({ type: DELETE_ALL });
  };
  return (
    <div className="container">
      <div  className="card border-danger mb-3" style={{width: "50%"}}>
      <div align='center'>
        {myJokes.length > 0 && (
        <button
          onClick={DeleteAll}
          type="button"
          className="btn btn-outline-primary"
        >
          Delete all
        </button>
      )}
      </div>
      <ol className='list-group-numbered'>
        {myJokes.length > 0 ? (
          myJokes.map(({ text, id }) => (
            <><li key={id} className="list-group-item d-flex justify-content-between">
              <p  className='text-wrap'>{text}</p>
              <div>
                <button
                onClick={() => DeleteJoke(id)}
                type="button"
                className="btn btn-primary btn-sm"
              >
                delete
              </button>
              </div>
              
            </li><br></br></>
          ))
        ) : (
          <h3>
            So far you haven't picked any Chuck Norris jokes.<br></br> Click
            &nbsp;
            <Link to="/new_jokes">Get Jokes</Link>
          </h3>
        )}
      </ol>
      </div>
    </div>
  );
};

export default Jokes_Favorit;
