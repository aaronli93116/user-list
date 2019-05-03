import axios from "axios";

export function requestStart() {
  return {
    type: "USER_FETCH_START"
  };
}
export function requestSuccess(response) {
  return {
    type: "USER_FETCH_SUCCESS",
    data: response.data
  };
}
export function requestFail(error) {
  return {
    type: "USER_FETCH_FAIL",
    error
  };
}

export function getOne(response) {
  return {
    type: "GET_ONE",
    info: response.data
  };
}

export function getData() {
  return (dispatch, store) => {
    dispatch(requestStart());
    axios
      .get("http://localhost:8888/users")
      .then(response => {
        dispatch(requestSuccess(response));
      })
      .catch(err => {
        dispatch(requestFail(err));
      });
  };
}

export function getUserById(id) {
  return dispatch => {
    dispatch(requestStart());
    axios
      .get("http://localhost:8888/users/" + id, {
        id: id
      })
      .then(response => {
        dispatch(getOne(response));
      })
      .catch(err => {
        dispatch(requestFail(err));
      });
  };
}

export function addNewOne(user, history) {
  return dispatch => {
    dispatch(requestStart());
    axios
      .post("http://localhost:8888/users/", {
        firstName: user.firstName,
        lastName: user.lastName,
        sex: user.sex,
        age: user.age,
        password1: user.password1,
        password2: user.password2
      })
      .then(() => {
        console.log(history);
        history.push("/");
      })
      .catch(err => {
        dispatch(requestFail(err));
      });
  };
}

export function update(id, user, history) {
  return dispatch => {
    dispatch(requestStart());
    axios
      .put("http://localhost:8888/users/" + id, {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        sex: user.sex,
        age: user.age,
        password1: user.password1,
        password2: user.password2
      })
      .then(() => {
        console.log(history);
        history.push("/");
      })
      .catch(err => {
        dispatch(requestFail(err));
      });
  };
}

export function deleteData(id) {
  return dispatch => {
    dispatch(requestStart());
    axios
      .delete("http://localhost:8888/users/" + id, {
        id: id
      })
      .then(response => {
        dispatch(getData());
      })
      .catch(err => {
        dispatch(requestFail(err));
      });
  };
}

export const editFirstName = val => ({
  type: "EDIT_FIRSTNAME",
  val: val
});

export const editLastName = val => ({
  type: "EDIT_LASTNAME",
  val: val
});
export const editSex = val => ({
  type: "EDIT_SEX",
  val: val
});
export const editAge = val => ({
  type: "EDIT_AGE",
  val: val
});

export const editPwd1 = val => ({
  type: "EDIT_PWD1",
  val: val
});

export const editPwd2 = val => ({
  type: "EDIT_PWD2",
  val: val
});

export const searchKeyWord = text => ({
  type: "GET_FILTER",
  text
});

export function firstToUp() {
  return {
    type: "FIRST_UP"
  };
}

export function firstToDown() {
  return { type: "FIRST_DOWN" };
}

export function lastToUp() {
  return {
    type: "LAST_UP"
  };
}

export function lastToDown() {
  return { type: "LAST_DOWN" };
}

export function sexToUp() {
  return {
    type: "SEX_UP"
  };
}

export function sexToDown() {
  return { type: "SEX_DOWN" };
}

export function ageToUp() {
  return {
    type: "AGE_UP"
  };
}

export function ageToDown() {
  return { type: "AGE_DOWN" };
}

export function getPrePage() {
  return { type: "PRE_PAGE" };
}

export function getNextPage() {
  return { type: "Next_PAGE" };
}

export const changePageNum = val => ({
  type: "CHANGE_PAGE",
  val: val
});
