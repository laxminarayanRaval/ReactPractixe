import React from "react";

const InsertData = () => {
  return (
    <div>
      <h1>Insert Data</h1>
      <form>
          <input required type='text' name='title' placeholder='Movie Name' />
          <textarea required rows='1' name="openingText" placeholder='Opening Text'></textarea>
          <input required type='date' placeholder='Release Date'/>
          <input type='button' value='Insert' />
      </form>
    </div>
  );
};

export default InsertData;
