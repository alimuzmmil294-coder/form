import React, { useState } from "react";

const Contact = () => {
  const [value, setValue] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const [password, setPassword] = useState(false);
  const handleInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h1>Contact</h1>
      <form
        className="my-2 w-[50%] bg-gray-300 flex flex-col justify-around p-4 "
        onSubmit={(e) => (
          e.preventDefault(),
          console.log(value),
          setValue({
            fName: "",
            lName: "",
            email: "",
            password: "",
          })
        )}
      >
        <div className="flex flex-col ">
          <label htmlFor="fName">First Name</label>
          <input
            onChange={handleInput}
            className=" text-[19px] px-3 py-2.5  border rounded-md w-full "
            type="text"
            name="fName"
            id=""
            value={value.fName}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="lName">Last Name</label>
          <input
            onChange={handleInput}
            className=" text-[19px] px-3 py-2.5  border rounded-md w-full "
            type="text"
            name="lName"
            id=""
            value={value.lName}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleInput}
            className=" text-[19px] px-3 py-2.5  border rounded-md w-full "
            type="text"
            name="email"
            id=""
            value={value.email}
          />
        </div>
        <div className="relative flex flex-col ">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInput}
            className=" text-[19px] px-3 py-2.5  border rounded-md w-full "
            type={`${password ? "text" : "password"}`}
            name="password"
            id=""
            value={value.password}
          />
          {value.password && (
            <span
              onClick={() => setPassword(!password)}
              className={`${password ? "text-black" : "text-gray-500"} absolute right-3 top-10 cursor-pointer`}
            >
              {/* {password ? "🙈" : "👁️"} */}
              {password ? "Hide" : "Show"}
            </span>
          )}
        </div>
        <button
          className=" my-3 px-4 py-2 rounded-md bg-blue-500 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
