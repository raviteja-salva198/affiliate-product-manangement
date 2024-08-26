import React, { useState, useEffect } from 'react';
import {DashboardContainer,UserList,UserItem,ApproveButton,RejectButton} from './AdminDashboard.style'

const AdminDashboard=() => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Here you would typically fetch users from your backend
    // For this example, we'll use mock data
    setUsers([
      { id: 1, username: 'user1', aadhar: '123456789012', pan: 'ABCDE1234F', status: 'pending' },
      { id: 2, username: 'user2', aadhar: '234567890123', pan: 'FGHIJ5678K', status: 'pending' },
    ]);
  }, []);

  const handleApprove = (userId) => {
    // Here you would typically send an approval request to your backend
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: 'approved' } : user
    ));
  };

  const handleReject = (userId) => {
    // Here you would typically send a rejection request to your backend
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: 'rejected' } : user
    ));
  };

  return (
    <DashboardContainer>
      <h2>Admin Dashboard</h2>
      <UserList>
        {users.map(user => (
          <UserItem key={user.id}>
            <p>Username: {user.username}</p>
            <p>Aadhar: {user.aadhar}</p>
            <p>PAN: {user.pan}</p>
            <p>Status: {user.status}</p>
            {user.status === 'pending' && (
              <>
                <ApproveButton onClick={() => handleApprove(user.id)}>Approve</ApproveButton>
                <RejectButton onClick={() => handleReject(user.id)}>Reject</RejectButton>
              </>
            )}
          </UserItem>
        ))}
      </UserList>
    </DashboardContainer>
  );
}

export default AdminDashboard;