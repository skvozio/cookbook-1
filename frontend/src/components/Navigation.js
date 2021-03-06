import React from "react";
import {withRouter, NavLink} from "react-router-dom";
import SearchBar from "./SearchBar";

function Navigation(props) {
    const {isLoggedIn, state, logout} = props;
    return (
        <>
            <header id="masthead" className="site-header navbar-fixed-top">
                <div className="header-navigation">
                    <div className="container-fluid">
                        <nav className="site-navigation navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink to="/" exact={true} activeClassName="active"
                                                 className="nav-link">Home</NavLink>
                                    </li>

                                    {isLoggedIn ? (
                                        <>
                                            <li className="nav-item">
                                                <NavLink to="/add-recipe" activeClassName="active" className="nav-link">Add
                                                    Recipe</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to={`/my-recipes/`} activeClassName="active"
                                                         className="nav-link">My recipes</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to={`/favorites/`} activeClassName="active"
                                                         className="nav-link">Favorites</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/my-account/" activeClassName='active' className='nav-link'>My
                                                    account</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/" className='nav-link' activeClassName=""
                                                         onClick={logout}>Logout</NavLink>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="nav-item">
                                                <NavLink to='/register' activeClassName='active'
                                                         className='nav-link'>Registration</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to='/login' activeClassName='active'
                                                         className='nav-link'>Login</NavLink>
                                            </li>
                                        </>
                                    )}
                                <li className="nav-item">
                                    <div className="search-container">
                                <button type="button" className="buttonsearch" id="buttonsearch">
                                    <i className="fas fa-search openclosesearch"></i>
                                    <i className="fas fa-times openclosesearch" style={{display:"none"}}></i>
                                </button>
                            </div>
                                </li>
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>

            </header>
            <SearchBar/>
        </>
    )
}

export default withRouter(Navigation)