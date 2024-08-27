import React from 'react';
import { DashboardContainer } from './UserDashboard.style';

const UserDashboard=({ user }) =>{
    console.log(user)
  return (
    <DashboardContainer>
      <h2>User Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <div>This is the change i made</div>
      {/* Add more user-specific content here */}
    </DashboardContainer>
  );
}

export default UserDashboard;