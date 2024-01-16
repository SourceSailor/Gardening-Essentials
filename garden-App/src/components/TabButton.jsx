import "../styles/tab-text-section.css";

export default function TabButton({ children, onSelect, isActive }) {
  return (
    <button
      onClick={onSelect}
      style={{ boxShadow: "3px 8px 9px rgba(0, 0, 0, 0.2)" }}
      className={`mb-2 me-3 tab-btn ${isActive ? "tab-selected" : null}`}
    >
      {children}
    </button>
  );
}
