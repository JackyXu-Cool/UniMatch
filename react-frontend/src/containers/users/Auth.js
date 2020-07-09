import React, { useState, Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actionCreators from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Auth.module.css";

import CheckIcon from "../../components/UI/CheckIcon/CheckIcon";

const Auth = (props) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    if (isSignUp) {
      props.onSubmitHandler({
        userName: data.userName,
        password: data.password,
        highschool: data.highschool,
        dreamschool: data.dreamschool,
        isSignUp: isSignUp,
      });
    } else {
      props.onSubmitHandler({
        email: data.email,
        password: data.password,
        isSignUp: isSignUp,
      });
    }
  };
  const [isSignUp, setIsSignUp] = useState(true);

  const signUpChangeHandler = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  let signUp = null;
  if (isSignUp) {
    signUp = (
      <Fragment>
        <Controller
          as={TextField}
          placeholder="Your Highschool here"
          inputProps={{
            maxLength: 50,
            pattern: "^[A-Za-z]+$",
          }}
          required
          name="highschool"
          control={control}
          defaultValue=""
        />
        <br />
        <hr />
        <Controller
          as={TextField}
          placeholder="Your Dreamschool here"
          inputProps={{
            maxLength: 50,
            pattern: "^[A-Za-z]+$",
          }}
          required
          name="dreamschool"
          control={control}
          defaultValue=""
        />
        <br />
        <hr />
      </Fragment>
    );
  }

  let mainForm = (
    <Fragment>
      <CheckIcon />
      <Button
        color="primary"
        variant="contained"
        onClick={props.onConfirmFirstLogin}
      >
        CONFIRM
      </Button>
    </Fragment>
  );

  if (!props.isFirstLogin && !props.isFirstLoginLoading) {
    mainForm = (
      <Fragment>
        {props.isAuth && <Redirect to="/" />}
        {props.error && <p>{props.error.message}</p>}
        {props.loading ? (
          <Spinner />
        ) : (
          <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              as={TextField}
              placeholder="Your Username here"
              inputProps={{
                maxLength: 20,
                pattern: "^[A-Za-z]+$",
              }}
              required
              name="userName"
              control={control}
              defaultValue=""
            />
            <br />
            <hr />
            <Controller
              as={TextField}
              placeholder="Your Password here"
              type="password"
              inputProps={{
                title:
                  "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
                pattern: "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}",
              }}
              required
              name="password"
              control={control}
              defaultValue=""
            />
            <br />
            <hr />
            {signUp}
            <Button type="submit" color="secondary" variant="contained">
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
            <br />
            <hr />
            <Button
              color="primary"
              variant="outlined"
              onClick={signUpChangeHandler}
            >
              Switch To {isSignUp ? "Login" : "Sign Up"}
            </Button>
          </form>
        )}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className={classes.Auth}>
        <div className={classes.AuthCard}>
          <p>
            <strong>Welcome To UniMatch</strong>
          </p>
          {mainForm}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToPorps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToPorps, mapDispatchToProps)(React.memo(Auth));
