import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import { Link } from "react-router-dom";
import Match from "../Match";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      sex: "",
      age: "",
      password1: "",
      password2: "",
      match: false
    };
  }
  firstNameCreate = e => {
    this.setState({ firstName: e.target.value });
  };

  lastNameCreate = e => {
    this.setState({ lastName: e.target.value });
  };

  sexCreate = e => {
    this.setState({ sex: e.target.value });
  };

  ageCreate = e => {
    this.setState({ age: e.target.value });
  };

  passwordCreate = e => {
    this.setState({ password1: e.target.value });
  };
  repeatCreate = e => {
    this.setState({ password2: e.target.value });
    if (this.state.password1 === e.target.value) {
      this.setState({ match: true });
    } else {
      this.setState({ match: false });
    }
  };

  createOne = () => {
    if (this.state.password1 === this.state.password2) {
      let user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        sex: this.state.sex,
        age: this.state.age,
        password1: this.state.password1,
        password2: this.state.password2
      };
      this.props.addNewOne(user, this.props.history);
    }
  };
  render() {
    return (
      <div className="contain">
        <h2>Create A New User :</h2>
        <table style={{ height: 400 }}>
          <tbody>
            <tr>
              <td>
                <label>First Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  onChange={this.firstNameCreate}
                  placeholder="First Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Last Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  onChange={this.lastNameCreate}
                  placeholder="Last Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="sex">Sex:</label>
              </td>
              <td>
                <select
                  id="sex"
                  onChange={this.sexCreate}
                  value={this.state.sex}
                >
                  <option value="Option">Option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Age:</label>
              </td>
              <td>
                <input
                  type="text"
                  onChange={this.ageCreate}
                  placeholder="Age"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  onChange={this.passwordCreate}
                  placeholder="Password"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Repeat:</label>
              </td>
              <td>
                <input
                  type="password"
                  onChange={this.repeatCreate}
                  placeholder="Repeat Password"
                />
              </td>
              <td>
                <Match data={this.state.match} />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          disabled={this.state.match === false}
          type="button"
          className="btn btn-success"
          onClick={this.createOne}
        >
          <span className="glyphicon glyphicon-save" aria-hidden="true" />
          Create
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewOne: (user, history) => {
      dispatch(actions.addNewOne(user, history));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Create);
