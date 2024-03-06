import "./Details.css";

export const Details = () => {
  return (
    <div data-theme="light" className="rounded w-6/12 m-auto">
      <div className="banner relative"> {/* Aggiungi la classe relative al div principale */}
        <div className="imgs relative overflow-hidden">
          <img
            className="w-full"
            src="https://media.licdn.com/dms/image/D5616AQGpPXNSCJT5Cw/profile-displaybackgroundimage-shrink_350_1400/0/1687195838585?e=1715212800&v=beta&t=Cv1kEMyyn8IoKLJX5qPqjr6ZgAh1RQ7B1GNP1W3IaCQ"
            alt=""
          />
          <div className="user-img-container absolute bottom-[-25%] left-10 z-20"> {/* Aumenta il valore di z-index */}
            <img
              className="rounded-full user-img w-[180px]"
              src="https://media.licdn.com/dms/image/D5603AQGCcRykWs8jBg/profile-displayphoto-shrink_200_200/0/1687181297729?e=1715212800&v=beta&t=UjKs6ody-wWL3MiFLHSiDDQ7FKYR5e34G5dy2K3iZtY"
              alt=""
            />
          </div>
        </div>
        <div className="m-[50px] user-info mt-10 relative z-10"> {/* Aggiungi la classe relative e z-index */}
          <h2 className="text-3xl">
            <b>Nome Cognome</b>
          </h2>
          <p className="text-lg">Posizione lavorativa</p>
        </div>
      </div>
    </div>
  );
};
