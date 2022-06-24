import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Chevron, UserNameContainer, UserProfilePhoto } from "./styled";
import jwt_decode from "jwt-decode";

type props = {
  isOpen: boolean;
};

export const UserProfileNavbar = ({ isOpen }: props) => {
  const token = localStorage.getItem("token") ?? "";

  const {
    data: { firstName },
  }: any = jwt_decode(token);

  return (
    <>
      <UserProfilePhoto>{firstName[0].toUpperCase()}</UserProfilePhoto>
      <UserNameContainer> {firstName} </UserNameContainer>
      <Chevron isOpen={isOpen}>
        <FaChevronDown />
      </Chevron>
    </>
  );
};
