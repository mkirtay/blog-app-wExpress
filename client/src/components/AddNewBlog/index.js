import React, { useRef } from "react";

import {Button, Header, InputAntd} from "../index";

const AddNewBlog = () => {
    const refTitle = useRef(null);
    const refShort = useRef(null);
    const refLong = useRef(null);

    /*const newBlogContent = useSelector(state => state)

    const onFormFinish = (e) => {
        dispatch({
            type: actions.GET_ADD_NEW_BLOG,
            payload: {
                title: refTitle.current.value,
                short: refShort.current.value,
                long: refLong.current.value
            }
        })

        e.preventDefault();
    }*/

    return (
        <>
            <Header />
            <div className="add-new-blog">
                {/*onSubmit={onFormFinish}*/}
                <div className="container">
                    <div className="auth-box">
                        <form action="/add-new-blog" method="post" className="form">
                            <div className="form__row">
                                <InputAntd name="title" label="Blog Başlık" />
                            </div>
                            <div className="form__row">
                                <InputAntd name="short" label="Blog Kısa Yazı" />
                            </div>
                            <div className="form__row">
                                <InputAntd name="long" label="Blog Uzun Yazı" />
                            </div>
                            <br/>
                            <div className="form__action">
                                <Button
                                    type="submit"
                                    size="small"
                                    className="button--warning">
                                    Add New Blog
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewBlog;