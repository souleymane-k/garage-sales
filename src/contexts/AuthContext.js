
import React from 'react';

const AuthContext = React.createContext({
  setSignIn: () => {},
  setSignOut: () => {},
  setUsername: () => {},
  setUserId: () => {},
  setUser: () => {},
  user: {},
  username: '',
  userId: null,
  error: null,
  setError: () => {},
  clearError: () => {},
});

export default AuthContext;

export class AuthProvider extends React.Component {
  state = {
    error: null,
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setSignIn = () => {
    this.setState({ signin: true });
  };

  setSignOut = () => {
    this.setState({ signin: false });
  };

  setUsername = username => {
    this.setState({ username });
  };

  setUserId = userid => {
    this.setState({ userid });
  };

  setUser = (username, userid) => {
    this.setState({ user: { username, userid } });
  };

  render() {
    const value = {
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      signin: this.state.signin,
      setSignIn: this.setSignIn,
      setSignOut: this.setSignOut,
      setUsername: this.setUsername,
      username: this.state.username,
      password:this.state.password,
      setUserId: this.setUserId,
      userid: this.state.userid,
      setUser: this.setUser,
      user: this.state.user,
    };

    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}