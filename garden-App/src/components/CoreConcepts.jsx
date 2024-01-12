import GardenTip from "./GardenTip";

export default function CoreConcepts() {
  return (
    <section
      style={{ boxShadow: "3px 8px 9px rgba(0, 0, 0, 0.2)" }}
      className="rounded-4 core-concepts col-10 justify-content-center mx-auto px-4 "
    >
      <h2 style={{ fontSize: "22px" }} className="pt-3 fw-medium">
        Core Concepts
      </h2>
      <div className="d-flex justify-content-center mt-5">
        <div className="col-3 px-2">
          <WaterDropIcon
            style={{ fontSize: "60px", color: "white", marginBottom: "10px" }}
          />
          <GardenTip
            title={CoreConceptData[0].title}
            description={CoreConceptData[0].description}
          />
        </div>
        <div className="col-3 px-2">
          <WbSunnyIcon
            style={{ fontSize: "60px", color: "white", marginBottom: "10px" }}
          />
          <GardenTip
            title={CoreConceptData[1].title}
            description={CoreConceptData[1].description}
          />
        </div>
        <div className="col-3 px-2">
          <ContentCutIcon
            style={{ fontSize: "60px", color: "white", marginBottom: "10px" }}
          />
          <GardenTip
            title={CoreConceptData[2].title}
            description={CoreConceptData[2].description}
          />
        </div>
        <div className="col-3 px-2">
          <AccessAlarmsIcon
            style={{ fontSize: "60px", color: "white", marginBottom: "10px" }}
          />
          <GardenTip
            title={CoreConceptData[3].title}
            description={CoreConceptData[3].description}
          />
        </div>
      </div>
    </section>
  );
}
