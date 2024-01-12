export default function GardenTip({ title, description }) {
  return (
    <div className="p-2">
      <h5>{title}</h5>
      <p style={{ fontSize: "13px" }}>{description}</p>
    </div>
  );
}
