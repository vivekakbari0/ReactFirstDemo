import React, { useState, useRef } from "react";
import Table from "./Table";

function Form() {

  const [formData, setFormData] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Birthdate, setBirthDate] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [permenentAddress, setPermenentAddress] = useState("");
  const [birthPlace, setbirthPlace] = useState("");
  const [MobileNum, setMobileNum] = useState("");
  const [Image, setImage] = useState(null);
 
  const fileRef = useRef(null);

  const [formIsValid, setfromIsValid] = useState(false);

  const [editIndex, setEditIndex] = useState(null);

  // First name Handler & Validation

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  // Last Name Handler & Validation

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  // BirhtDate Handler && Validation

  const BirthDateChangeHandler = (event) => {
    setBirthDate(event.target.value);
  };

  // Birth Place Handler

  const BirthPlaceChangeHandler = (event) => {
    setbirthPlace(event.target.value);
  };

   // Address Line 1 and Address Line 2

   const currentAddressChangeHandler = (event) => {
    setCurrentAddress(event.target.value);
  };

  const permenentAddressChangeHandler = (event) => {
    setPermenentAddress(event.target.value);
  };

  // Mobile Number Handler & Validation

  const MobileNumChangeHandler = (event) => {
    setMobileNum(event.target.value);
  };

   // Image Handler

   const imageChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  // Submit Handler

  const submitHandler = (event) => {
    event.preventDefault();
    
    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      currentAddress.trim().length === 0 ||
      permenentAddress.trim().length === 0 ||
      birthPlace.trim().length === 0 ||
      MobileNum.trim().length < 10 ||
      new Date(Birthdate) < new Date()
    ) {
      setfromIsValid(true);
    }

    // Submit Validation

    if (
      firstName.trim().length > 2 &&
      lastName.trim().length > 2 &&
      currentAddress.trim().length > 5 &&
      permenentAddress.trim().length > 5 &&
      birthPlace.trim().length > 5 &&
      MobileNum.trim().length === 10 &&
      new Date(Birthdate) < new Date()
    ) {
      setfromIsValid(false);
      if (editIndex !== null) {
        const updatedFormData = [...formData];
        updatedFormData[editIndex] = {
          Image,
          firstName,
          lastName,
          currentAddress,
          permenentAddress,
          birthPlace,
          Birthdate,
          MobileNum,
        };
        setFormData(updatedFormData);
        setEditIndex(null);
      } else {
        setFormData([
          ...formData,
          {
            Image,
            firstName,
            lastName,
            currentAddress,
            permenentAddress,
            birthPlace,
            Birthdate,
            MobileNum,
          },
        ]);
      }

      // reset the Value
      setImage(fileRef.current.value = "");
      setFirstName("");
      setLastName("");
      setCurrentAddress("");
      setPermenentAddress("");
      setBirthDate("");
      setbirthPlace("");
      setMobileNum("");
    }
  };

  // Delete Handler

  const deleteHandler = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  // Update Handler

  const updateHandler = (index) => {
    setImage(formData[index].Image);
    setFirstName(formData[index].firstName);
    setLastName(formData[index].lastName);
    setCurrentAddress(formData[index].currentAddress);
    setPermenentAddress(formData[index].permenentAddress);
    setBirthDate(formData[index].Birthdate);
    setbirthPlace(formData[index].birthPlace);
    setMobileNum(formData[index].MobileNum);
    setEditIndex(index);
  };

  return (
    <>
    <div className="flex flex-col justify-center mt-20 items-center border-solid">
      <form
          className="mb-4 p-7 bg-gradient-to-b from-red-400 via-gray-300 to-blue-500 border-2 border-black rounded-md shadow-md" onSubmit={submitHandler}>
          <div className="font-bold m-4">
            <label className=" mr-2">
              First Name <span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="block border-2 border-black rounded-md p-1.5 mt-1 w-full capitalize"
              value={firstName}
              placeholder="Enter your First Name..."
              onChange={firstNameChangeHandler}
            />
              {formIsValid && firstName.trim().length <= 0 ? (
                <p className="text-red-600  ">
                  First Name is Required
                </p>
              ) : formIsValid && firstName.trim().length <= 2 ? (
                <p className="text-red-600  ">
                  First Name is too short! Please enter at least 2 characters
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="font-bold m-4">
            <label className=" mr-2">
              Last Name <span class="text-red-500">*</span>  
              </label>
              <input
                type="text"
                className="block border-2 border-black rounded-md p-1.5 mt-1 w-full capitalize"
                value={lastName}
                placeholder="Enter your Last Name..."
                onChange={lastNameChangeHandler}
              />
            {formIsValid && lastName.trim().length <= 0 ? (
              <p className="text-red-600  ">Last Name is Required</p>
            ) : formIsValid && lastName.trim().length <= 2 ? (
              <p className="text-red-600  ">
                Last Name is too short! Please enter at least 2 characters
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="font-bold m-4">
            <label className=" mr-2">
              Birth Date <span class="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="block border-2 border-black rounded-md p-1.5 mt-1 w-full"
              value={Birthdate}
              onChange={BirthDateChangeHandler}
            />
            {formIsValid && (!Birthdate || new Date(Birthdate) > new Date()) ? (
              <p className="text-red-600  ">
                {Birthdate
                  ? "Birth date cannot be in the future"
                  : "Birth date is required"}
              </p>
            ) : (
              ""
            )}
            </div>
          <div className="font-bold m-4">
            <label className=" mr-2">
              Current Address <span class="text-red-500">*</span>
            </label>
            <textarea
              type="text"
              className="block border-2 border-black rounded-md p-1.5 mt-1 w-full capitalize"
              value={currentAddress}
              placeholder="Enter your Current Address..."
              onChange={currentAddressChangeHandler}
              rows={1}
              cols={20}
            ></textarea>
          {formIsValid && currentAddress.trim().length <= 0 ? (
            <p className="text-red-600  ">Current Address is Required</p>
          ) : formIsValid && currentAddress.trim().length <= 5 ? (
            <p className="text-red-600  ">
              Current Address is too short! Please enter at least 5 characters
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="font-bold m-4">
            <label className=" mr-2">
              Permenent Address <span class="text-red-500">*</span>
            </label>
            <textarea
              type="text"
              className="block border-2 border-black rounded-md p-1.5 mt-1 w-full capitalize"
              value={permenentAddress}
              placeholder="Enter your Permenent Address.."
              onChange={permenentAddressChangeHandler}
              rows={1}
              cols={20}
            ></textarea>
          {formIsValid && permenentAddress.trim().length <= 0 ? (
            <p className="text-red-600  ">Permenent Address is Required</p>
          ) : formIsValid && permenentAddress.trim().length <= 5 ? (
            <p className="text-red-600  ">
              Permenent Address is too short! Please enter at least 5 characters
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="font-bold m-4">
            <label className=" mr-2">
              Place of Birth <span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="block border-2 border-black rounded-md p-1.5 mt-1 w-full capitalize"
              value={birthPlace}
              placeholder="Enter your Birthplace..."
              onChange={BirthPlaceChangeHandler}
            />
          {formIsValid && birthPlace.trim().length <= 0 ? (
            <p className="text-red-600  ">Birth Place is Required</p>
          ) : formIsValid && birthPlace.trim().length <= 2 ? (
            <p className="text-red-600  ">
              Birth Place is too short! Please enter at least 2 characters
            </p>
          ) : (
            ""
          )}
          </div>
          <div className="font-bold m-4">
            <label className=" mr-2">
              Phone Number <span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="block border-2 border-black rounded-md p-1.5 mt-1 w-full"
              value={MobileNum}
              placeholder="Enter like 123123123..."
              onChange={MobileNumChangeHandler}
            />
          {formIsValid && MobileNum.trim().length <= 0 ? (
            <p className="text-red-600  ">Mobile Number is Required</p>
          ) : formIsValid && MobileNum.trim().length < 10 ? (
            <p className="text-red-600  ">
              Mobile Number is less Than 10
            </p>
          ) : (
            ""
          )}
          </div>
          <div className="font-bold m-4">
          <label className="mr-2" htmlFor="Profile_pic">Profile Picture : </label>
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            ref={fileRef}
            onChange={imageChangeHandler}
          />
        </div>
          <p className=" font-bold m-4 text-red-600">
            * All the above fields are mandatory
          </p>
          <div className="flex justify-center">
          <button
            className="tracking-wide mb-6 bg-gradient-to-r from-gray-600 to-gray-400 border-2 border-black text-black font-bold text-base rounded-lg focus:ring-rose-950 focus:border-rose-950 block w-40 p-2.5"
            type="submit"
          >
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
      <Table
        formData={formData}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
      />
    </>
  );
}
export default Form;