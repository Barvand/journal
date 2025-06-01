"use client";
import { useState } from "react";
import { account, ID } from "../appwrite";
import { useEffect } from "react";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await account.get();
        setLoggedInUser(user);
      } catch {
        setLoggedInUser(null);
      }
    };

    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      setLoggedInUser(await account.get());
    } catch (err) {
      console.error("Login error:", err.message);
    }
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    setLoggedInUser(await account.get()); // Get user info right after register
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div>
        <p>Logged in as {loggedInUser.name}</p>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Not logged in</p>
      <form className="bg-gray-200 p-5 flex flex-col gap-3 rounded">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-gray-300 border-b-2 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-gray-300 border-b-2 py-2"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-gray-300 border-b-2 py-2"
        />
        <button type="button" onClick={() => login(email, password)}>
          Login
        </button>
        <button
          type="button"
          onClick={register}
          className="p-3 px-5 bg-blue-100 self-center"
        >
          Register
        </button>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </form>
    </div>
  );
};

export default Login;
