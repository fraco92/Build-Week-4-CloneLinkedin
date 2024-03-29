import { useEffect } from "react";
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
    <div className="bg-[#F3F2ED] px-3 py-[25px]">
      <div className="people-cont grid bg-[#fff] max-w-[1128px] mx-auto rounded-2xl">
        {isPeopleLoading && (
          <div className="circle-container w-[100%] my-5 flex justify-center">
            <Circles
              height="80"
              width="80"
              color="#000"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        {isPeopleError && (
          <div>
            <p>Error, please try again later.</p>
          </div>
        )}
        <div className="mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-4 mx-8 mb-16">
          {!isPeopleError &&
            !isPeopleLoading &&
            people.map((profile, i) => {
              return (
                <Card
                  cover_img={`https://picsum.photos/400/267?random=${i}`}
                  key={i}
                  props={profile}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
