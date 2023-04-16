// import React, { useState } from "react";
// import axios from "axios";

// export default function Date() {
//   const [time, setTime] = useState(false);

//     function getLocalTime(response) {
//         console.log(response.data.year);
//         setTime(response.data.year);
//     }
//     const lat = 40.4;
//     const lon = -3.7;
//     const apiUrl = `https://www.timeapi.io/api/Time/current/coordinate?latitude=${lat}&longitude=${lon}`;
//     axios.get(apiUrl).then(getLocalTime);

//     if(time) {
//       return <div>Year {time}</div>;
//     } else {
// return "Loading"
//   }

    
// }