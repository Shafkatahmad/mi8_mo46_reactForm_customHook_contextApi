import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import ReUsableForm from './Components/ReUsableForm/ReUsableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateFulForm from './Components/StateFulForm/StateFulForm'

function App() {
  // const handleSignUpSubmit = data => {
  //   console.log('sign up data', data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('update profile', data);
  // }

  return (
    <>
      <h1>Form Master</h1>

      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReUsableForm
          formTitle={'Sign Up'}
          handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReUsableForm>
      <ReUsableForm
          formTitle={'Profile Update'}
          handleSubmit={handleUpdateProfile}
          submitBtnText={'Update'}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always Keep Your Profile Updated</p>
        </div>
      </ReUsableForm> */}
    </>
  )
}

export default App
