import iconZoom from "../../img/icon-zoom.svg";

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: "#2E3044",
    backgroundColor: state.isFocused ? "#E9E9E9" : "transparent",
    padding: "15px 48px",
    position: "relative",
    "&::after": {
      content: `''`,
      position: "absolute",
      left: "24px",
      right: "24px",
      top: "-1px",
      height: "1px",
      backgroundColor: "#E0E0E0"
    },
    "&:active": {
      backgroundColor: "rgba(198, 198, 198, 0.8)"
    }
  }),
  control: (base, state) => ({
    width: "435",
    display: "flex",
    minHeight: "48px",
    borderBottom: "1px solid var(--text-muted)",
    backgroundImage: `url(${iconZoom})`,
    backgroundPosition: "15px 50%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#F4F4F4",
    borderColor: state.isFocused
      ? "var(--background-secondary)"
      : base.borderColor
  }),
  indicatorsContainer: () => ({
    display: "none"
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
  placeholder: provided => ({
    ...provided,
    color: "#BCBCBC"
  }),
  valueContainer: provided => ({
    ...provided,
    padding: "2px 10px 2px 48px"
  }),
  menu: provided => ({
    ...provided,
    marginTop: 0,
    borderRadius: 0,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
    backgroundColor: "var(--background-muted)"
  }),
  menuList: provided => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0
  }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: "rgba(198, 198, 198, 0.5)",
    borderRadius: 62,
    overflow: "hidden"
  }),
  multiValueLabel: provided => ({
    ...provided,
    fontSize: "12px",
    padding: "5px 4px",
    paddingLeft: "8px",
    color: "#727272",
    borderRadius: 0
  }),
  multiValueRemove: provided => ({
    ...provided,
    color: "#727272",
    paddingRight: "8px",
    cursor: "pointer"
  })
};
