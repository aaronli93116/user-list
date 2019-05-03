import React, { Component } from "react";
import * as actions from "../../Actions";
import { connect } from "react-redux";

class PageNav extends Component {
  constructor(props) {
    super(props);
    this.state = { num: this.props.pageNum };
  }
  getPageNum = e => {
    this.setState({ num: e.target.value });
  };

  editNum = () => {
    this.props.changePageNum(this.state.num);
  };

  render() {
    return (
      <div>
        <button
          type="button"
          disabled={this.props.curPage === 1}
          className="btn btn-primary btn-circle"
          onClick={this.props.getPrePage}
        >
          Pre Page
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          disabled={
            this.props.curPage >= Math.ceil(this.props.users.length / 5)
          }
          className="btn btn-primary btn-circle"
          onClick={this.props.getNextPage}
        >
          Next Page
        </button>
        <div style={{ float: "right" }}>
          <button className="btn btn-primary btn-circle" onClick={this.editNum}>
            submit
          </button>
          <input
            id="pageNum"
            style={{ width: 50 }}
            type="text"
            value={this.state.num}
            onChange={this.getPageNum}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.listReducer.filterUsers,
    curPage: state.listReducer.curPage,
    pageNum: state.listReducer.pageNum
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPrePage: () => {
      dispatch(actions.getPrePage());
    },
    getNextPage: () => {
      dispatch(actions.getNextPage());
    },
    changePageNum: text => {
      dispatch(actions.changePageNum(text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNav);
