// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// // ProtectedRoute giúp bảo vệ các route cần đăng nhập
// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const token = localStorage.getItem('authToken');

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         token ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default ProtectedRoute;
