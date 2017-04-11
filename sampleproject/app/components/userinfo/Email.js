var React  = require("react");

class Email extends React.Component {

  render() {
    return (
      <section className="col-xs-3 cell">
        <h4 className="break-word">{this.props.email}</h4>
      </section>
    );
  }
};

module.exports = Email;