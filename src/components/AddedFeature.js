import React from "react";
import { useDispatch } from "react-redux";
import { removeFeature } from "../Actions";

const AddedFeature = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeFeature(props.feature));
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleDelete} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
