import React from "react";

const CustomForm = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form className="todo" onSubmit={handleSubmitForm}>
      <div className="wrapper"></div>
    </form>
  );
};

export default CustomForm;
