var React    = require("react"),
    Name     = require("./userinfo/Name"),
    UserName = require("./userinfo/UserName"),
    Email    = require("./userinfo/Email"),
    Address  = require("./userinfo/Address");

class UserRow extends React.Component {

  render() {
    return (
      <section className="row">
          <Name userName={this.props.userName} name={this.props.name} />
          <UserName userName={this.props.userName} />
          <Email email={this.props.email} />
          <Address address={this.props.address} />
      </section>
    );
  }
};

module.exports = UserRow;