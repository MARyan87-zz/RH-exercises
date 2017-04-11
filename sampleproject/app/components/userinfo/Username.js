var React  = require("react");

class Username extends React.Component {

  render() {
    return (
      <section className="col-xs-3 cell">
        <h3 className="break-word">{this.props.userName}</h3>
      </section>
    );
  }
};

module.exports = Username;