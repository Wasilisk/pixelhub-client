import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AuthService} from "../services";
import {ConfirmToken} from "../models/common";
import {useAppDispatch} from "../store";
import {login} from "../store/auth/authSlice";
import {setTokens} from "../utils";

const SuccessAuth = () => {
  const {token} = useParams() as ConfirmToken;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    AuthService.successSocialMediaAuth(token!)
      .then(({data}) => {
        dispatch(login(data));
        setTokens(data);
        navigate('/');
      })
  }, [])
  return (
    <div>

    </div>
  );
};

export default SuccessAuth;