import { Modal as MuiModal } from "@mui/material";
import clsx from "clsx";
import React from "react";
import { useState } from "react";

const Modal = () => {
  const localModal = localStorage.getItem("modal");
  const [modalOpen, setModalOpen] = useState<boolean>(
    (localModal && localModal === "false") ? false : true
  );
  const [check, setCheck] = useState<boolean>(false);
  return (
    <MuiModal open={modalOpen}>
      <div
        className="md:py-[40px] py-[25px] md:px-[50px] px-[20px] md:w-[680px] w-[320px] md:h-[524px] h-[299px] modal-bg"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 170, 255, 0.80)",
          outlineStyle: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <div className="font-sora-700 md:text-[55px] text-[30px] md:leading-[70px] leading-[38px] md:mb-[17px] mb-[10px]">
          Disclaimer
        </div>
        <div className="md:mb-[22px] mb-[12px] md:py-[20px] py-[18px] bg-white md:text-[12px] text-[8px] md:leading-[15px] leading-[10ox] rounded-[15px] ">
          <div className="beauty-scroll overflow-y-scroll md:h-[180px] h-[84px] md:px-[35px] px-[19px]">
            <span className="font-inter-600 ">
              [Age Requirement] <br />
            </span>
            <span className="font-inter-400 ">
              Participants in the XPLA Event must be at least 16 years old.
              Users must agree that they have reviewed and understood the age
              restriction policy of the XPLA Event to participate.
              <br />
            </span>
            <br />
            <span className="font-inter-600 ">
              [Agreement to Use and Collection of Personal Information] <br />
            </span>
            <span className="font-inter-400 ">
              MetaCross may collect and use your personal information for the
              event.
              <br />
              1) Purpose: For event participation. <br />
              2) Collected information: XPLA Vault wallet address
              <br />
              3) Storage & Usage Period: Kept for 3 months after the event's
              conclusion.
              <br />
              Refusal to provide consent for the collection and utilization of
              personal information is possible; however, it must be noted that
              such refusal will result in the inability to participate in the
              event.
              <br />
            </span>
            <br />
            <span className="font-inter-600 ">
              [Agreement to International Transfer of Personal Information]
              <br />
            </span>
            <span className="font-inter-400 ">
              MetaCross may transfer collected personal information globally to
              provide a seamless event.
              <br />
              - Transfer Destination: Singapore <br />
              - Transferred information: XPLA Vault wallet address
              <br />
              - Purpose: For event participation.
              <br />
              - Storage & Usage Period: Kept for 3 months after the event's
              conclusion.
              <br />
            </span>
            <br />

            <span className="font-inter-600 ">
              [Caution] <br />
            </span>
            <span className="font-inter-400 ">
              - This event is only open to participants aged 16 and above.
              <br />
              - Refusal to consent to the collection, use, and overseas transfer
              of personal information may result in limitations on event
              participation and reward distribution.
              <br />
              - Personal information of individuals under the age of 16 or users
              who are not selected as winners will be immediately destroyed.{" "}
              <br />
              - If you wish to withdraw your consent for the collected personal
              information, you may request access, correction, or deletion
              through the Personal Data Protection Department. However, in such
              cases, reward distribution may be canceled. <br />
              {">"} Request to open/revise/discard your personal information
              (free of charge): Please contact XPLA Customer Support
              (XPLA_CS@xpla.io).
              <br />
              - For more information, contact XPLA Customer Support:
              XPLA_CS@xpla.io <br />
              - To get rewards, you must submit your XPLA Vault Wallet address
              correctly.
              <br />
              - When an event winner claims an event reward, a small amount of
              $XPLA is required as a fee. <br />
              - The event schedule is subject to change depending on the
              situation. <br />
              - Any changes will get announced through our official communities:
              Twitter and Medium. <br />
              - Participation is available once per account. <br />
              - Restricted Country: China(PRC), Singapore, Japan, Korea, and the
              United States. <br />
              - If you abuse or overlap participation, you will be excluded from
              the winner's list. <br />
            </span>
            <br />
            <span className="font-inter-600 ">
              [IMPORTANT]
              <br />
            </span>
            <span className="font-inter-400 ">
              This information neither constitutes nor is intended to be, an
              offer or solicitation to buy, sell, subscribe to, underwrite, or
              purchase any form of investment, securities, or other financial
              instruments. It shall not serve as the foundation for, nor be
              relied upon in any manner in association with, any contractual
              arrangement, investment decision, or any other form of advice or
              prospectus relating to XPLA. Individuals who access this
              information or engage in XPLA transactions must conduct their own
              due diligence and ensure compliance with all local laws regarding
              cryptocurrency, tax, securities, and other regulations in their
              own jurisdiction. All local laws must be complied with, and access
              is prohibited in restricted areas, including, but not limited to
              the United States, People’s Republic of China, Singapore, Japan,
              and Korea.
            </span>
          </div>
        </div>

        <div className="md:mb-[31px] mb-[20px] flex items-center justify-center md:gap-[15px]">
          <div
            onClick={() => {
              setCheck(!check);
            }}
            className="relative overflow-visible md:w-[30px] w-[14px] md:h-[30px] h-[14px] border-solid border-[1px] border-black bg-white hover:cursor-pointer md:mr-[0px] mr-[6px]"
          >
            {check && (
              <img
                src="/img/check.svg"
                alt="check"
                width="35px"
                height="31px"
                className="absolute bottom-0 max-w-[35px] md:w-[35px] md:h-[31px] w-[18px] h-[16px]"
              />
            )}
          </div>
          <div className="font-inter-600 md:text-[16px] text-[8px] md:leading-[19px] leading-[10px] tracking-tight">
            I agree to the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://assets.xpla.io/pdf/TERMS_OF_USE.pdf"
              className="underline"
            >
              Terms of Use,
            </a>{" "}
            the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://assets.xpla.io/pdf/PRIVACY_POLICY.pdf"
              className="underline"
            >
              Privacy Policy
            </a>
            , and event disclaimer.
          </div>
        </div>

      </div>
    </MuiModal>
  );
};
export default Modal;
