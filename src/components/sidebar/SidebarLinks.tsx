import { IconLinkProps, SidebarControlProps } from "@/types";
import SidebarLink from "./SidebarLink";

const SidebarLinks = ({ fullSidebar }: SidebarControlProps) => {
  const links: IconLinkProps[] = [
    {
      title: "dashboard",
      to: "/",
      icon: "/Home.svg",
    },
    {
      title: "chatbots",
      to: "/not-found",
      icon: "/Chat_alt_2.svg",
    },
    {
      title: "files",
      to: "/not-found",
      icon: "/File.svg",
    },
    {
      title: "prompts",
      to: "/not-found",
      icon: "/File_dock.svg",
    },
    {
      title: "file wizard",
      to: "/not-found",
      icon: "/Ticket.svg",
    },
    {
      title: "api",
      to: "/not-found",
      icon: "/CPU.svg",
    },
    {
      title: "user guide",
      to: "/not-found",
      icon: "/Book_open_alt.svg",
    },
  ];

  return (
    <div className="mt-3.5">
      <h3 className="text-xl min-h-7 max-h-7 font-semibold text-dark-one mb-6 px-3.5">
        {fullSidebar && "Menu"}
      </h3>
      <div className="flex flex-col gap-4">
        {links.map(({ icon, to, title }) => (
          <SidebarLink
            key={title}
            fullSidebar={fullSidebar}
            title={title}
            to={to}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarLinks;
