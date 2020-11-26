import React, {useState} from "react";


function Calendar() {
       const [value, onChange] = useState(new Date());
     
      return (
        <div>
          <Calendar
            onChange={onChange}
            value={value}
          />
        </div>
      );
    }
export default Calendar;