const initState = {
  isFetching: false,
  data: [],
  err: null,
  filterUsers: [],
  curPage: 1,
  pageNum: 5
};

const listReducer = (state = initState, action) => {
  let arr = [];
  switch (action.type) {
    case "USER_FETCH_START":
      return {
        ...state,
        isFetching: true
      };
    case "USER_FETCH_FAIL":
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case "USER_FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        err: null,
        data: action.data,
        filterUsers: action.data
      };
    case "GET_FILTER":
      return {
        ...state,
        filterUsers: state.data.filter(
          user =>
            user.firstName.indexOf(action.text) !== -1 ||
            user.lastName.indexOf(action.text) !== -1 ||
            user.sex.indexOf(action.text) !== -1 ||
            user.age.indexOf(action.text) !== -1
        ),
        curPage: 1
      };

    case "FIRST_UP":
      arr = [];
      state.filterUsers.forEach(element => {
        arr.push(element);
      });
      arr.sort((a, b) => a.firstName.localeCompare(b.firstName));
      return {
        ...state,
        filterUsers: arr
      };
    case "FIRST_DOWN":
      arr = [];
      state.filterUsers.forEach(element => {
        arr.push(element);
      });
      arr.sort((a, b) => b.firstName.localeCompare(a.firstName));
      return {
        ...state,
        filterUsers: arr
      };

    case "LAST_UP":
      arr = [];
      state.filterUsers.forEach(element => {
        arr.push(element);
      });
      arr.sort((a, b) => a.lastName.localeCompare(b.lastName));
      return {
        ...state,
        filterUsers: arr
      };
    case "LAST_DOWN":
      arr = [];
      state.filterUsers.forEach(element => {
        arr.push(element);
      });
      arr.sort((a, b) => b.lastName.localeCompare(a.lastName));
      return {
        ...state,
        filterUsers: arr
      };

    case "SEX_UP":
      arr = [];
      state.filterUsers.forEach(element => {
        arr.push(element);
      });
      arr.sort((a, b) => a.sex.localeCompare(b.sex));
      return {
        ...state,
        filterUsers: arr
      };
    case "SEX_DOWN":
      arr = [];
      state.filterUsers.forEach(element => {
        arr.push(element);
      });
      arr.sort((a, b) => b.sex.localeCompare(a.sex));
      return {
        ...state,
        filterUsers: arr
      };

    case "AGE_UP":
      arr = [];
      state.filterUsers.forEach(element => {
        arr.push(element);
      });
      arr.sort((a, b) => a.age - b.age);
      return {
        ...state,
        filterUsers: arr
      };
    case "AGE_DOWN":
      arr = [];
      state.filterUsers.forEach(element => {
        arr.push(element);
      });
      arr.sort((a, b) => b.age - a.age);
      return {
        ...state,
        filterUsers: arr
      };

    case "PRE_PAGE":
      return {
        ...state,
        curPage: state.curPage - 1
      };

    case "Next_PAGE":
      return {
        ...state,
        curPage: state.curPage + 1
      };

    case "CHANGE_PAGE":
      return {
        ...state,
        pageNum: action.val
      };

    default:
      return state;
  }
};

export default listReducer;
