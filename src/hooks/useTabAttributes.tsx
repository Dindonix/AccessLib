const useTabAttributes = (activeTab: number) => {
  return (tabId: number) => ({
    tabIndex: activeTab === tabId ? 0 : -1,
    selected: activeTab === tabId ? true : false,
  });
};

export default useTabAttributes;
