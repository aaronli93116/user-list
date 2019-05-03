import React, { Component } from "react";
import Row from "../Row";
import * as actions from "../../Actions";
import { connect } from "react-redux";

class UsersList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props.users);
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Edit</th>
            <th>Delete</th>

            <th>
              <label>FirstName</label>
              &nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-default"
                aria-label="Left Align"
                onClick={this.props.firstToUp}
              >
                <span
                  className="
glyphicon glyphicon-chevron-up"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                className="btn btn-default"
                aria-label="Left Align"
                onClick={this.props.firstToDown}
              >
                <span
                  className="
glyphicon glyphicon-chevron-down"
                  aria-hidden="true"
                />
              </button>
            </th>

            <th>
              <label>LastName</label>
              &nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-default"
                aria-label="Left Align"
                onClick={this.props.lastToUp}
              >
                <span
                  className="
glyphicon glyphicon-chevron-up"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                className="btn btn-default"
                aria-label="Left Align"
                onClick={this.props.lastToDown}
              >
                <span
                  className="
glyphicon glyphicon-chevron-down"
                  aria-hidden="true"
                />
              </button>
            </th>

            <th>
              <label>Sex</label>
              &nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-default"
                aria-label="Left Align"
                onClick={this.props.sexToUp}
              >
                <span
                  className="
glyphicon glyphicon-chevron-up"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                className="btn btn-default"
                aria-label="Left Align"
                onClick={this.props.sexToDown}
              >
                <span
                  className="
glyphicon glyphicon-chevron-down"
                  aria-hidden="true"
                />
              </button>
            </th>

            <th>
              <label>Age</label>
              &nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-default"
                aria-label="Left Align"
                onClick={this.props.ageToUp}
              >
                <span
                  className="
glyphicon glyphicon-chevron-up"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                className="btn btn-default"
                aria-label="Left Align"
                onClick={this.props.ageToDown}
              >
                <span
                  className="
glyphicon glyphicon-chevron-down"
                  aria-hidden="true"
                />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map((user, index) => {
            return (
              <Row
                key={index}
                firstName={user.firstName}
                lastName={user.lastName}
                sex={user.sex}
                age={user.age}
                _id={user._id}
                delete={this.props.delete}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.listReducer.filterUsers.slice(
      (state.listReducer.curPage - 1) * state.listReducer.pageNum,
      (state.listReducer.curPage - 1) * state.listReducer.pageNum +
        state.listReducer.pageNum
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(actions.getData());
    },
    delete: id => {
      dispatch(actions.deleteData(id));
    },
    firstToUp: () => {
      dispatch(actions.firstToUp());
    },
    firstToDown: () => {
      dispatch(actions.firstToDown());
    },
    lastToUp: () => {
      dispatch(actions.lastToUp());
    },
    lastToDown: () => {
      dispatch(actions.lastToDown());
    },
    sexToUp: () => {
      dispatch(actions.sexToUp());
    },
    sexToDown: () => {
      dispatch(actions.sexToDown());
    },
    ageToUp: () => {
      dispatch(actions.ageToUp());
    },
    ageToDown: () => {
      dispatch(actions.ageToDown());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
