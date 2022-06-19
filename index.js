const digitalClock = () => {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  document.querySelector(".time").innerText = `${
    hour < 10 ? 0 + String(hour) : hour
  } : ${minute < 10 ? 0 + String(minute) : minute} : ${
    second < 10 ? 0 + String(second) : second
  }`;

  document.querySelector(".date").textContent = `
  ${day < 10 ? 0 + String(day) : day}
  | ${month < 10 ? 0 + String(month) : month} | ${year} `;
};

setInterval(digitalClock, 1000);
