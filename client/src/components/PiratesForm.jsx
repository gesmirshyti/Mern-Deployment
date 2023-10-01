import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const PiratesForm = () => {
    const [updated, setUpdated] = useState();
    const [name, setName] = useState("");
    const [treasureChests, setTreasureChests] = useState();
    const [position, setPosition] = useState("");
    const [catchPhases, setCatchPhases] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [val, setVal] = useState({})
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
 
        axios
            .post("http://localhost:3000/pirates/new", {
                name,
                treasureChests,
                position,
                imageUrl,
                catchPhases,
                pegLeg,
                eyePatch,
                hookHand
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setUpdated(!updated);
                setVal({})
                navigate('/pirates');
            })
            .catch(err => { console.log(err); err.response.data.errors ? setVal(err.response.data.errors) : console.log(err) })
    };

    return (
        <div className="body">
            <div className="nav-head">
                <h1 className="head-title">Add Pirate</h1>
                <button className="btn"><Link to={"/pirates"} className="text-none" > <p>Crew Board</p></Link></button>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className="col-form d-flex">
                    <div className="row">
                        <p>
                            <label>Pirate Name :</label><br />
                            {val.name ? <span>{val.name.message}</span> : ""}
                            <br />
                            <input type="text" onChange={(e) => setName(e.target.value)} />
                        </p>
                        <p>
                            <label>Image Url: </label><br />
                            {val.imageUrl ? <span>{val.imageUrl.message}</span> : ""}
                            <br />
                            <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
                        </p>
                        <p>
                            <label># of Treasure Chests:</label><br />
                            {val.treasureChests ? <span>{val.treasureChests.message}</span> : ""}
                            <br />
                            <input className="treasureChests" type="number" onChange={(e) => setTreasureChests(e.target.value)} />
                        </p>
                        <p>
                            <label>Pirate Catch Phases: </label><br />
                            {val.catchPhases ? <span>{val.catchPhases.message}</span> : ""}
                            <br />
                            <input type="text" onChange={(e) => setCatchPhases(e.target.value)} />
                        </p>
                    </div>
                    <div className="row">
                        <p>
                            <label>Crew Position: </label><br />
                            {val.position ? <span>{val.position.message}</span> : ""}
                            <br />
                            <select name="" id="" onChange={(e) => setPosition(e.target.value)}>
                                <option>Please Select</option>
                                <option value="First Mate">First Mate</option>
                                <option value="Captain">Captain</option>
                                <option value="Quarter Master">Quarter Master</option>
                                <option value="Boatswain">Boatswain</option>
                                <option value="Powder Monkey">Powder Monkey</option>
                            </select>
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <input className="checkbox" type="checkbox" checked={pegLeg} onChange={(e) => setPegLeg(e.target.checked)} />
                        <label htmlFor="">Pep Leg </label><br />
                        <input className="checkbox" type="checkbox" checked={eyePatch} onChange={(e) => setEyePatch(e.target.checked)} />
                        <label className="checkbox" htmlFor="">Eye Patch </label><br />
                        <input className="checkbox" type="checkbox" checked={hookHand} onChange={(e) => setHookHand(e.target.checked)} />
                        <label htmlFor="">Hook Hand </label><br />
                        <br />
                        <br />
                        <button className="btn" type="submit"><p>Add Pirate</p></button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default PiratesForm;
