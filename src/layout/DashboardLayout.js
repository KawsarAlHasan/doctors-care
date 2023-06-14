import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contex/AuthProvider";
import useAdmin from "../hooks/useAdmin";

function DashboardLayout() {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                  <Link to="/dashboard/adddoctor">Add A Doctor</Link>
                  <Link to="/dashboard/managedoctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
