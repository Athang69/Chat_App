import { MainUI } from "./MainUI";
import { Sidebar } from "./Sidebar";

export function Layout(){
  return <div>
    <div className="flex h-screen w-screen">
        <Sidebar />
      <div className="flex-1 bg-chat_ui_bg">
        <MainUI />
      </div>
    </div>
  </div>
}