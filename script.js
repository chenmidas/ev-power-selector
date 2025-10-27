
document.getElementById('evForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const rw = parseFloat(document.getElementById('riderWeight').value);
  const vw = parseFloat(document.getElementById('vehicleWeight').value);
  const v_kmh = parseFloat(document.getElementById('ratedSpeed').value);
  const D = parseFloat(document.getElementById('tireDiameter').value);
  const t = parseFloat(document.getElementById('accelTime').value);
  const sprocket = parseFloat(document.getElementById('sprocketRatio').value);
  const hub = parseFloat(document.getElementById('hubGearRatio').value);

  const totalMass = rw + vw;
  const v = v_kmh / 3.6;
  const a = v / t;
  const s = 0.5 * a * t * t;
  const L = Math.PI * D;
  const omega = v / (D / 2);
  const torque = totalMass * a * D / 2;
  const power = torque * omega;
  const rpm_wheel = omega * 60 / (2 * Math.PI);
  const rpm_motor = rpm_wheel * sprocket * hub;

  document.getElementById('results').innerHTML = `
    ✅ <b>總質量 Total Weight:</b> ${totalMass.toFixed(2)} kg<br>
    ✅ <b>額定速度 Rated Speed:</b> ${v.toFixed(2)} m/s<br>
    ✅ <b>加速度 Acceleration:</b> ${a.toFixed(2)} m/s²<br>
    ✅ <b>加速距離 Accel. Distance:</b> ${s.toFixed(2)} m<br>
    ✅ <b>輪胎週長 Tire Circumference:</b> ${L.toFixed(4)} m<br>
    ✅ <b>輪胎角速度 Wheel Angular Speed:</b> ${omega.toFixed(2)} rad/s<br>
    ✅ <b>輪胎扭矩 Wheel Torque:</b> ${torque.toFixed(2)} Nm<br>
    ✅ <b>輪胎所需功率 Power:</b> ${power.toFixed(2)} W<br>
    ✅ <b>輪胎轉速 Wheel RPM:</b> ${rpm_wheel.toFixed(0)} RPM<br>
    ✅ <b>馬達轉速 Motor RPM:</b> ${rpm_motor.toFixed(0)} RPM<br>
  `;
});
