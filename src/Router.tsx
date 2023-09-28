import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import AuthPageLayout from "./AuthPageLayout/AuthPageLayout";
import UserTableData from "./components/UserTableData";
import EditData from "./components/UpdateData/UpdateData";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route element={<AuthPageLayout />}>
          <Route path="/" Component={UserTableData} />
          <Route path="/user/edit/:id" Component={EditData} />
        </Route>
      </Routes>
    </>
  );
}
