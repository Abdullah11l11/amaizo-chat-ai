import { UIProps } from "@/types";

const ProfilePhoto = ({ children, className }: UIProps) => {
  return (
    <div className={`bg-coral flex-center rounded-2xl w-12 h-12 ${className}`}>
      {children}
    </div>
  );
};

export default ProfilePhoto;
