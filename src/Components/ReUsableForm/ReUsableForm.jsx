const ReUsableForm = ({formTitle, handleSubmit, submitBtnText='Submit', children}) => {
  const handleLocalSubmit = e => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
    handleSubmit(data);
  }
  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" placeholder="Name"/>
        <br />
        <input type="email" name="email" placeholder="email"/>
        <br />
        <input type="password" name="password" placeholder="password"/>
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReUsableForm;