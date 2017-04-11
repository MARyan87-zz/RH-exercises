var React  = require("react"),
	helper = require("./utils/helper.js");

class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	selectedUser: {}
    }
  }

  componentDidMount(){
	helper.getUsers()
      .then(function (users) {
          this.setState({users: users});
          let username = this.props.params.username;

          this.state.users.forEach(function (user, i) {
          	 if (user.username === username) {
          	 	this.setState({selectedUser: user});
          	 }
          }.bind(this));
      }.bind(this));
  }

  render() {
    return (
      <section className="row well">
      	  <p className="col-xs-12"><a href="/">Back to all users</a></p>
	      <section className="col-xs-6">
	        <h1>User Details</h1>
	        <h3>Name: {this.state.selectedUser.name} (ID: {this.state.selectedUser.id})</h3>
	        <h4>Username: {this.state.selectedUser.username}</h4>
	      </section>
	      <section className="col-xs-6">
	      	 <h1>Contact Info</h1>
	      	 <h3>Phone Number: {this.state.selectedUser.phone}</h3>
	      	 <h4>Email: {this.state.selectedUser.email}</h4>
	      </section>
      </section>
    );
  }
};

module.exports = Details;