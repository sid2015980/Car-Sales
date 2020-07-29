export const ADDED_FEATURE = "ADD_FEATURE";
export const REMOVED_FEATURE = "REMOVE_FEATURE";

export function addFeature(feature) {
  return {
    type: ADDED_FEATURE,
    payload: feature,
  };
}

export function removeFeature(feature) {
  return {
    type: REMOVED_FEATURE,
    payload: feature,
  };
}
