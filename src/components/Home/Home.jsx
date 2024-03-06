import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="posts-container flex-col items-center gap-5 py-5 flex bg-[#F3F2ED]">
        <div class="post rounded mx-[350px] w-[500px]">
          <div className="ms-2 flex items-center user">
            <img
              className="propic"
              src="https://media.licdn.com/dms/image/C5603AQGHC4ScYCkDog/profile-displayphoto-shrink_800_800/0/1548481174857?e=2147483647&v=beta&t=3iESmH5Shs_WZt0X_g5CiSYDE84jn0XjzBYaQasge1w"
              alt="Profile"
            />
            Kim Kardashian
          </div>
          <img className="w-100" src="https://picsum.photos/500/500" alt="" />
          <p className="ms-2">
            Eccomi al #convegnoindustria2024! Fantastico evento con molti spunti
            interessanti sul futuro dell'industria. 😊🚀 #networking #industria
            #tecnologia
          </p>
        </div>
        <div class="post rounded mx-[350px] w-[500px]">
          <div className="ms-2 flex items-center user">
            <img
              className="propic"
              src="https://media.licdn.com/dms/image/C5603AQGHC4ScYCkDog/profile-displayphoto-shrink_800_800/0/1548481174857?e=2147483647&v=beta&t=3iESmH5Shs_WZt0X_g5CiSYDE84jn0XjzBYaQasge1w"
              alt="Profile"
            />
            Kim Kardashian
          </div>
          <img className="w-100" src="https://picsum.photos/600/500" alt="" />
          <p className="ms-2">
            Fantastico evento con molti spunti interessanti sul futuro
            dell'industria. 😊🚀 #networking #industria #tecnologia
          </p>
        </div>
        <div class="post rounded mx-[350px] w-[500px]">
          <div className="ms-2 flex items-center user">
            <img
              className="propic"
              src="https://media.licdn.com/dms/image/C5603AQGHC4ScYCkDog/profile-displayphoto-shrink_800_800/0/1548481174857?e=2147483647&v=beta&t=3iESmH5Shs_WZt0X_g5CiSYDE84jn0XjzBYaQasge1w"
              alt="Profile"
            />
            Kim Kardashian
          </div>
          <img className="w-100" src="https://picsum.photos/650/500" alt="" />
          <p className="ms-2">🚀 #networking #industria #tecnologia</p>
        </div>
      </div>
    </>
  );
};
