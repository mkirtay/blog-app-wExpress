import React from 'react';
import {Button} from "../../index";

const Login = () => {
    return (
        <div className="all-blogs">
            <div className="container">
                <h1>Sign Up Page</h1>
                <form className="form" method='post' action={"/sign-up"}>
                    <div className="form__row">
                        <span>Username:</span>
                        <input type="text" name="username"/>
                    </div>
                    <div className="form__row">
                        <span>Password:</span>
                        <input type="text" name="password"/>
                    </div>
                    <Button
                        type="submit"
                        size="small"
                        className="button--warning">
                        Register
                    </Button>

                    {/*<button type="submit" onClick={(e) => onSaveEditBlog(e)}>Save</button>*/}
                </form>
            </div>
        </div>
    )
}

export default Login;