import React from "react"
import PropTypes from "prop-types"


const Nav = ({ siteTitle }) => (
  <nav className="dt w-100 mw8 center"> 
  <div className="dtc v-mid tr pa3">
      <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >How it Works</a> 
      <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Pricing</a> 
      <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >About</a> 
      <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Careers</a> 
      <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Sign Up</a> 
  </div>
</nav> 

)

Nav.propTypes = {
    siteTitle: PropTypes.string,
  }
  
Nav.defaultProps = {
    siteTitle: ``,
  }

  export default Nav