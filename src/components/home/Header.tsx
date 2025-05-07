import SecondButton from "@/components/UI/SecondButton";

const Header = () => {
  return (
    <div className="flex items-center px-[15px] justify-end gap-2.5 lg:justify-between py-2.5 bg-jet border-b border-smoke-white/40 h-[55px]">
      <div className="hidden z-10 md:flex gap-2.5  items-center">
        <SecondButton>
          <img
            width={20}
            height={20}
            src="/Expand_right_double.svg"
            alt="right double"
          />
        </SecondButton>
        <SecondButton className="px-4">
          <span className="text-smoke-white capitalize">example session</span>
          <img
            className="-rotate-90"
            width={20}
            height={20}
            src="/Expand_down.svg"
            alt="right double"
          />
        </SecondButton>
        <SecondButton className="px-4">
          <img
            width={20}
            height={20}
            src="/Arhive_alt_export_light.svg"
            alt="right double"
          />
          <span className="text-smoke-white  capitalize">upload file</span>
        </SecondButton>
      </div>
      <div className="flex-center gap-3.5">
        <SecondButton>
          <img
            width={20}
            height={20}
            src="/Save_light.svg"
            alt="right double"
          />
        </SecondButton>
        <SecondButton>
          <img
            width={20}
            height={20}
            src="/Load_list_alt_light.svg"
            alt="right double"
          />
        </SecondButton>
        <SecondButton>
          <img
            width={20}
            height={20}
            src="/Copy_alt_light.svg"
            alt="right double"
          />
        </SecondButton>
        <SecondButton>
          <img
            className="rotate-180"
            width={20}
            height={20}
            src="/Arhive_alt_export_light.svg"
            alt="right double"
          />
        </SecondButton>
      </div>
    </div>
  );
};

export default Header;
