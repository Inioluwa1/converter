import React, { useState } from "react";

function Main() {
  const [mile, setMile] = useState("");
  const [km, setKm] = useState("");

  function handlemile(event) {
    const mile = event.target.value;
    setMile(mile);
    setKm(mile * 1.60934);
  }

  function handlekm(event) {
    const km = event.target.value;
    setKm(km);
    setMile(km / 1.60934);
  }

  return (
    <div>
      <div className="main">
        <label htmlFor="mile"> Mile: </label>
        <input name="mile" id="mile" value={mile} onChange={handlemile} />
      </div>
      <div className="main">
        <label htmlFor="name"> Km: </label>
        <input name="km" id="km" value={km} onChange={handlekm} />
      </div>
    </div>
  );
}

export default Main;
