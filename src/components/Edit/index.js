import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import { Link } from "react-router-dom";
import Match from "../Match";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: "",
      password2: "",
      match: false
    };
  }
  componentDidMount() {
    this.props.getUserById(this.props.match.params.userId);
  }

  firstNameChange = e => {
    this.props.editFirstName(e.target.value);
  };
  lastNameChange = e => {
    this.props.editLastName(e.target.value);
  };

  sexChange = e => {
    this.props.editSex(e.target.value);
  };

  ageChange = e => {
    this.props.editAge(e.target.value);
  };

  password1Change = e => {
    this.setState({ password1: e.target.value });
    this.props.editPwd1(e.target.value);
  };

  password2Change = e => {
    this.setState({ password2: e.target.value });
    if (this.state.password1 === e.target.value) {
      this.setState({ match: true });
      this.props.editPwd2(e.target.value);
    } else {
      this.setState({ match: false });
    }
  };

  editOne = () => {
    let user = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      sex: this.props.sex,
      age: this.props.age,
      password1: this.props.password1,
      password2: this.props.password2
    };
    this.props.editUser(
      this.props.match.params.userId,
      user,
      this.props.history
    );
  };

  render() {
    //console.log(this.props);
    return (
      <div className="contain">
        <h2>Edit User :</h2>
        <table style={{ height: 400 }}>
          <tbody>
            <tr>
              <td>
                <label>First Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  onChange={this.firstNameChange}
                  value={this.props.firstName}
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
                  onChange={this.lastNameChange}
                  value={this.props.lastName}
                  placeholder="Last Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="sex">Sex:</label>
              </td>
              <td>
                <select id="sex" onChange={this.sexChange}>
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
                  onChange={this.ageChange}
                  value={this.props.age}
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
                  onChange={this.password1Change}
                  value={this.state.password1}
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
                  onChange={this.password2Change}
                  value={this.state.password2}
                  placeholder="Repeat Password"
                  required
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
          onClick={this.editOne}
        >
          <span className="glyphicon glyphicon-save" aria-hidden="true" />
          Edit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstName: state.editReducer.firstName,
    lastName: state.editReducer.lastName,
    sex: state.editReducer.sex,
    age: state.editReducer.age,
    password1: state.editReducer.password1,
    password2: state.editReducer.password2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editUser: (id, index, history) => {
      dispatch(actions.update(id, index, history));
    },
    getUserById: id => {
      dispatch(actions.getUserById(id));
    },
    editFirstName: text => {
      dispatch(actions.editFirstName(text));
    },
    editLastName: text => {
      dispatch(actions.editLastName(text));
    },
    editSex: text => {
      dispatch(actions.editSex(text));
    },
    editAge: text => {
      dispatch(actions.editAge(text));
    },
    editPwd1: text => {
      dispatch(actions.editPwd1(text));
    },
    editPwd2: text => {
      dispatch(actions.editPwd2(text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
