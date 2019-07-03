import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { login } from './../actions/session_actions';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
        this.helperfxn = this.helperfxn.bind(this);
    }

    demoLogin() {
       this.props.demoLogin({username: 'Demo User', password:'123456'}).then(() => this.helperfxn) 
    }

    componentDidMount() {
        document.title = 'Dotify'
    }

    helperfxn() {
        this.props.history.push('/browse/featured');
    }

    render() {

        return (
        <div className="splash">
            <div className="splash-nav">
                <div className="splash-navlinks">
                    {/* <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Log In</Link> */}
                </div>
            </div>

            <div className="splash-img">
                <h1>Music for everyone.</h1>
                <h3>Millions of songs. No credit card needed.</h3>
                <button onClick={this.demoLogin} id="splash-button"> DOTIFY DEMO </button>
            </div>

            <div className="footer">
                <p className="words">Dotify</p>
                <div className="lists">
                    <div>
                        <h3>Sources</h3>
                        <h4><a href="">GitHub </a> </h4>
                        <h4><a href="">LinkedIn </a> </h4>
                    </div>
                    <div>
                        <h3>Useful Links</h3>
                        <h4><a href="/#/signup"> Sign Up </a> </h4>
                        <h4><a href="/#/login"> Log In </a> </h4>
                        <h4><a href="/#/"> Home </a> </h4>
                    </div>
                </div>

            </div>

        </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    demoLogin: () => dispatch(demoLogin())
});

export default withRouter(connect(null, mapDispatchToProps)(Splash))