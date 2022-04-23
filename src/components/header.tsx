import { SignOut } from "./signout";
import { SvgIcon } from "./svg-icon";

export default function Header(): JSX.Element {
  return (
    <>
      <header className="chat-room-header">
        <SvgIcon type={"AccountCircleWhite24Dp"} />
        <div className="chat-title-wrapper">
          <span className="chat-title">Group Chat</span>
          <span className="chat-online-status">online</span>
        </div>
        <SignOut />
      </header>
    </>
  );
}
