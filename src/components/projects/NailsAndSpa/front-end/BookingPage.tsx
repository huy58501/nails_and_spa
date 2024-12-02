import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import '@/src/styles/projects/NailsAndSpa/font-end/booking.css';

const employees = [
  { label: "Employee 1", value: "employee1" },
  { label: "Employee 2", value: "employee2" },
  { label: "Employee 3", value: "employee3" },
];

const services = [
  { label: "Service 1", value: "service1" },
  { label: "Service 2", value: "service2" },
  { label: "Service 3", value: "service3" },
];

// Generate times from 9:00 AM to 6:00 PM in 30-minute intervals
const generateTimeOptions = () => {
  const times = [];
  let hour = 9;
  let minute = 0;

  while (hour < 18) {
    const formattedTime = `${hour}h${minute === 0 ? "" : "30"}`;
    times.push({ label: formattedTime, value: formattedTime });
    minute += 30;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }
  return times;
};

const timeOptions = generateTimeOptions();

const BookingPage = () => {
  const [date, setDate] = useState<Nullable<Date>>(null);
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "", // Add email field to the form data
    employee: null,
    service: null,
    time: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDropdownChange = (e: any, name: string) => {
    setFormData({ ...formData, [name]: e.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Details: ", { selectedDate: date, ...formData });
  };

  return (
    <div className="container">
      {/* Calendar */}
      <div className="calendar">
        <h3>Select a Date</h3>
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value instanceof Date ? e.value : null)}
          inline
          showWeek
        />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="form-container">
        <h3>Booking Details</h3>

        <div>
          <label>Customer Name</label>
          <InputText
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            placeholder="Enter customer name"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>Phone</label>
          <InputMask
            mask="(999) 999-9999"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange(e as any)}
            placeholder="Enter phone number"
            style={{ width: "100%" }}
          />
        </div>

        {/* New Email field */}
        <div>
          <label>Email</label>
          <InputText
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>Employee</label>
          <Dropdown
            value={formData.employee}
            options={employees}
            onChange={(e) => handleDropdownChange(e, "employee")}
            placeholder="Select an employee"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>Service</label>
          <Dropdown
            value={formData.service}
            options={services}
            onChange={(e) => handleDropdownChange(e, "service")}
            placeholder="Select a service"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>Time</label>
          <Dropdown
            value={formData.time}
            options={timeOptions}
            onChange={(e) => handleDropdownChange(e, "time")}
            placeholder="Select a time"
            style={{ width: "100%" }}
          />
        </div>

        {/* Submit Button */}
        <Button label="Submit" icon="pi pi-check" type="submit" />
      </form>
    </div>
  );
};

export default BookingPage;
