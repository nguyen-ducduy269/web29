import Link from "next/link";

export default function LogIn() {
  return (
    <>
      <h1>Log In</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      <Link href="/login">
        <button>Log In</button>
      </Link>
      <Link href="/signout">
        <button>Sign Up</button>
      </Link>
    </>
  );
}
