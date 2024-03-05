import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allPeople,
  getPeople,
  isAllPeopleError,
  isAllPeopleLoading,
} from "../../reducers/people/peopleSlice";
import { Circles } from "react-loader-spinner";

export const Main = () => {
  const people = useSelector(allPeople);
  const isPeopleLoading = useSelector(isAllPeopleLoading);
  const isPeopleError = useSelector(isAllPeopleError);
  const dispatch = useDispatch();
  console.log(people);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  return (
    <div data-theme="light">
      {isPeopleLoading && (
        <Circles
          height="80"
          width="80"
          color="#000"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {isPeopleError && (
        <div>
          <p>Error, please try again later.</p>
        </div>
      )}
      {!isPeopleError &&
        !isPeopleLoading &&
        people.map((profile) => {
          return (
            <div className="border">
              <p>
                <b>Id:</b> {profile._id}
              </p>
              <p>
                <b>Nome:</b> {profile.name}
              </p>
              <p>
                <b>Cognome:</b> {profile.surname}
              </p>
            </div>
          );
        })}
    </div>
  );
};
