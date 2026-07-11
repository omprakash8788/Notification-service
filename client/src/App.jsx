import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";

// import { getToken } from "firebase/messaging";
// import { messaging } from "./firebase";

function App() {

  const getFCMToken = async () => {
    try {

      const permission =
        await Notification.requestPermission();

      if (permission !== "granted") {
        alert("Permission denied");
        return;
      }

      const token = await getToken(
        messaging,
        {
          vapidKey:
            "BD_2QHru0dYHNenAMV6svyePG4CZ6QzsyqffT2BsN8frvFM4L8dQdVJSM02AFls7glzYkTeNM9U3ePeH9kfGgAY",
        }
      );

      console.log(token);

      alert("Token generated");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>FCM Test</h1>

      <button onClick={getFCMToken}>
        Generate Token
      </button>
    </div>
  );
}

export default App;

// import axios from "axios";


// function App() {

//   const sendEmail = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/email/send",
//         {
//           to: "omprakashkumar552@gmail.com",
//           subject: "Test Email",
//           message: "Hello from React Frontend",
//         }
//       );

//       console.log(response.data);
//       alert("Email sent successfully");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to send email");
//     }
//   };

//   return (
//     <div>
//       <h1>Notification Platform</h1>

//       <button onClick={sendEmail}>
//         Send Email
//       </button>
//     </div>
//   );
// }

// export default App;
