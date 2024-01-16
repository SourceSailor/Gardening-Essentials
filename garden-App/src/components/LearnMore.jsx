import TabButton from "./TabButton";
import { useState } from "react";
import { tabBtnData } from "./utils";
import "../styles/tab-text-section.css";

export default function LearnMore() {
  const [tabSelected, setTabSelected] = useState(null);

  function onSelect(tab) {
    setTabSelected(tab);
    console.log(tab);
  }

  return (
    <section className="mt-5 mx-auto learn-more-section col-10">
      <h4
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
        className="fs-2 mb-3 "
      >
        Examples
      </h4>
      <div>
        {tabBtnData.map((tab) => {
          return (
            <TabButton
              isActive={tab === tabSelected}
              onSelect={() => onSelect(tab)}
              key={tab.id}
            >
              {tab.title}
            </TabButton>
          );
        })}
      </div>

      <div
        style={{ boxShadow: "3px 8px 9px rgba(0, 0, 0, 0.4)" }}
        className="tab-text-section p-4 mt-2 mx-auto"
      >
        {!tabSelected ? (
          <h4>{"Select an example"}</h4>
        ) : (
          <h2>{tabSelected.title}</h2>
        )}

        {!tabSelected ? null : <p>{tabSelected.description}</p>}
      </div>
    </section>
  );
}
