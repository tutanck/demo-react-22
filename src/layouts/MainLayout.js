import { Outlet } from "react-router-dom";

export default function LogoOnlyLayout() {
  return (
    <header className="App-header">
      <Outlet />
    </header>
  );
}
