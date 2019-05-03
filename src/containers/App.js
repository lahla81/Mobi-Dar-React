import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import HeaderLogo from '../components/header/HeaderLogo';
import HeaderForm from '../components/header/HeaderForm';
import ALLBrandsHeader from '../components/Brands/AllBrandsHeader';
import AllBrands from '../components/mobiles/AllBrands';
import './App.css';
import '../components/assets/fonts/cairo/cairo.css';
import '../components/assets/css/bootstrap/bootstrap.css';
import '../components/assets/css/style.css';
import { setSearchField, requestMobiles } from '../actions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSignInAlt, faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
 
library.add(fab, faBars, faSignInAlt, faUserPlus, faSearch);
// fonoapi.token = '7a71b13f34799b7a68fdda1be26c879b23c3b9bb3d5f092e';

const mapStateToProps = state => {
  return {
    searchField: state.searchMobiles.searchField,
    mobiles: state.requestMobiles.mobiles,
    isPending: state.requestMobiles.isPending,
    error: state.requestMobiles.error
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestMobiles: () => requestMobiles(dispatch)
  }
}

class App extends Component {
 
  componentDidMount(){
    this.props.onRequestMobiles();
  }

  render() {
    const { searchField, onSearchChange, mobiles, isPending } = this.props;
    const filteredMobiles = mobiles.filter(mobiles => {
      return mobiles.name.toLowerCase().includes(searchField.toLowerCase())
    });
    
    return isPending ?
      <h1 className="text-center p-2 m-2 text-primary font-body-bold">.....Loading</h1> :
    (
      <div className="container">
        <Navbar />
        <HeaderLogo />
        <HeaderForm searchChange={onSearchChange}/>
        <ALLBrandsHeader />
        <AllBrands mobiles={filteredMobiles}/>
        {/* <Samsung mobiles={filteredMobiles}/> */}
        {/* <Sony mobiles={filteredMobiles}/> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
