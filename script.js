// // ساعت
// function updateClock() {
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const minutes = now.getMinutes();
//     const hours = now.getHours();
  
//     document.getElementById("second").style.transform = `rotate(${seconds * 6}deg)`;
//     document.getElementById("minute").style.transform = `rotate(${minutes * 6 + seconds * 0.1}deg)`;
//     document.getElementById("hour").style.transform = `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`;
//   }
//   setInterval(updateClock, 1000);
//   updateClock();
  
  
//   // تقویم
//   const monthYear = document.getElementById("monthYear");
//   const calendarDates = document.getElementById("calendarDates");
//   let currentDate = new Date();
  
//   function renderCalendar(date) {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1).getDay();
//     const lastDate = new Date(year, month + 1, 0).getDate();
//     const today = new Date();
  
//     calendarDates.innerHTML = "";
//     monthYear.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
  
//     for (let i = 0; i < firstDay; i++) {
//       calendarDates.innerHTML += `<div></div>`;
//     }
  
//     for (let day = 1; day <= lastDate; day++) {
//       const isToday =
//         day === today.getDate() &&
//         month === today.getMonth() &&
//         year === today.getFullYear();
  
//       const className = isToday ? "today" : "";
//       calendarDates.innerHTML += `<div class="${className}">${day}</div>`;
//     }
//   }
  
//   function prevMonth() {
//     currentDate.setMonth(currentDate.getMonth() - 1);
//     renderCalendar(currentDate);
//   }
  
//   function nextMonth() {
//     currentDate.setMonth(currentDate.getMonth() + 1);
//     renderCalendar(currentDate);
//   }
  
//   renderCalendar(currentDate);
  