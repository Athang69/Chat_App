import { SendIcon } from "../Icons/sendIcon";
import { CardSent } from "./Card";
import { CardRecieved } from "./Card2";

export function MainUI(){
  return <div>
    <div className="relative h-screen flex">
      <input className="absolute bottom-1.5 left-1.5 border-2 rounded-md w-385 p-2" type="text" placeholder="Messages"></input>
      <button className="cursor-pointer" onClick={()=>{
        alert("Hii there")
      }}>
        <div className="absolute bottom-2 left-388 text-chat_bg items-center justify-center">
          <SendIcon />
        </div>
      </button>
      <div className="absolute bottom-20 left-7">
        <CardSent />
      </div>
      <div className="absolute bottom-20 right-7">
        <CardRecieved />
      </div>
    </div>
  </div>
}