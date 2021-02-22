import React, { useEffect } from "react";
import styles from "./switch.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setAgnostic } from "../../redux/actions/industryAction";

export const Switch = ({ className }) => {
  const dispatch = useDispatch();
  const switchToggle = useSelector(({ store }) => store.agnostic);
  const [state, setState] = React.useState({
    toggleSwitch: switchToggle
  });

  useEffect(() => {
    dispatch(setAgnostic(state.toggleSwitch));
  }, [dispatch, state]);

  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  return (
    <div className={className}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          className={styles.input}
          name="toggleSwitch"
          checked={state.toggleSwitch}
          onChange={handleChange}
        />
        <span className={styles.slider}>
          <span className={`${styles.text} ${styles.off}`}>Off</span>
          <span className={`${styles.text} ${styles.on}`}>On</span>
        </span>
      </label>
    </div>
  );
};
