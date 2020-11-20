import React, {Fragment} from "react";
import PropTypes from "prop-types";
import UserBlock from "../user-block/user-block";
import Logo from "../logo/logo";

const Header = (props) => {
  const {children, background, title} = props;
  return (
    <Fragment>
      <div className="movie-card__bg">
        <img src={background} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <Logo/>
        {children}
        <UserBlock/>
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
