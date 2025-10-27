
document.getElementById("powerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const riderWeight = parseFloat(document.getElementById("riderWeight").value);
  const vehicleWeight = parseFloat(document.getElementById("vehicleWeight").value);
  const ratedSpeedKmh = parseFloat(document.getElementById("ratedSpeed").value);
  const tireDiameter = parseFloat(document.getElementById("tireDiameter").value);
  const accelTime = parseFloat(document.getElementById("accelTime").value);
  const sprocketRatio = parseFloat(document.getElementById("sprocketRatio").value);
  const hubRatio = parseFloat(document.getElementById("hubRatio").value);

  const totalWeight = riderWeight + vehicleWeight;
  const ratedSpeed = ratedSpeedKmh / 3.6;
  const acceleration = ratedSpeed / accelTime;
  const accelDistance = 0.5 * acceleration * accelTime * accelTime;
  const tireCircumference = Math.PI * tireDiameter;
  const wheelAngularSpeed = ratedSpeed / (tireDiameter / 2);
  const wheelTorque = totalWeight * acceleration * (tireDiameter / 2);
  const wheelPower = wheelTorque * wheelAngularSpeed;
  const wheelRPM = (ratedSpeed / tireCircumference) * 60;
  const motorRPM = wheelRPM * sprocketRatio * hubRatio;

  const resultHTML = `
    ✅ 總質量 Total Weight: ${totalWeight.toFixed(2)} kg<br/>
    ✅ 額定速度 Rated Speed: ${ratedSpeed.toFixed(2)} m/s<br/>
    ✅ 加速度 Acceleration: ${acceleration.toFixed(2)} m/s²<br/>
    ✅ 加速距離 Accel. Distance: ${accelDistance.toFixed(2)} m<br/>
    ✅ 輪胎週長 Tire Circumference: ${tireCircumference.toFixed(4)} m<br/>
    ✅ 輪胎角速度 Wheel Angular Speed: ${wheelAngularSpeed.toFixed(2)} rad/s<br/>
    ✅ 輪胎扭矩 Wheel Torque: ${wheelTorque.toFixed(2)} Nm<br/>
    ✅ 輪胎所需功率 Power: ${wheelPower.toFixed(2)} W<br/>
    ✅ 輪胎轉速 Wheel RPM: ${wheelRPM.toFixed(0)} RPM<br/>
    ✅ 馬達轉速 Motor RPM: ${motorRPM.toFixed(0)} RPM<br/>
  `;

  document.getElementById("results").innerHTML = resultHTML;
});
