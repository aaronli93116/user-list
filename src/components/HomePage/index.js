import React, { Component } from "react";
import { connect } from "react-redux";
import UsersList from "../UsersList";
import Page from "../PageNav";
import * as actions from "../../Actions";
import { Link } from "react-router-dom";
import "./style.css";

class HomePage extends Component {
  getKeyWord = e => {
    this.props.searchKeyWord(e.target.value);
  };

  render() {
    return (
      <div className="contain">
        <h2>Users</h2>
        <br />
        <div style={{ display: "flex" }}>
          <label htmlFor="search">Search:</label>
          &nbsp;&nbsp;&nbsp;
          <input
            id="search"
            style={{ width: 600 }}
            type="text"
            className="form-control"
            value={this.props.searchInfo}
            onChange={this.getKeyWord}
            placeholder="Search..."
          />
        </div>
        <UsersList />
        <Page />
        <div className="line">
          <button type="button" className="btn btn-success">
            <span className="glyphicon glyphicon-user" aria-hidden="true" />
            <Link to="/addOne">Create NewOne</Link>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchKeyWord: key => {
      dispatch(actions.searchKeyWord(key));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
