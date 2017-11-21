import React, { PropTypes, Component } from "react";
import { paths } from "../../../../config/router";
import { browserHistory } from "react-router";

class GlobalSearch extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: this.props.params.search ? this.props.params.search : ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    let searchWord = this.state.search;
    const route = paths.tasks_search.replace(":search", encodeURI(searchWord));
    browserHistory.push(route);
  };

  render() {
    return (
      <div style={{ marginLeft: "20px", width: "300px", float: "left" }}>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
            className="md-input"
            type="text"
            style={{
              marginTop: "12px",
              border: 0,
              height: "26px",
              display: "inline-block",
              width: "250px",
              background: "white"
            }}
          />
          <button className="uk-button-link ">
            <i className="md-icon material-icons" style={{ color: "white" }}>
              &#xE8B6;
            </i>
          </button>
        </form>
      </div>
    );
  }
}

export default GlobalSearch;
