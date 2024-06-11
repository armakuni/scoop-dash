"use client";
import { FormEvent, useState } from "react";
import { useRepository } from "./RepositoryProvider";

export default function RegisterForm() {
  const num = useRepository();

  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCount(count + 1);
    setEmail(""); // Clear the input field
  };

  return (
    <>
    <h1>OMG {num}</h1>
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
