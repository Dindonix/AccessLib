import { useState } from "react";
import { nanoid } from "nanoid";
import useTabAttributes from "../hooks/useTabAttributes";

type Tabs = {
  id: number;
  label: string;
  content: string | JSX.Element;
  panelId: string;
};

type Styles = {
  container?: string;
  childContainer?: string;
  tabs?: string;
  activeTabs?: string;
  tabpanelContainer?: string;
  tabpanels?: string;
};

const Tabs = ({ tabs, style }: { tabs: Pick<Tabs, "content" | "label">[]; style: Styles }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const _tabs: Tabs[] = tabs.map((tab, index) => ({
    ...tab,
    id: index,
    panelId: nanoid(),
  }));

  const getAttributes = useTabAttributes(activeTab);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className={style?.container}>
      <div className={style?.childContainer} role="tablist">
        {_tabs.map((tab) => {
          const { selected, tabIndex } = getAttributes(tab.id);
          return (
            <button
              key={tab.id}
              className={`${activeTab === tab.id ? style.activeTabs ?? "" : ""} ${style.tabs ?? ""}`}
              role="tab"
              aria-selected={selected}
              aria-controls={tab.panelId}
              onClick={() => handleTabClick(tab.id)}
              tabIndex={tabIndex}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className={style?.tabpanelContainer}>
        {_tabs.map((tab) => {
          const { tabIndex } = getAttributes(tab.id);
          return (
            activeTab === tab.id && (
              <div key={tab.id} id={tab.panelId} role="tabpanel" className={style?.tabpanels} tabIndex={tabIndex}>
                {tab.content}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
