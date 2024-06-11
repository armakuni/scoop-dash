"use client";
import { FormEvent, useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCount(count + 1);
    setEmail(""); // Clear the input field
  };

  return (
    <>
      <h3 className={"text-center"}>Interested Peeps: {count}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">visitors email</label>
        <input
          type="email"
          id="email"
          name="visitors email"
          onChange={(val) => setEmail(val.target.value)}
          value={email}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
