import GardenTip from "./GardenTip";

export default function CoreConcepts() {
  return (
    <section className="bg-success p-5">
      <h2>Gardening Core Concepts</h2>
      <div className="d-flex justify-content-center">
        <GardenTip
          className="bg-primary"
          title={"Water"}
          description={"Use water"}
        />
        <div>HI</div>
        <div>HI</div>
        <div>HI</div>
      </div>
    </section>
  );
}
