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
    //Step 1: Destructure data
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

    //Step 2: Create new object with the destructured data. if the property and the value are the same you can write only the property, there is no need to write 'image: image' because of the ES6 feature
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
    setPerson(newPerson);
    setLoading(false);
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <h2>random user starter</h2>;
}

export default App;
