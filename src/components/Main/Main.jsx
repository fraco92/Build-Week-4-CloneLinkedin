import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allPeople,
  getPeople,
  isAllPeopleError,
  isAllPeopleLoading,
} from "../../reducers/people/peopleSlice";
import { Circles } from "react-loader-spinner";
import { Card } from "../Card/Card";

export const Main = () => {
  const people = useSelector(allPeople);
  const isPeopleLoading = useSelector(isAllPeopleLoading);
  const isPeopleError = useSelector(isAllPeopleError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  return (
    <div className="bg-[#F3F2ED] py-[25px]">
      <div className="people-cont grid bg-[#fff] mx-[350px] rounded-2xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4 mx-8 mb-16">
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
              return <Card props={profile} />;
            })}
        </div>
      </div>
    </div>
  );
};
