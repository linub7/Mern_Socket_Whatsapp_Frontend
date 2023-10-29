const FilePreviewInput = ({ message, setMessage }) => {
  const handleChange = (e) => setMessage(e.target.value);
  return (
    <div className="w-full max-w-[60%] dark:bg-dark_hover_1 rounded-lg">
      <input
        className="w-full bg-transparent h-11 pl-2 focus:outline-none border-none dark:text-dark_text_1"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilePreviewInput;
