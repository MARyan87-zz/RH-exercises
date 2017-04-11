var React  = require("react"),
	Details = require("../Details");

class Name extends React.Component {

  render() {
    return (
      <section className="col-xs-3 cell">
        <h3 className="break-word"><a href={"#/details/" + this.props.userName}>{this.props.name}</a></h3>
      </section>
    );
  }
};

module.exports = Name;