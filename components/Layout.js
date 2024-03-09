import BottomBar from "./BottomBar";
import LeadsBoard from "./LeadsBoard";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

function Layout({children}) {
  // console.log(children)
  return (
    <div className="min-w-full min-h-screen h-screen overflow-hidden bg-teal-100">
    {/* // <div className="min-w-full min-h-screen bg-teal-100"> */}
    {/* // <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden bg-teal-100"> */}
      <TopBar/>
      <SideBar/>
      {/* <main className="pl-40 pt-16">
        {children}
      </main> */}
      <LeadsBoard>{children}</LeadsBoard>
      <BottomBar />
    </div>
  )
}

export default Layout;