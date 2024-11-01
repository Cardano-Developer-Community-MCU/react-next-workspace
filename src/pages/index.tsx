import React, { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  function getUsername(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setUsername(value);
  }

  function getPassword(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setPassword(value);
  }

  function clickHandler() {
    if (!username || !password) {
      setIsValid(false);
      setMessage("Tidak boleh kosong");
    } else if (username !== "kominfo" || password !== "admin123") {
      setIsValid(false);
      setMessage("Password / username salah");
    } else {
      setIsValid(true);
      setMessage("Berhasil login");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex-col justify-center items-center border border-black rounded-xl p-12">
        {isValid ? (
          <p className="h-8 mb-3 text-center text-green-500">{message}</p>
        ) : (
          <p className="h-8 mb-3 text-center text-red-500">{message}</p>
        )}

        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            className="px-3 py-2 border border-black rounded-lg"
            onChange={getUsername}
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Password"
            className="px-3 py-2 border border-black rounded-lg"
            onChange={getPassword}
          />
        </div>

        <button
          className="px-3 py-2 bg-blue-700 hover:bg-blue-500 rounded-xl text-white w-full"
          onClick={clickHandler}
        >
          Login
        </button>
      </div>
    </div>
  );
}
