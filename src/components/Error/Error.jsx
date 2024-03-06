import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const [seconds, setSeconds] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
        setTimeout(() => {
            setSeconds(seconds - 1);
      }, 1000);

      if (!seconds) {
        navigate("/")
      }
  }, [seconds, navigate]);

  return (
    <div data-theme="light" className="text-center p-[25px]">
      <p>Errore, verrai rendirizzato alla pagina home tra {seconds} secondi</p>
    </div>
  );
};
