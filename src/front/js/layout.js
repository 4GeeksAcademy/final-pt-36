import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Dashboard } from "./pages/dashboard";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CreateMuestra } from "./pages/adminViews/createMuestra";
import { ViewMuestras } from "./pages/adminViews/viewMuestras";
import { ViewWorkers } from "./pages/adminViews/viewWorkers";
import { UserGetMuestra } from "./pages/userViews/usergetmuestra";
import { PendingTask } from "./pages/userViews/pendingtask";
import { MakeMuestra } from "./pages/userViews/makemuestra";
import { CreateProject } from "./pages/adminViews/createAssign/createProject";
import { AssignTask } from "./pages/adminViews/createAssign/assignTask";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;



    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={ <Dashboard />} path="/dashboard" />
                        <Route element={<CreateMuestra />} path="/dashboard/create" />
                        <Route element={<CreateProject />} path="/dashboard/createproject" />
                        <Route element={<AssignTask />} path="/dashboard/assigntask" />
                        <Route element={<ViewMuestras />} path="/dashboard/viewmuestras" />
                        <Route element={<ViewWorkers />} path="/dashboard/workers" />
                        <Route element={<UserGetMuestra />} path="/dashboard/usergetmuestra" />
                        <Route element={<PendingTask />} path="/dashboard/pendingtask" />
                        <Route element={<MakeMuestra />} path="/dashboard/makemuestra" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
