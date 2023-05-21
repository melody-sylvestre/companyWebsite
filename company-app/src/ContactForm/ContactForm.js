import "./ContactForm.scss"
import { useState } from "react"


const ContactForm = () => {

  const [simpleFormFields, setSimpleFormFields] = useState(
    {
      FullName: "",
      EmailAddress: "",
      Message: "",
    })

  const [phoneNumbers, setPhoneNumbers] = useState([""])

  const handleChangeSimpleFormFields = (event) => {
    let newSimpleFormFields = {...simpleFormFields}
    newSimpleFormFields[event.target.name] = event.target.value
    setSimpleFormFields(newSimpleFormFields)
  }

  const handleChangePhoneNumber = (i, e) => {
    let newPhoneNumbers = [...phoneNumbers]
    newPhoneNumbers[i] = e.target.value
    setPhoneNumbers(newPhoneNumbers)
  }

  const addPhoneNumberField = () => {
    setPhoneNumbers([...phoneNumbers, ""])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(phoneNumbers));
    alert(JSON.stringify(simpleFormFields))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="name_and_email_section">
        <div className="form_field_and_label">
          <label htmlFor="name">Full name</label>
          <input type="text" name="FullName" id="name" value={simpleFormFields.FullName||""} onChange={event => handleChangeSimpleFormFields(event)}/>
        </div>
        <div className="form_field_and_label">
          <label htmlFor="email">Email address</label>
          <input type="text" id="email" name="EmailAddress" value={simpleFormFields.EmailAddress||""} onChange={event => handleChangeSimpleFormFields(event)}/>
        </div>
      </div>

      <div className="phone_numbers_section">
        {phoneNumbers.map((element, index) => (
          <div className="form_field_and_label" key={index}>
            <label htmlFor={"phone_number_"+(index+1)}>{index < 9 ? "Phone number 0" + (index + 1) : "Phone number " + (index + 1)} <span> - Optional </span></label>
            <input type="tel" name="phoneNumber" id={"phone_number_"+(index+1)} value={element || ""} onChange={e => handleChangePhoneNumber(index, e)} />
          </div>
        ))}
         <button className="button add" type="button" onClick={() => addPhoneNumberField()}>Add</button>
      </div>

       <div className="message_section form_field_and_label">
        <label htmlFor="Message">Message</label>
        <textarea name="Message" id="Message" value={simpleFormFields.Message || ""} onChange={event => handleChangeSimpleFormFields(event)}/>  
      </div> 

      <button className="button submit" type="submit">Submit</button>

    </form>
  )
}





export default ContactForm