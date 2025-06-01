"use client";
export default function LoginButton() {
  return (
    <button
      className="content end p-2 mt-2 bg-blue-400 text-white"
      onClick={(e) => {
        e.preventDefault();
        console.log("Button clicked!");
      }}
    >
      Submit
    </button>
  );
}
