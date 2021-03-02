function startClock() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("vrijeme").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startClock, 1000);
  const postavke = { weekday: "long", month: "long", day: "numeric" };
  document.getElementById("datum").innerText = today.toLocaleDateString(
    "hr-HR",
    postavke
  );
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
