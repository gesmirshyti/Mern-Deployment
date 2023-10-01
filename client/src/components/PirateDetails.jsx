import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, useParams, Link } from "react-router-dom";

const PirateDetails = () => {
  const { id } = useParams();
  const [pirate, setPirate] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/pirates/${id}`)
      .then((res) => {
        setPirate(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
 
  const handleChange = (newVaule) => {
    console.log(pirate)
    console.log(newVaule)
    axios.patch(`http://localhost:3000/pirates/${id}`, {
      ...pirate,
      ...newVaule
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))

  }
  return (
    <div className="body">
      {pirate ? (
        <div>
          <div className="nav-head">
            <h1 className="head-title">{pirate.name}</h1>
            <button className="btn"><Link to={"/pirates"} className="text-none" > <p>Crew Board</p></Link></button>
          </div>

          <div className="col-details d-flex justify-around">
            <div className="center">
              {pirate.imageUrl && (
                <img
                  src={pirate.imageUrl}
                  alt={`Profile picture of ${pirate.name}`}
                  style={{ maxWidth: "350px", maxHeight: "350px" }}
                />
              )}
              <br />
              <br />
              <br />
              <br />
              <h2>"{pirate.catchPhases}"</h2>
            </div>
            <div className="row-details">
              <h1 className="center">ABOUT</h1>
              <label className="details-header">Position: {pirate.position}</label> <br /><br />
              <label className="details-header">Treasures: {pirate.treasureChests}</label>

              <div className="d-flex justify-around">
                <label htmlFor="">Peg Leg</label>
                <label>{pirate.pegLeg ? "Yes" : "No"}</label>
                <button
                  className={`pegLeg ${pirate.pegLeg ? "red" : "green"}`}
                  onClick={() => {
                    setPirate({ ...pirate, pegLeg: !pirate.pegLeg });
                    handleChange({ pegLeg: !pirate.pegLeg });
                  }}
                >
                  {pirate.pegLeg ? "No" : "Yes"}
                </button>
              </div>




              <div className="d-flex justify-around">
                <label>eyePatch</label>
                <label>{pirate.eyePatch ? "Yes" : "No"}</label>
                <button
                  className={`eyePatch ${pirate.eyePatch ? "red" : "green"}`}
                  onClick={() => {
                    setPirate({ ...pirate, eyePatch: !pirate.eyePatch });
                    handleChange({ eyePatch: !pirate.eyePatch });
                  }}
                >
                  {pirate.eyePatch ? "No" : "Yes"}
                </button></div>
              <div className="d-flex justify-around">
                <label htmlFor="">hookHand</label>
                <label>{pirate.hookHand ? "Yes" : "No"}</label>
                <button
                  className={`hookHand ${pirate.hookHand ? "red" : "green"}`}
                  onClick={() => {
                    setPirate({ ...pirate, hookHand: !pirate.hookHand });
                    handleChange({ hookHand: !pirate.hookHand });
                  }}
                >
                  {pirate.hookHand ? "No" : "Yes"}
                </button></div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

}

export default PirateDetails;