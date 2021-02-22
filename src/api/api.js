import {setIndustries, setLoading} from "../redux/actions/industryAction";

export const fetchIndustry = () => dispatch => {
  dispatch(setLoading(true));
  fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=15`)
    .then(resp => resp.json())
    .then(json => {
      const items = json.map(item => {
        return {
          id: item.id,
          value: item.title,
          label: item.title
        };
      });
      dispatch(setIndustries(items));
    }).catch(function(error) {
      throw new Error(error);
  });
};
