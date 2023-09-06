import React, { useContext, useState , useEffect} from "react";
import noteContext from "../context/notes/noteContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const BookDoctorForm = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
    country: "",
    address: "",
    city: "",
    state: "",
    dist: "",
    pincode: "",
    phone: "",
    department: "",
    book_date: "",
    time_slot: "",
    venue: "",
    hospital: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(
      note.fname,
      note.lname,
      note.email,
      note.age,
      note.country,
      note.address,
      note.city,
      note.state,
      note.dist,
      note.pincode,
      note.phone,
      note.department,
      note.book_date,
      note.time_slot,
      note.venue,
      note.hospital
    );
    // alert("Note added");
    swal({
      title: "Success!",
      text: "Appointment booked successfully!",
      icon: "success",
      button: "Ok!",
    });

    setNote({title: "", description: "", tag: ""})
    navigate("/user");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-5 w-1/2">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <form onSubmit={handleClick}>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* ==== First Name ======= */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="fname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      autoComplete="given-name"
                      className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      onChange={onChange}
                    />
                  </div>
                </div>

                {/* ===== Last Name ======== */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="lname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      autoComplete="family-name"
                      className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      onChange={onChange}
                    />
                  </div>
                </div>

                {/* ======= Email Address ====== */}

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      onChange={onChange}
                    />
                  </div>
                </div>

                {/* ======= Age ======= */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Age
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="age"
                      id="age"
                      autoComplete="family-name"
                      className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      maxLength={2}
                      required
                      onChange={onChange}
                    />
                  </div>
                </div>

                {/* ===== Country ====== */}

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      required
                      onChange={onChange}
                    >
                      <option value="">--Select Country--</option>
                      <option value="india">India</option>
                      <option value="canada">Canada</option>
                      <option value="mexico">Mexico</option>
                    </select>
                  </div>
                </div>

                {/* =========== ADDRESS ========= */}

                <div className="col-span-full">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="street-address"
                      className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={onChange}
                    />
                  </div>
                </div>

                {/* ======== CITY ========= */}
                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      onChange={onChange}
                    />
                  </div>
                </div>

                {/*========== STATE ============*/}

                <div className="sm:col-span-3">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State
                  </label>
                  <div className="mt-2">
                    <select
                      id="state"
                      name="state"
                      className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      required
                      onChange={onChange}
                    >
                      <option value="">--Select State--</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                  </div>
                </div>

                {/* ========= District ==========*/}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="dist"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    District
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="dist"
                      id="dist"
                      className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      onChange={onChange}
                    />
                  </div>
                </div>

                {/* =========  Postal Code ========== */}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="pincode"
                      id="pincode"
                      autoComplete="pincode"
                      className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      onChange={onChange}
                    />
                  </div>
                </div>

                {/* ======== Phone ======== */}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      minLength={10}
                      maxLength={10}
                      required
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900 py-3">
                Doctor Section
              </h2>

              {/* =========== Department ============ */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="department"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Department
                </label>
                <div className="mt-2">
                  <select
                    id="department"
                    name="department"
                    className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                    onChange={onChange}
                  >
                    <option value="">--Select Department--</option>
                    <option value="cancer and care">Cancer Care</option>
                    <option value="labor and delivery">Labor & Delivery</option>
                    <option value="heart and vascular">Heart & Vascular</option>
                    <option value="mental health">Mental Health</option>
                    <option value="neurology">Neurology</option>
                    <option value="burn treatment">Burn Treatment</option>
                  </select>
                </div>
              </div>

              {/* ========== Book Date ============== */}

              <div className="sm:col-span-3 py-5 w-1/2">
                <label
                  htmlFor="book_date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Booking Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="book_date"
                    id="book_date"
                    className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    onChange={onChange}
                  />
                </div>
              </div>

              {/* =========== Time Slot ============== */}

              <div className="sm:col-span-3 ">
                <label
                  htmlFor="time_slot"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Time Slot
                </label>
                <div className="mt-2">
                  <select
                    id="time_slot"
                    name="time_slot"
                    className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                    onChange={onChange}
                  >
                    <option value="">--Select Time Slot--</option>
                    <option value="10AM - 11AM">10AM - 11AM</option>
                    <option value="2PM - 3PM">2PM - 3PM</option>
                    <option value="7PM - 8PM">7PM - 8PM</option>
                  </select>
                </div>
              </div>

              {/* ========== Venue ================ */}

              <div className="sm:col-span-3 py-5 ">
                <label
                  htmlFor="venue"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Venue Location
                </label>
                <div className="mt-2">
                  <select
                    id="venue"
                    name="venue"
                    className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                    onChange={onChange}
                  >
                    <option value="">-- Select Venue --</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="pune">Pune</option>
                    <option value="hydrabad">Hydrabad</option>
                  </select>
                </div>
              </div>

              {/* ============= Hospital ============ */}

              <div className="sm:col-span-3 py-5 ">
                <label
                  htmlFor="hospital"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Venue Location
                </label>
                <div className="mt-2">
                  <select
                    id="hospital"
                    name="hospital"
                    className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                    onChange={onChange}
                  >
                    <option value="">-- Select Hospitals --</option>
                    <option value="Medica Superspecialty Hospital">
                      Medica Superspecialty Hospital
                    </option>
                    <option value="AMRI Hospitals - Saltlake">AMRI Hospitals - Saltlake</option>
                    <option value="Sterling Hospital">Sterling Hospital</option>
                    <option value="ariyan hospital">Ariyan Hospital</option>
                    <option value="AMRI Hospitals - Dhakuria">AMRI Hospitals - Dhakuria</option>
                    <option value="AMRI Hospitals - Mukundapur">AMRI Hospitals - Mukundapur</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="btn">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDoctorForm;
