var React = require("react"),
    helper = require("./utils/helper.js");

class Main extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
};

module.exports = Main;
