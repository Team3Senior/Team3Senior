import React from "react";
import Button from "../Button/page";
import Navbar from "../Nav/page";
import Footer from "../Footer/page";
import "./NotFound.css";

export const ElementError: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-[1437px] h-[1063px] relative">
          <div className="inline-flex flex-col items-center gap-[40px] absolute top-[374px] left-[304px]">
            <div className="not">404 Not Found</div>
            <p className="phrase">
              Your visited page not found. You may go home page.
            </p>
          </div>
          <Button
            button="primary"
            className="!absolute !left-[569px] !top-[633px]"
            hover={false}
            text="Back to home page"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
