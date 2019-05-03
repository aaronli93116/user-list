import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap/Button";
class Row extends Component {
  render() {
    return (
      <tr>
        <td>
          <button
            style={{ backgroundColor: "#dcdcdc" }}
            type="button"
            className="btn"
            aria-label="Left Align"
          >
            <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
            <Link to={{ pathname: `/edituser/${this.props._id}` }}>Edit</Link>
          </button>
        </td>
        <td>
          <button
            style={{ backgroundColor: "#dcdcdc" }}
            type="button"
            className="btn"
            aria-label="Left Align"
            onClick={() => this.props.delete(this.props._id)}
          >
            <span
              className="glyphicon glyphicon-remove-circle"
              aria-hidden="true"
            />
            Delete
          </button>
        </td>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.sex}</td>
        <td>{this.props.age}</td>
      </tr>
    );
  }
}

export default Row;
