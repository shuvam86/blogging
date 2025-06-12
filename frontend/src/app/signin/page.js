"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sign In</h1>
      <button
        onClick={() => signIn("google")}
        style={{
          padding: "10px 20px",
          background: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
