import React from 'react';
import {Button, Header, InputAntd} from "../../index";

import '../auth.scss';

const Login = () => {
    return (
        <>
            <Header signup={true} />
            <div className="all-blogs">
                <div className="container">
                    <div className="auth-box">
                        <form className="form" method='post' action={"/sign-up"}>
                            <h1 className="form__title">Sign Up</h1>
                            <div className="form__row">
                                <InputAntd name="username" label="Username" />
                            </div>
                            <div className="form__row">
                                <InputAntd name="password" label="Password" />
                            </div>
                            <div className="form__action">
                                <Button
                                    type="submit"
                                    size="small"
                                    className="button--warning">
                                    Register
                                </Button>
                            </div>

                            {/*<button type="submit" onClick={(e) => onSaveEditBlog(e)}>Save</button>*/}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;