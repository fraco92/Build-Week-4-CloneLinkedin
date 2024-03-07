import "./Home.css";
import { Sidebar } from "../Sidebar/Sidebar";

export const Home = () => {
  return (
    <div className="flex justify-center mx-auto bg-[#F3F2ED] py-5">
      <div className="main-container max-w-[1128px] flex justify-center">
        <Sidebar />
        <div className="pe-[20px] ms-[20px] posts-container max-w-[555px] flex-col items-center md:items-start gap-5 flex">
          <div class="post rounded w-full">
            <div className="ms-2 flex items-center user">
              <img
                className="propic"
                src="https://media.licdn.com/dms/image/C5603AQGHC4ScYCkDog/profile-displayphoto-shrink_800_800/0/1548481174857?e=2147483647&v=beta&t=3iESmH5Shs_WZt0X_g5CiSYDE84jn0XjzBYaQasge1w"
                alt="Profile"
              />
              Kim Kardashian
            </div>
            <img className="" src="https://picsum.photos/878/500" alt="" />
            <p className="ms-2">
              Eccomi al #convegnoindustria2024! Fantastico evento con molti
              spunti interessanti sul futuro dell'industria. 😊🚀 #networking
              #industria #tecnologia
            </p>
          </div>
          <div class="post rounded">
            <div className="ms-2 flex items-center user">
              <img
                className="propic"
                src="https://media.licdn.com/dms/image/C5603AQGHC4ScYCkDog/profile-displayphoto-shrink_800_800/0/1548481174857?e=2147483647&v=beta&t=3iESmH5Shs_WZt0X_g5CiSYDE84jn0XjzBYaQasge1w"
                alt="Profile"
              />
              Kim Kardashian
            </div>
            <img className="" src="https://picsum.photos/878/600" alt="" />
            <p className="ms-2">
              Fantastico evento con molti spunti interessanti sul futuro
              dell'industria. 😊🚀 #networking #industria #tecnologia
            </p>
          </div>
          <div class="post rounded">
            <div className="ms-2 flex items-center user">
              <img
                className="propic"
                src="https://media.licdn.com/dms/image/C5603AQGHC4ScYCkDog/profile-displayphoto-shrink_800_800/0/1548481174857?e=2147483647&v=beta&t=3iESmH5Shs_WZt0X_g5CiSYDE84jn0XjzBYaQasge1w"
                alt="Profile"
              />
              Kim Kardashian
            </div>
            <img className="" src="https://picsum.photos/650/500" alt="" />
            <p className="ms-2">🚀 #networking #industria #tecnologia</p>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
