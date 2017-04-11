var React  = require("react");

class Address extends React.Component {

  render() {
    return (
      <section className="col-xs-3 cell">
        <h5>{this.props.address[0].street}</h5>
        <span>{this.props.address[0].city} </span>
        <span>{this.props.address[0].zipCode}</span>
      </section>
    );
  }
};

module.exports = Address;