// Define a function 'detectDeviceType' to determine whether the user's device is mobile or desktop.
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
console.log(detectDeviceType());
