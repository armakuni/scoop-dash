"use client";
import { FormEvent, useEffect, useState } from "react";
import { useRepository } from "./RepositoryProvider";
import * as EmailValidator from 'email-validator';

import {InterestedPeepRepository} from "@/InterestedPeepRepository";


export default function RegisterForm() {
  const interestedPeepRepository: InterestedPeepRepository = useRepository();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    interestedPeepRepository.getIntrestedPartiesCount().then((c) => {
      setCount(c);
    });

  }, [interestedPeepRepository])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!EmailValidator.validate(email)) {
      setError('Email is not valid');
      return;
    }

    try {
      interestedPeepRepository.storeEmail(email);
    } catch (error) {
      setError("Email is a duplicate");
    }

    setEmail(""); // Clear the input field
  };

  return (
    <>
      <h3 className={"text-center"}>Interested Peeps: {count}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">visitors email</label>
        <input
          type="text"
          id="email"
          name="visitors email"
          onChange={(val) => setEmail(val.target.value)}
          value={email}
        />

        {error && <span>{error}</span>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
