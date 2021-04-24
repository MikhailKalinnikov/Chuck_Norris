import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SAVE_JOKES_FAVORITE } from "../../redux/types";

const NewJokes = () => {
  const myJokes = useSelector((state) => state.jokes_favorite);
  const [jokes, setJokes] = useState(""); // текст объекта
  const [jokeId, setJokeId] = useState(""); // id  объекта
  const [intervalID, setIntervalID] = useState(null); // state id intervals
  const [stopJokes, setStopJokes] = useState(true); // флаг смены статуса кнопок
  const [show, setShow] = useState(true);
  const [repeat, setRepeat] = useState(null);
  const dispatch = useDispatch();

  const fetchJokes = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const newJoke = await response.json(); // получаем объект
    setJokes(newJoke.value); //  получаем value  из объекта
    setJokeId(newJoke.id); //  получаем id  объекта
  };
  const handlerOneJoke = () => {
    setShow(true);
    //запускаем fetch запрос
    fetchJokes();
  };

  const getManyJokes = function () {
    //запускаем fetch запрос с интервалом 3сек.
    setStopJokes((pre) => !pre);
    const foo = setInterval(() => {
      setShow(true);
      fetchJokes();
    }, 3000);
    setIntervalID(foo);
  };
  const stopManyJokes = () => {
    //остановка интервала/ запроса
    clearInterval(intervalID);
    setStopJokes((pre) => !pre);
  };
  const saveJokesFavorit = () => {
    setShow(false);
    const replay = myJokes.find((el) => el.id === jokeId);
    !replay && jokes
      ? dispatch({ type: SAVE_JOKES_FAVORITE, payload: { jokes, jokeId } })
      : setRepeat(true);
    document.body.querySelector("#jok").innerHTML = "";
  };

  return (
    <div className="list-group">
      <div>
        <button
          onClick={handlerOneJoke}
          type="button"
          className="btn btn-secondary"
        >
          What will Chuck Norris say?
        </button>
      </div>
      <br></br>
      <div>
        <Link
          onClick={saveJokesFavorit}
          to="#"
          // className="list-group-item list-group-item-action list-group-item-light"
        >
          <span
            className="list-group-item list-group-flush"
            style={{ width: "50%" }}
            id="jok"
          >
            {jokes}
          </span>
        </Link>
      </div>
      <br></br>
      <div>
        {stopJokes ? (
          <button
            onClick={getManyJokes}
            type="button"
            className="btn btn-secondary"
          >
            What else is Chuck Norris joking about?
          </button>
        ) : (
          <button
            onClick={stopManyJokes}
            type="button"
            className="btn btn-secondary"
          >
            Click if enough is enough
          </button>
        )}
      </div>
    </div>
  );
};

export default NewJokes;
