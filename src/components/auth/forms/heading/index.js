const AuthFormHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center dark:text-dark_text_1">
      <h2 className="mt-2 text-3xl font-bold">{title}</h2>
      <p className="mt-1 text-sm">{subtitle}</p>
    </div>
  );
};

export default AuthFormHeading;
