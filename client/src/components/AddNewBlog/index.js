import React, { useRef } from "react";


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
        <div className="add-new-blog">
            {/*onSubmit={onFormFinish}*/}
            <form action="/add-new-blog" method="post" className="form">
                <div className="form__row">
                    <label>
                        Blog Başlık <br/>
                        <input ref={refTitle} name="title" type="text"/>
                    </label>
                </div>
                <div className="form__row">
                    <label>
                        Blog Kısa Yazı <br/>
                        <input ref={refShort} name="short" type="text"/>
                    </label>
                </div>
                <div className="form__row">
                    <label>
                        Blog Uzun Yazı <br/>
                        <input ref={refLong} name="long" type="text"/>
                    </label>
                </div>
                <br/>
                <div className="form__action">
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddNewBlog;