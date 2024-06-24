import { FormData } from "../../types"

interface Props{
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    nextStep: () => void;
}

const PersonalInfo: React.FC<Props> = ({formData, setFormData, nextStep}) => {
  return (
    <div className="form-container">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number</p>
        <form action="">
            <label>Name</label>
            <input 
            type="text" 
            placeholder="Name"
            value={formData.name}
            onChange={e => setFormData({...formData,name: e.target.value})}/>
            <label htmlFor="">Email Address</label>
            <input 
            type="email"
            placeholder="Email Address" 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})} />
            <label htmlFor="">Phone Number</label>
             <input
              type="tel" 
              placeholder="Phone Number"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}/>
              <button onClick={nextStep}>Next Step</button>       
        </form>
    </div>
  )
}

export default PersonalInfo