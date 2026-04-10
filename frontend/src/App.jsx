import "./App.css";
function App() {

  function submitForm(){

    const data = {
      name: document.getElementById("name").value,
      class: document.getElementById("class").value,
      roll: document.getElementById("roll").value,
      phone: document.getElementById("phone").value
    };

    fetch("https://mern-form-scyo.onrender.com/form",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.text())
    .then(()=>{
      alert("Form Submitted");
    });

  }

  return (
    <div style={{padding:40}}>

      <h2>Student Form</h2>

      <input id="name" placeholder="Name" />
      <br/><br/>

      <input id="class" placeholder="Class" />
      <br/><br/>

      <input id="roll" placeholder="Roll No" />
      <br/><br/>

      <input id="phone" placeholder="Phone" />
      <br/><br/>

      <button onClick={submitForm}>
        Submit
      </button>

    </div>
  );
}

export default App;





// New Optimize code for fouth project
// import "./App.css";
// import React, { useState, useCallback } from "react";

// function App() {

//   //  State (React way)
//   const [formData, setFormData] = useState({
//     name: "",
//     class: "",
//     roll: "",
//     phone: ""
//   });

//   //  Handle input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   //  useCallback (Optimization)
//   const submitForm = useCallback(() => {

//     fetch("http://localhost:5000/form",{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(res=>res.text())
//     .then(()=>{
//       alert("Form Submitted");
//     });

//   }, [formData]);

//   return (
//     <div style={{padding:40}}>

//       <h2>Student Form</h2>

//       <input id="name" placeholder="Name" onChange={handleChange} />
//       <br/><br/>

//       <input id="class" placeholder="Class" onChange={handleChange} />
//       <br/><br/>

//       <input id="roll" placeholder="Roll No" onChange={handleChange} />
//       <br/><br/>

//       <input id="phone" placeholder="Phone" onChange={handleChange} />
//       <br/><br/>

//       <button onClick={submitForm}>
//         Submit
//       </button>

//     </div>
//   );
// }

// export default App;