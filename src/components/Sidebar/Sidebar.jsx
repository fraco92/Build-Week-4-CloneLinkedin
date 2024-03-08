import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { allPeople, getPeople } from "../../reducers/people/peopleSlice";

export const Sidebar = ({ showCircle }) => {
  let people = useSelector(allPeople);
  people = people.slice(0, 6);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  return (
    <div
      className={showCircle ? "hidden" : "container w-[300px] hidden md:block"}
    >
      <div className="top-div bg-white p-2 rounded border">
        <div className="lingua p-1">
          <h2>Lingua del profilo</h2>
          <p>Italiano</p>
        </div>
        <hr className="w-[95%] m-auto" />
        <div className="profilo-pub p-1">
          <h2>Profilo pubblico e URL</h2>
          <p>www.linkedin.com</p>
        </div>
      </div>
      <div className="bottom-div mt-3">
        <div className="pb-0 bg-white p-2 rounded border">
          <h2 className="ps-2">Altri profili consultati</h2>
          {people.map((person, i) => {
            return (
              <div key={i} className="random-user p-2 border-b col">
                <div className="user flex items-center">
                  <img
                    src={person.image}
                    className="rounded-full w-[40px] me-2"
                    alt=""
                  />
                  <div className="text-sm user-info">
                    <h2>
                      {person.name} {person.surname}
                    </h2>
                    <p>{person.title}</p>
                  </div>
                </div>
                <button class="m-auto flex align-middle justify-center items-center rounded-full bg-white font-light px-6 py-1 border-btn w-auto]">
                  <ion-icon name="person-add"></ion-icon>
                  Collegati
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
