import "./ContactForm.scss"
import { useState, useEffect } from "react"

const ContactForm = () => {

    const [formValues, setFormValues] = useState({name: "", email : "", phoneNumbers: [""]})

    let handleChangeSingleItem = (event) => {
        let newFormValues = formValues
        newFormValues[event.target.name] = event.target.value
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        let newFormValues = formValues
        newFormValues.phoneNumbers = [...newFormValues.phoneNumbers, ""]
        setFormValues(newFormValues)
        console.log(formValues)
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <form  onSubmit={handleSubmit}>
            <div className="form-inline">
              <label>Full name</label>
              <input type="text" name="name" value={{formValues}.name  || ""} onChange={event => handleChangeSingleItem(event)} />
              <label>Email</label>
              <input type="text" name="email" value={formValues.email || ""} onChange={event => handleChangeSingleItem(event)} />
              
              <div>
                {formValues.phoneNumbers.map((phoneNumber, index)=> {
                    return (
                    <p key={index}>hello </p>
                    )
                })}
              </div>

              {/* <div>
              {formValues.phoneNumber?.map((phoneNumber, index) => {
                return(
                <div className="phone_number" key={index}>
                    <label>Phone number</label>
                    <input type="tel" name="phoneNumber" value={phoneNumber || ""} onChange={event => handleChangeSingleItem(event)} />
              </div>)})}
              </div> */}
              {/* {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              } */}
            </div>
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    )

}




// const ContactForm = () => {
//     const [phoneNumberLabels, setPhoneNumberLabels] = useState(["Phone number 01"]) 
//     const [numberOfPhoneNumbers, setNumberOfPhoneNumbers] = useState(1)
//  //   console.log(numberOfPhoneNumbers)

//     const phoneButtonHandler = (event) => {
//         let nextPhoneNumberLabels = phoneNumberLabels
//         let nextIndex = nextPhoneNumberLabels.length + 1 
//         let nextLabel = nextIndex < 10?  "Phone Number 0" + nextIndex : "Phone Number " + nextIndex
//         nextPhoneNumberLabels.push(nextLabel)
// //        console.log(nextLabel)
//         setPhoneNumberLabels(nextPhoneNumberLabels)
//         event.preventDefault()
//     }

//     useEffect( () => {
//     console.log(phoneNumberLabels)
//     },[phoneNumberLabels])


//     return (
//         <form>
//             <div className="name_and_email_container">
//                 <div className="name_field">
//                     <p><label htmlFor="name">Full name</label></p>
//                     <p><input type="text" name="name" id="name" /></p>
//                 </div>

//                 <div className="email_field">
//                     <p><label htmlFor="email">Email address</label></p>
//                     <p><input type="email" name="email" id="email" /></p>
//                 </div>
//             </div>

//             <div className="phone_numbers_container">
//                 <button onClick={phoneButtonHandler}>Add new phone number</button>
//                 <div>
//                     {phoneNumberLabels.map( (label) => {
//                        return(<p key={label}>{label}</p>);
//                     })}
//                 </div>
//             </div>
            

//         </form>
//     )

// }

export default ContactForm