var React  = require("react"),
    helper = require("./utils/helper.js"),
    UserRow = require("./UserRow");

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {users: [],
       headers: ["Name", "Username", "Email", "Address"]}
  }

  componentDidMount() {
    helper.getUsers()
      .then(function (users) {
          this.setState({users: users});
      }.bind(this));
  }

  sortedUsers(users) {
      return users.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          } 
          
          return 0;
      });
  }

  render() {
    return (
      <section className="container">
        <section className="row">
          {this.state.headers.map(function (header, i) {
              return (
                <section key={i} className="col-xs-3">
                  <h2>{header}</h2>
                </section>
              )
          }, this)}
          <section className="col-xs-12">
            {this.sortedUsers(this.state.users).map(function (user, i) {
              return (
                <section id={i} key={i} className="userRow">
                  <UserRow 
                    name={user.name}
                    userName={user.username}
                    email={user.email}
                    address={[{
                      "street":user.address.street,
                      "city": user.address.city,
                      "zipCode": user.address.zipcode
                    }]} />
                </section>
              );
            }, this)}
          </section>
        </section>
      </section>
    );
  }
}

module.exports = Users;