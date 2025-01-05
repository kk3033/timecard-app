import React from "react";
import logoMark from "../corporate_logo.svg";

const Navbar = ({ isSignedIn }) => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="">
            <img
              src={logoMark}
              className="flex items-left justify-between h-16"
              alt="Corporate logo"
            />
          </a>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {/* ログイン前ホーム画面 --> ログイン情報入力ボックス
　　ログイン後マイページ画面 --> ユーザー名表示 */}
              {isSignedIn ? (
                <p className="text-yellow-500">お疲れ様です！ ～～さん</p>
              ) : (
                <div className="ml-4 flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Employee ID/Address..."
                  ></input>
                  <input type="text" placeholder="Password..."></input>
                  <button className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                    Login
                  </button>
                  {/* <a
                href="../MyPage.js"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Login
              </a> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
