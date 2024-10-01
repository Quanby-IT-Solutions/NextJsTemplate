const ProfileHeader: React.FC = () => {
  const menuItems = ["Edit Profile", "Preferences", "Security"];

  return (
    <nav className="flex text-base font-medium max-md:max-w-full">
      {menuItems.map((item, index) => (
        <div
          key={item}
          className={`flex flex-col ${
            index === 0 ? "text-blue-700" : "text-slate-400"
          }`}
        >
          <div className="self-center">{item}</div>
          <div
            className={`flex shrink-0 mt-2 ${
              index === 0
                ? "bg-blue-700 rounded-xl h-[3px]"
                : "h-px bg-gray-100"
            }`}
          />
        </div>
      ))}
    </nav>
  );
};

export default ProfileHeader;
