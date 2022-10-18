import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json;
    const person = data.results[0];
    const { phone, email } = person;
    //This is how you can destructure and rename properties in an object.
    const { large: image } = person.picture;
    //In this case the password property is nested in the login property. This is a way you can destructure it and use it in the app.
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <h2>random user starter</h2>;
}

export default App;
