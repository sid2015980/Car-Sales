import React from "react";
import { useDispatch } from "react-redux";
import { addFeature } from "../Actions";

const AdditionalFeature = (props) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addFeature(props.feature));
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleAdd} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
