import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PiratesList = (props) => {
  const [pirates, setPirates] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pirates")
      .then((res) => {
        // Sort pirates by name before setting the state
        const sortedPirates = res.data.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });

        setPirates(sortedPirates);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updated]);

  const deleteTeam = (id) => {
    axios
      .delete(`http://localhost:3000/pirates/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdated(!updated);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body">
      <div className="nav-head">
        <h1 className="head-title">Pirate Crew</h1>
        <button className="btn">
          <Link className="text-none" to={"/pirates/new"}><p>Add Pirate</p></Link>
        </button>
      </div>
      <div className="col-list">

        {pirates.length > 0 &&
          pirates.map((pirate, index) => {
            return (
              <div key={index} className="row-list d-flex">
                {pirate.imageUrl && (
                  <img
                    src={pirate.imageUrl}
                    alt={`Profile picture of ${pirate.name}`}
                    style={{ maxWidth: "220px", maxHeight: "120px" }}
                  />
                )}
                <div >
                  <h2 className="center">{pirate.name}</h2>
                  <div className="d-flex">
                    <button className="btn">
                      <Link className="text-none" to={`/pirates/${pirate._id}`}><p>View Pirate</p></Link>
                    </button>

                    <button className="deleteBtn" onClick={(e) => deleteTeam(pirate._id)}>Walk the Plank</button>
                  </div>
                </div>
              </div>
            );
          })}

      </div>
    </div>
  );
};

export default PiratesList;
