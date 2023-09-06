import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
import NoteState from "../context/notes/NoteState";
import UserState from "../context/user/UserState";

const Layout = () => {
  return (
    <>
      <UserState>
        <NoteState>
          <Header />
          <main>
            <Routers />
          </main>
          <Footer />
        </NoteState>
      </UserState>
    </>
  );
};

export default Layout;
