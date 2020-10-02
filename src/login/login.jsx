import React from "react";

const Login = () => {
  return (
    <React.Fragment>
      <div class="user-page">
        <header class="page-header user-page__head">
          <div class="logo">
            <a href="main.html" class="logo__link">
              <span class="logo__letter logo__letter--1">W</span>
              <span class="logo__letter logo__letter--2">T</span>
              <span class="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 class="page-title user-page__title">Sign in</h1>
        </header>

        <div class="sign-in user-page__content">
          <form action="#" class="sign-in__form">
            <div class="sign-in__fields">
              <div class="sign-in__field">
                <input class="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label class="sign-in__label visually-hidden" for="user-email">Email address</label>
              </div>
              <div class="sign-in__field">
                <input class="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label class="sign-in__label visually-hidden" for="user-password">Password</label>
              </div>
            </div>
            <div class="sign-in__submit">
              <button class="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer class="page-footer">
          <div class="logo">
            <a href="main.html" class="logo__link logo__link--light">
              <span class="logo__letter logo__letter--1">W</span>
              <span class="logo__letter logo__letter--2">T</span>
              <span class="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div class="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Login;
