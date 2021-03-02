import React, { useState, useEffect } from "react";
import { MultipleSelect } from "../selects/MultipleSelect";
import { SingleSelect } from "../selects/SingleSelect";
import { Button } from "../button";
import { Switch } from "../switch";
import styles from "./form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  removeExclusions,
  resetAllIndustries,
  resetExclusionsIndustries,
  resetFavoriteIndustries,
  setExclusions,
  setFavoriteIndustries
} from "../../redux/actions/industryAction";
import { fetchIndustry } from "../../api/api";

export const Form = () => {
  const favoriteItems = useSelector(({ store }) => store.favoriteIndustries);
  const exclusionItems = useSelector(({ store }) => store.exclusionIndustries);
  const switchToggle = useSelector(({ store }) => store.agnostic);
  const industries = useSelector(({ store }) => store.industries);
  const dispatch = useDispatch();
  const [value, setValue] = useState(exclusionItems);
  const [valueFavorite, setValueFavorite] = useState(favoriteItems);
  const [valueId, setValueId] = useState(0);

  useEffect(() => {
    dispatch(fetchIndustry());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setExclusions({ value, valueId }));
  }, [dispatch, value, valueId]);

  useEffect(() => {
    dispatch(setFavoriteIndustries(valueFavorite));
  }, [dispatch, valueFavorite]);

  const onChange = items => {
    const idItem = items.map(item => item.id).pop();
    if (exclusionItems) {
      const removeItem = exclusionItems.filter(item => !items.includes(item));
      removeItem[0] && dispatch(removeExclusions(removeItem[0]));
    }
    setValue(items);
    setValueId(idItem);
  };

  const handleResetFavorites = () => {
    dispatch(resetFavoriteIndustries());
  };
  const handleResetExclusions = () => {
    dispatch(resetExclusionsIndustries());
  };
  const handleResetAll = () => {
    dispatch(resetAllIndustries());
  };

  const submitObj = {
    industries: favoriteItems,
    exclusions: exclusionItems,
    agnostic: switchToggle
  };

  const handleSubmit = () => {
    console.log(submitObj);
  };

  return (
    <form noValidate className={styles.form} onClick={handleSubmit}>
      <div className="text-large margin-medium-bottom">
        Determine your industry preferences
      </div>
      <div className="text-small text-muted margin-small-bottom">
        Industry agnostic
      </div>
      <Switch className="margin-medium-bottom" />
      <div className="divider">
        <span>Or</span>
      </div>
      <div className={`${styles.frame} ${switchToggle ? styles.blur : ""}`}>
        <SingleSelect
          industries={industries}
          setValueFavorite={setValueFavorite}
          favoriteItems={favoriteItems}
          switchToggle={switchToggle}
          className="margin-medium-bottom"
        />
        <MultipleSelect
          industries={industries}
          onChange={onChange}
          exclusionItems={exclusionItems}
          className="margin-medium-bottom"
          switchToggle={switchToggle}
        />
        {!!favoriteItems.length && !exclusionItems.length ? (
          <div className="margin-small-bottom">
            <Button textButtons onClick={handleResetFavorites}>
              Reset industries
            </Button>
          </div>
        ) : !!favoriteItems.length && !!exclusionItems.length ? (
          <div className="margin-small-bottom">
            <Button textButtons onClick={handleResetAll}>
              Reset All
            </Button>
          </div>
        ) : !favoriteItems.length && !!exclusionItems.length ? (
          <div className="margin-small-bottom">
            <Button textButtons onClick={handleResetExclusions}>
              Reset exclusions
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
      <hr className="hr" />
      <Button>Continue</Button>
    </form>
  );
};
