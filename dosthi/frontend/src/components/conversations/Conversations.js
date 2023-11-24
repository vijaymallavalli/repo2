// import React, { useEffect, useState } from "react";
// import "./conversation.css";
// import photo from "./unsplash2.jpg"
// export default function Conversations({conversation,currentUser}) {
//   const[user,setUser]= useState(null);

//   useEffect(() =>{
//     const friendId = conversation.member.find((m)  => m!== currentUser.id)
//   },[]);

//   return (
//     <div className="conversation">
//       <img src={photo} alt="" className="conversationImg" />

//       <span className="conversationName">Vijay</span>
//     </div>
//   );
// }



import React, { useEffect, useState,useReducer } from "react";
import "./conversation.css";
import photo from "./unsplash2.jpg";
// import { profileReducer } from "../../functions/reducers";
// import axios from "axios";


export default function Conversations() {
  // { conversation, currentUser }
  const [user, setUser] = useState(null);

  // const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
  //   loading: false,
  //   profile: {},
  //   error: "",
  // });
  // const getProfile = async () => {
  //   try {
  //     dispatch({
  //       type: "PROFILE_REQUEST",
  //     });
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_BACKEND_URL}/getProfile/${userName}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${user.token}`,
  //         },
  //       }
  //     );
  //     if (data.ok === false) {
  //       navigate("/profile");
  //     } else {
  //       dispatch({
  //         type: "PROFILE_SUCCESS",
  //         payload: data,
  //       });
  //     }
  //   } catch (error) {
  //     dispatch({
  //       type: "PROFILE_ERROR",
  //       payload: error.response.data.message,
  //     });
  //   }
  // };
  // useEffect(() => {
  //   getProfile();
  // }, [userName]);

  // useEffect(() => {
  //   // Check if conversation.member is defined before finding friendId
  //   if (conversation.member) {
  //     const friendId = conversation.member.find((m) => m !== currentUser.id);
  //     // Do something with friendId if needed
  //     // For now, let's just log it to the console



  //     console.log("Friend ID:", friendId);
  //   }
  // }, [conversation.member, currentUser.id]);

  return (
    <div className="conversation">
      <img src={photo} alt="" className="conversationImg" />
      <span className="conversationName">Vijay</span>
    </div>
  );


}
