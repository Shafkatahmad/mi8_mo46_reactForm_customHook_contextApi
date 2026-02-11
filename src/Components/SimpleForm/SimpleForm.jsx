const SimpleForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    console.log('form Submit');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name"/>
        <br />
        <input type="email" name="email" placeholder="email"/>
        <br />
        <input type="password" name="password" placeholder="password"/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;