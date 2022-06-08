import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AuthService} from "../services";
import {ConfirmToken} from "../models/common";

const SuccessAuth = () => {
  const {token} = useParams() as ConfirmToken;
  const navigate = useNavigate();
  useEffect(() => {
    AuthService.successSocialMediaAuth(token!)
      .then(() => {
        navigate('/');
      })
  }, [])
  return (
    <div>

    </div>
  );
};

export default SuccessAuth;