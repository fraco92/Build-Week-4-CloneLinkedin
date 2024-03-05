import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allPeople,
  getPeople,
  isAllPeopleError,
  isAllPeopleLoading,
} from "../../reducers/people/peopleSlice";

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
      {people.map((profile) => {
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
