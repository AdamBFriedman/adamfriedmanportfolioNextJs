interface FilterButtonProps {
  setFilter: (filter: string) => void;
  isDarkMode: boolean;
}

const buttons = ["all", "javascript", "react", "vue", "html"];
const FilterButtons = (props: FilterButtonProps) => {
  const { setFilter, isDarkMode } = props;
  return (
    <div className={"filterButtons"}>
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            id={button}
            onClick={() => {
              setFilter(button);
            }}
            className={
              isDarkMode
                ? [
                    "btn",
                    "buttonDefault",
                    "filterButton",
                    "filterButtonDark",
                  ].join(" ")
                : [
                    "btn",
                    "buttonDefault",
                    "filterButton",
                    "filterButtonLight",
                  ].join(" ")
            }
          >
            {button.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
