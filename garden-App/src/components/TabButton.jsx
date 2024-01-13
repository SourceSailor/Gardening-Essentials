export default function TabButton({ children, changeCurrentTab }) {
  return (
    <button onClick={changeCurrentTab} className="m-2">
      {children}
    </button>
  );
}
