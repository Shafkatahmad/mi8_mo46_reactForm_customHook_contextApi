import useInputState from "../hooks/useInputState";

const HookForm = () => {
  // const [name, handleNameChange] = useInputState('Rojoni')
  const emailState = useInputState('upol@gmail.com')

  const handleSubmit = e => {
    console.log('form data', emailState.value);
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Name"/> */}
        <br />
        <input {...emailState} type="email" name="email" placeholder="email"/>
        <br />
        <input type="password" name="password" placeholder="password"/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;