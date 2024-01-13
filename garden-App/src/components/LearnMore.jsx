import TabButton from "./TabButton";
import { useState } from "react";

const tabBtnData = [
  {
    id: 1,
    title: "Watering",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    title: "Sunlight",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    title: "Tools",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 4,
    title: "Patience",
    description:
      "Lasdfasdforem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
];

export default function LearnMore() {
  const [currentTab, setCurrentTab] = useState(null);

  function changeCurrentTab(tab) {
    setCurrentTab(tab);
  }

  return (
    <section className="mt-5">
      <h4>Examples</h4>
      <div>
        {tabBtnData.map((tab) => {
          return (
            <TabButton
              changeCurrentTab={() => changeCurrentTab(tab)}
              key={tab.id}
            >
              {tab.title}
            </TabButton>
          );
        })}
      </div>

      <div className="bg-success p-5 mt-2">
        {!currentTab ? (
          <h2>{tabBtnData[0].title}</h2>
        ) : (
          <h2>{currentTab.title}</h2>
        )}

        {!currentTab ? (
          <p>{tabBtnData[0].description}</p>
        ) : (
          <p>{currentTab.description}</p>
        )}
      </div>
    </section>
  );
}
