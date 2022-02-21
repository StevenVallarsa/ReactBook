export default function Header({ setUser }) {
  return (
    <div>
      Welcome to the Jumble!
      <button onClick={() => setUser("")}>Logout</button>
    </div>
  );
}
