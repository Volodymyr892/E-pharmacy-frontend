import { Outlet } from "react-router-dom";

export default function ShearedLayout() {
  return (
    <div>
      <p>ShearedLayout</p>
      <Outlet />
    </div>
  )
}