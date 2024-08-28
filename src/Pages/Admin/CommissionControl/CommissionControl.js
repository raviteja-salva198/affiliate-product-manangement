import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import CommissionForm from "../../../components/admin/CommissionControl/CommissionForm/CommissionForm";
import CommissionRatesList from "../../../components/admin/CommissionControl/CommissionRates/CommissionRatesList";
import {
  fetchCommissionRates,
  fetchProducts,
  fetchUsers,
  updateCommissionRate,
} from "../../../components/services/api.js";

const CommissionControlContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    padding: 3rem;
  }
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const CommissionControl = () => {
  const [commissionRates, setCommissionRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("occupation");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchCommissionRates().then((data) => {
      setCommissionRates(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    // Fetch different data based on selected option
    const fetchData = async () => {
      setIsLoading(true);
      let data = [];
      if (selectedOption === "occupation") {
        data = ["Affiliate", "Retailer", "Wholesaler", "Distributor"]; // Sample occupation options
      } else if (selectedOption === "product") {
        const products = await fetchProducts();
        data = products.map((product) => product.name);
      } else if (selectedOption === "user") {
        const users = await fetchUsers();
        data = users.map((user) => user.name);
      }
      setOptions(data);
      setIsLoading(false);
    };

    fetchData();
  }, [selectedOption]);

  const handleUpdateCommissionRate = async (key, rate) => {
    const updated = await updateCommissionRate(key, rate);
    setCommissionRates((prevRates) => ({
      ...prevRates,
      [key]: updated[key],
    }));
  };

  return (
    <CommissionControlContainer>
      <Title>Manage Commission Rates</Title>
      <CommissionForm
        onSubmit={handleUpdateCommissionRate}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={options}
      />
      {isLoading ? (
        <LoaderContainer>
          <ThreeDots color="#007bff" height={80} width={80} />
        </LoaderContainer>
      ) : (
        <CommissionRatesList rates={commissionRates} options={options} />
      )}
    </CommissionControlContainer>
  );
};

export default CommissionControl;
