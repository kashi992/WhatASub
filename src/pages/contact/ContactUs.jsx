import React from "react";
import "./index.css";

const ContactUs = () => {
  return (
    <section className="bg-[#f1e1c8] min-[1370px]:pt-[100px] pt-[60px] min-[1370px]:pb-[132px] pb-[80px] flex-1">
      <div className="container">
        <div className="max-w-[480px] w-full mx-auto">
          <h1 className="fs56 font-extrabold text-center text-black leading-none">
            Get in touch
          </h1>
          <p className="fs18 leading-tight text-black md:mt-5 md:mb-12 mt-3 mb-6 text-center">
            Our friendly team would love to hear from you.
          </p>
          <form action="" className="contactFrom">
            <div style={{ gridArea: "a" }}>
              <label
                htmlFor=""
                className="block text-[#344054] text-sm mb-[6px]"
              >
                First name
              </label>
              <input
                type="text"
                className="h-[48px] px-4 py-3 text-[#667085] border-[1px] border-[#D0D5DD] bg-white rounded-[8px] w-full"
                placeholder="First name"
                style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
              />
            </div>
            <div style={{ gridArea: "b" }}>
              <label
                htmlFor=""
                className="block text-[#344054] text-sm mb-[6px]"
              >
                Last name
              </label>
              <input
                type="text"
                className="h-[48px] px-4 py-3 text-[#667085] border-[1px] border-[#D0D5DD] bg-white rounded-[8px] w-full"
                placeholder="Last name"
                style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
              />
            </div>
            <div style={{ gridArea: "c" }}>
              <label
                htmlFor=""
                className="block text-[#344054] text-sm mb-[6px]"
              >
                Email
              </label>
              <input
                type="email"
                className="h-[48px] px-4 py-3 text-[#667085] border-[1px] border-[#D0D5DD] bg-white rounded-[8px] w-full"
                placeholder="emailMe@company.com"
                style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
              />
            </div>
            <div style={{ gridArea: "d" }}>
              <label
                htmlFor=""
                className="block text-[#344054] text-sm mb-[6px]"
              >
                Phone number
              </label>
              <div
                className="flex items-center bg-white h-[48px] border-[1px] border-[#D0D5DD] rounded-[8px] px-4 py-3"
                style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
              >
                <select className="bg-transparent outline-none text-[#101828] text-base cursor-pointer">
                  <option value="US">US</option>
                  <option value="CA">CA</option>
                </select>
                <input
                  type="text"
                  className="h-full text-[#667085] w-full px-[14px]"
                  placeholder="+1 (800) 000-0000"
                />
              </div>
            </div>
            <div style={{ gridArea: "e" }}>
              <label
                htmlFor=""
                className="block text-[#344054] text-sm mb-[6px]"
              >
                Message
              </label>
              <textarea
                name=""
                id=""
                className="h-[128px] px-4 py-3 text-[#667085] border-[1px] border-[#D0D5DD] bg-white rounded-[8px] w-full"
                style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
              ></textarea>
            </div>
            <div className="checkboxWrap flex items-center justify-between" style={{ gridArea: "f" }}>
              <input
                type="checkbox"
                className="min-h-5 min-w-5 rounded-[6px]"
              />
              <span class="checkmark"></span>
              <label className="text-black fs18 w-full text-center block">
                You agree to our friendly privacy policy.
              </label>
            </div>
            <div style={{ gridArea: "g" }}>
              <input type="submit" className="w-full h-[48px] bg-[#00A500] rounded-[67px] text-white fs18 font-medium cursor-pointer border-[1px] border-[#00A500] hover:bg-transparent hover:text-[#00A500] transition-all duration-300 mt-2" value="Send Message!" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
