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

  const [bIncludeAddress, setBIncludeAddress] = useState(false)

  const [AddressDetails, setAddressDetails] = useState(
    {
      AddressLine1: "",
      AddressLine2: "",
      CityTown: "",
      StateCounty: "",
      Postcode: "",
      Country: ""
    }
  )

  const handleChangeSimpleFormFields = (event) => {
    let newSimpleFormFields = { ...simpleFormFields }
    newSimpleFormFields[event.target.name] = event.target.value
    setSimpleFormFields(newSimpleFormFields)
  }

  const handleChangePhoneNumber = (index, event) => {
    let newPhoneNumbers = [...phoneNumbers]
    newPhoneNumbers[index] = event.target.value
    setPhoneNumbers(newPhoneNumbers)
  }

  const handleAddressCheckBox = (event) => {
    if (event.target.checked) {
      setBIncludeAddress(true)
    } else {
      setBIncludeAddress(false)
    }
  }

  const handleChangeAddress = (event) => {
    let newAddressDetails = { ...AddressDetails }
    newAddressDetails[event.target.name] = event.target.value
    setAddressDetails(newAddressDetails)
  }


  const addPhoneNumberField = () => {
    setPhoneNumbers([...phoneNumbers, ""])
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(phoneNumbers));
    alert(JSON.stringify(simpleFormFields))
    alert(JSON.stringify(AddressDetails))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="name_and_email_section">
        <div className="form_field_and_label">
          <label htmlFor="name">Full name</label>
          <input type="text" name="FullName" id="name" value={simpleFormFields.FullName || ""} onChange={event => handleChangeSimpleFormFields(event)} />
        </div>
        <div className="form_field_and_label">
          <label htmlFor="email">Email address</label>
          <input type="text" id="email" name="EmailAddress" value={simpleFormFields.EmailAddress || ""} onChange={event => handleChangeSimpleFormFields(event)} />
        </div>
      </div>

      <div className="phone_numbers_section">
        {phoneNumbers.map((element, index) => (
          <div className="form_field_and_label" key={index}>
            <label htmlFor={"phone_number_" + (index + 1)}>{index < 9 ? "Phone number 0" + (index + 1) : "Phone number " + (index + 1)} <span> - Optional </span></label>
            <input type="tel" name="phoneNumber" id={"phone_number_" + (index + 1)} value={element || ""} onChange={event => handleChangePhoneNumber(index, event)} />
          </div>
        ))}
        <button className="button add" type="button" onClick={() => addPhoneNumberField()}>Add</button>
      </div>

      <div className="message_section form_field_and_label">
        <label htmlFor="Message">Message</label>
        <textarea name="Message" id="Message" value={simpleFormFields.Message || ""} onChange={event => handleChangeSimpleFormFields(event)} />
      </div>

      <div className="address_section">
        <input type="checkbox" name="address_checkbox" id="address_checkbox" checked={bIncludeAddress} onChange={event => handleAddressCheckBox(event)} />
        <label htmlFor="address_checkbox">Add address details</label>

        {bIncludeAddress ?
          <div className="address_details">
            <div className="address_lines">
              <div className="form_field_and_label">
                <label htmlFor="address_line1">Address line 1</label>
                <input type="text" name="AddressLine1" id="address_line1" value={AddressDetails.AddressLine1 || ""} onChange={event => handleChangeAddress(event)} />
              </div>
              <div className="form_field_and_label">
                <label htmlFor="address_line2">Address line 2</label>
                <input type="text" name="AddressLine2" id="address_line2" value={AddressDetails.AddressLine2 || ""} onChange={event => handleChangeAddress(event)} />
              </div>
            </div>

            <div className="city_county_postcode_country_fields">
              <div className="form_field_and_label">
                <label htmlFor="city">City/Town</label>
                <input type="text" name="CityTown" id="city" value={AddressDetails.CityTown || ""} onChange={event => handleChangeAddress(event)} />
              </div>
              <div className="form_field_and_label">
                <label htmlFor="state">State/County</label>
                <input type="text" name="StateCounty" id="state" value={AddressDetails.StateCounty || ""} onChange={event => handleChangeAddress(event)} />
              </div>
              <div className="form_field_and_label">
                <label htmlFor="postcode">Postcode</label>
                <input type="text" name="Postcode" id="postcode" value={AddressDetails.Postcode || ""} onChange={event => handleChangeAddress(event)} />
              </div>
              <div className="form_field_and_label">
                <label htmlFor="country">Country</label>
                <input type="text" name="Country" id="country" value={AddressDetails.Country || ""} onChange={event => handleChangeAddress(event)} />
              </div>
            </div>
          </div>
          : ""}
      </div>



      <button className="button submit" type="submit">Submit</button>

    </form>
  )
}





export default ContactForm