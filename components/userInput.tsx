"use client";

import { useState } from "react";

export default function UserInput({ data }) {
  const [userId, setUserId] = useState("");

  console.log("userId: ", userId, typeof userId);

  console.log("data: ", data);

  async function sendData() {
    console.log("button clicked. ");
    let url = "http://localhost:3000/api/userId";
    let body = userId;

    console.log("body: ", body);

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    let response = await fetch(url, options);
    let dataToDisplay = await response.json();
    console.log("response.ok", response.ok);
    console.log("dataToDisplay", dataToDisplay);
  }

  console.log("userId");
  return (
    <main className="mx-4 mt-10">
      <div>Child component</div>
      <form className="flex flex-col">
        <label htmlFor="userId">lütfen user id girin:</label>
        <input
          className="mt-2 w-[150px] bg-slate-300 text-black"
          name="userId"
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        ></input>
        <button
          type="button"
          onClick={(e) => sendData(e)}
          className="mt-4 w-24 border rounded px-1 py-2 bg-blue-400"
        >
          Click here.
        </button>
      </form>
    </main>
  );
}
