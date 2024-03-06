import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="posts-container flex-col gap-5 py-5 flex bg-[#F3F2ED]">
        <div class="post mx-[350px]">
          <div className="flex items-center user">
            <img
              src="https://media.licdn.com/dms/image/C5603AQGHC4ScYCkDog/profile-displayphoto-shrink_800_800/0/1548481174857?e=2147483647&v=beta&t=3iESmH5Shs_WZt0X_g5CiSYDE84jn0XjzBYaQasge1w"
              alt="Profile Picture"
            />
            <strong>Nome Utente 1</strong>
          </div>

          <p>
            Eccomi al #convegnoindustria2024! Fantastico evento con molti spunti
            interessanti sul futuro dell'industria. 😊🚀 #networking #industria
            #tecnologia
          </p>
        </div>
        <div class="post mx-[350px]">
          <div className="flex items-center user">
            <img
              src="https://media.licdn.com/dms/image/C5603AQGHC4ScYCkDog/profile-displayphoto-shrink_800_800/0/1548481174857?e=2147483647&v=beta&t=3iESmH5Shs_WZt0X_g5CiSYDE84jn0XjzBYaQasge1w"
              alt="Profile Picture"
            />
            <strong>Nome Utente 1</strong>
          </div>

          <p>
            Eccomi al #convegnoindustria2024! Fantastico evento con molti spunti
            interessanti sul futuro dell'industria. 😊🚀 #networking #industria
            #tecnologia
          </p>
        </div>{" "}
        <div class="post mx-[350px]">
          <div className="flex items-center user">
            <img
              src="https://media.licdn.com/dms/image/C5603AQGHC4ScYCkDog/profile-displayphoto-shrink_800_800/0/1548481174857?e=2147483647&v=beta&t=3iESmH5Shs_WZt0X_g5CiSYDE84jn0XjzBYaQasge1w"
              alt="Profile Picture"
            />
            <strong>Nome Utente 1</strong>
          </div>

          <p>
            Eccomi al #convegnoindustria2024! Fantastico evento con molti spunti
            interessanti sul futuro dell'industria. 😊🚀 #networking #industria
            #tecnologia
          </p>
        </div>
      </div>
    </>
  );
};
