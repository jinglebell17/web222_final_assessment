function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let valid = true;
  let form = document.querySelector(".observation_form");

  let lat = parseFloat(form.latitude.value);
  let lat_label = form.querySelector("#label_latitude>span");

  let long = parseFloat(form.longitude.value);
  let long_label = form.querySelector("#label_longitude>span");

  if (lat < -90 || lat > 90 || isNaN(lat)) {
    lat_label.innerHTML = "* must be a valid Latitude (-90 to 90)";
    valid = false;
  } else lat_label.innerHTML = "*";

  if (long < -180 || long > 180 || isNaN(long)) {
    long_label.innerHTML = " must be a valid Longitude (-180 to 180)";
    valid = false;
  } else long_label.innerHTML = "*";

  return valid;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
