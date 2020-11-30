// import React, { useState } from "react";
// // import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
// import { addDays } from "date-fns";

// function Schedule() {
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 1),
//       key: "selection",
//     },
//   ]);

//   console.log(`[start Date]:`, state[0].startDate);
//   console.log(`[End Date]:`, state[0].endDate);

<<<<<<< HEAD
  return (
    <div className="container">
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={false}
        moveRangeOnFirstSelection={true}
        months={1}
        ranges={state}
        
      />
    </div>
  );
}
export default Schedule;
=======
//   return (
//     <div className="container">
//       <DateRangePicker
//         onChange={(item) => setState([item.selection])}
//         showSelectionPreview={false}
//         moveRangeOnFirstSelection={true}
//         months={1}
//         ranges={state}
//         direction="horizontal"
//       />
//     </div>
//   );
// }
// export default Schedule;
>>>>>>> 06200198fb797c84cb8a8d740c4a72939c3e851d
