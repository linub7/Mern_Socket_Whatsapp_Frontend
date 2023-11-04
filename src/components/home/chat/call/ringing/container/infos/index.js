const HomeChatScreenCallRingingContainerInfos = () => {
  return (
    <div className="flex items-center gap-x-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg"
        alt="caller profile"
        className="w-28 h-28 rounded-full object-cover"
      />
      <div>
        <h1 className="text-white">
          <b>Mohammad</b>
        </h1>
        <span className="dark:text-dark_text_2">Whatsapp video...</span>
      </div>
    </div>
  );
};

export default HomeChatScreenCallRingingContainerInfos;
