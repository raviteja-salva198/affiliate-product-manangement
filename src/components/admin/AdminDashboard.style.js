import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 20px;
`;

export const UserList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const UserItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Button = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const ApproveButton = styled(Button)`
  background-color: #28a745;
  color: white;
`;

export const RejectButton = styled(Button)`
  background-color: #dc3545;
  color: white;
`;
