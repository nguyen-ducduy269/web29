import Link from "next/link";

export default function SignOut() {
  return (
    <>
      <h1>Sign Out</h1>
      <Link href="/login">
        <button>Log In</button>
      </Link>
      <Link href="/signup">
        <button>Sign Up</button>
      </Link>
    </>
  );
}
