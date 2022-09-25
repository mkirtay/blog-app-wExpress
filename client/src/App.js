import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import "antd/dist/antd.min.css";
import "./assets/css/_styles.scss";
import "./components/components.scss";



import Sagas from "./redux/sagas";
import reducer from "./redux/reducers";

import { BlogList, BlogsDetail, AddNewBlog, Login, SignUp } from './components'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(Sagas)


function App() {
  return (
      <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/page-list" element={
                    <div>
                        <NavLink to="/all-blogs">All Blogs</NavLink>
                        <br/>
                        <NavLink to="/add-new-blog">Add New Blog</NavLink>
                    </div>
                } />
                <Route path="/all-blogs" exact element={<BlogList />} />
                <Route path="/all-blogs/:id" element={<BlogsDetail />} />
                <Route path="/add-new-blog" exact element={<AddNewBlog />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/sign-up" exact element={<SignUp />} />
                <Route path="/sign-up" exact element={<SignUp />} />
                <Route path="/sign-up" exact element={<SignUp />} />
            </Routes>
        </Router>
      </Provider>
  )
}

export default App