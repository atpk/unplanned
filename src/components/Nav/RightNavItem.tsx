interface Props {
  tabName: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
function RightNavItem({ tabName, activeTab, setActiveTab }: Props) {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${activeTab === tabName ? "active" : ""}`}
        onClick={() => setActiveTab(tabName)}
        style={{ cursor: "pointer", userSelect: "none" }}
      >
        {capitalizeFirstLetter(tabName)}
      </a>
    </li>
  );
}

export default RightNavItem;
