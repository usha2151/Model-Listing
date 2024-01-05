import axios from "axios";

// Action types for model sign-up
export const MODEL_SIGN_UP_SUCCESS = "MODEL_SIGN_UP_SUCCESS";
export const FETCH_MODELS_REQUEST = "FETCH_MODELS_REQUEST";
export const FETCH_MODELS_SUCCESS = "FETCH_MODELS_SUCCESS";
export const FETCH_MODELS_PROFILE_REQUEST = "FETCH_MODELS_PROFILE_REQUEST";
export const FETCH_MODELS_PROFILE_SUCCESS = "FETCH_MODELS_PROFILE_SUCCESS";
export const FETCH_MODELS_PROFILE_FAILURE = "FETCH_MODELS_PROFILE_FAILURE";
export const FETCH_MODELS_FAILURE = "FETCH_MODELS_FAILURE";
export const LOGIN_MODEL_SUCCESS = "LOGIN_MODEL_SUCCESS";
export const TOKEN_VERIFIED_SUCCESS = "TOKEN_VERIFIED_SUCCESS";
export const TOKEN_VERIFIED_FAILURE = "TOKEN_VERIFIED_FAILURE";
export const LOGIN_MODEL_ERROR = "LOGIN_MODEL_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const MODEL_BY_ID="MODEL_BY_ID";
export const SUBMIT_RATING_SUCCESS = "SUBMIT_RATING_SUCCESS";
export const SUBMIT_RATING_FAILURE = "SUBMIT_RATING_FAILURE";

// ============================================= this for model all action============================= //
export function RegisterModel(data) {

  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('mobile', data.mobile);
  formData.append('specialization', data.specialization);
  formData.append('experience', data.experience);
  formData.append('password', data.password);

  // Append multiple files
  if (data.file && data.file.length > 0) {
    // Check if the number of files is less than or equal to 8
    if (data.file.length <= 8) {
      for (let i = 0; i < data.file.length; i++) {
        formData.append('file', data.file[i]);
      }
    } else {
      alert("Error: Only 8 or fewer images are allowed.");
      return; // Stop further execution
    }
  }
  return (dispatch) => { 
  
    // Send a POST request to your server
    axios.post("http://localhost:8080/models/addModels", formData)
      .then((response) => {
        if (response.status === 201) {
          // Handle a successful response (status code 201)
          alert("Data inserted successfully!");

          dispatch({
            type: SIGN_UP_SUCCESS,
            user: data,
          });
        } else {
          // Handle other status codes as needed
          alert("Server error: " + response.status);
        }
      })
      .catch((error) => {
        // Handle the case where the request fails
        if (error.response && error.response.status === 422) {
          // Handle the case where the number of images is more than 8
          alert("Error: Only 6 images are allowed.");
        } else {
          alert("Error: " + error.message);
        }
      });
  };
}


export const fetchModels = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_MODELS_REQUEST });

    axios.get("http://localhost:8080/models/getModels") // Replace with your actual API endpoint
      .then((response) => {
        
        dispatch({
          type: FETCH_MODELS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching models data:", error); // Log error to the console
        dispatch({
          type: FETCH_MODELS_FAILURE,
          error: error.message,
        });
      });
  };
};



// Verifytoken to log in a user
export const verifyToken = (token) => async (dispatch) => {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/token-data", {
        method: "GET",
        headers: {
          'authorization': `Bearer ${token}`, // Include the token in the request headers
        },
      });

      if (response.ok) {
        const data = await response.json();
      

        dispatch({
          type: TOKEN_VERIFIED_SUCCESS,
          user: data, // Use 'data' from the response
        });

        resolve(data);
      } else {
        // Handle error when the request is not successful
        resolve({ error: "Failed to update user data" });
      }
    } catch (error) {
      console.error("Error while verifying token:", error);
      resolve({ error: "Failed to verify token" });
    }
  });
};

// fetch individual model profile
export const filterModelsById = (data) => {
  return (dispatch) => {
    dispatch({ type: MODEL_BY_ID,
      payload: data[0], })
  };
};


// fetch individual model profile
export const fetchModelsById = (id) => {
  return (dispatch) => {
    dispatch({ type: FETCH_MODELS_PROFILE_REQUEST });

    axios.get(`http://localhost:8080/models/getModels/${id}`) // Replace with your actual API endpoint
      .then((response) => {
        
        dispatch({
          type: FETCH_MODELS_PROFILE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching models data:", error); // Log error to the console
        dispatch({
          type: FETCH_MODELS_PROFILE_FAILURE,
          error: error.message,
        });
      });
  };
};


// ============================================= this for user all action============================= //
export function RegisterUser(data) {

 return (dispatch) => {
 
   // Send a POST request to your server
   axios.post("http://localhost:8080/users/addUsers", data)
     .then((response) => {
       if (response.status === 201) {
         // Handle a successful response (status code 201)
         alert("Data inserted successfully!");

         dispatch({
           type: SIGN_UP_SUCCESS,
           user: data,
         });
       } else {
         // Handle other status codes as needed
         alert("Server error: " + response.status);
       }
     })
     .catch((error) => {
       // Handle the case where the request fails
       alert("Error: " + error.message);
     });
 };
}

//==================================== Action to login as model and user============================== //
export const login = (userData) => async (dispatch) => {
  try {
  
    const response = await axios.post('http://localhost:8080/login', userData);
 

    if (response) {
  if (response.status === 200 && response.data.token&&response.data.isModel) { 
   
  } else {
    console.log('Login failed:', response.status, response.data.error);
  }
} else {
  console.log('Login request failed.');
}


    dispatch({ type: 'LOGIN_SUCCESS', user: response.data });
  } catch (error) {
    console.log('Login error:', error);
    dispatch({ type: 'LOGIN_MODEL_ERROR', payload: error });
  }
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------}
export const submitRating = (user, paramsId,ratingForm) => {
  return (dispatch) => {console.log('hi');
    // Make an API call to submit the rating
    axios
      .post(`http://localhost:8080/models/submitRating/${paramsId}/${user}`, ratingForm)

      .then((response) => {
        if (response.status === 201) {
          // Handle a successful response (status code 201)
          alert("Rating submitted successfully!");

          dispatch({
            type: SUBMIT_RATING_SUCCESS,
            data: response.data, // You can include additional data if needed
          });
        } else {
          // Handle other status codes as needed
          alert("Server error: " + response.status);
          dispatch({
            type: SUBMIT_RATING_FAILURE,
            error: "Server error",
          });
        }
      })
      .catch((error) => {
        // Handle the case where the request fails
        alert("Error: " + error.message);
        dispatch({
          type: SUBMIT_RATING_FAILURE,
          error: error.message,
        });
      });
  };
};
