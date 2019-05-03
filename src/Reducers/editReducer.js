const initState = {
  firstName: "",
  lastName: "",
  sex: "",
  age: "",
  password1: "",
  password2: ""
};

export const editReducer = (state = initState, action) => {
  switch (action.type) {
    case "EDIT_FIRSTNAME":
      return { ...state, firstName: action.val };
    case "EDIT_LASTNAME":
      return { ...state, lastName: action.val };
    case "EDIT_SEX":
      return { ...state, sex: action.val };
    case "EDIT_AGE":
      return { ...state, age: action.val };
    case "EDIT_PWD1":
      return { ...state, password1: action.val };
    case "EDIT_PWD2":
      return { ...state, password2: action.val };
    case "GET_ONE":
      return {
        ...state,
        firstName: action.info.firstName,
        lastName: action.info.lastName,
        sex: action.info.sex,
        age: action.info.age,
        password1: action.info.password1,
        password2: action.info.password2
      };
    default:
      return state;
  }
};

export default editReducer;
