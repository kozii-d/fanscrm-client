import { memo, useCallback, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "shared/ui/Button/Button";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";

import { login, registration } from "entities/User";

import { RoutePath } from "app/providers/RouterProvider";

import cls from "./LoginPageCard.module.scss";


export const LoginPageCard = memo(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    dispatch(login({ email, password })).unwrap().then((res) => {
      navigate(RoutePath.profile + res.id);
    });
  }, [dispatch, email, navigate, password]);

  const handleRegistration = useCallback(() => {
    dispatch(registration({ email, password })).unwrap().then((res) => {
      navigate(RoutePath.profile + res.id);
    });
  }, [dispatch, email, navigate, password]);


  return (
    <Card>
      <Input label="Email" type="email" value={email} onChange={setEmail} />
      <Input label="Password" type="password" value={password} onChange={setPassword} />
      <div className={cls.btnGroup}>
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleRegistration} theme="outline">Registration</Button>
      </div>
    </Card>
  );
});