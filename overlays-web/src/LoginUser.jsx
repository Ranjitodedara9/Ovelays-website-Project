import React, { useRef } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import { Dialog } from "@radix-ui/themes/dist/cjs/index.js";
import { Text } from "@radix-ui/themes/dist/cjs/index.js";
import { TextField } from "@radix-ui/themes/dist/cjs/index.js";
import { Flex } from "@radix-ui/themes/dist/cjs/index.js";
import { Button } from "@radix-ui/themes/dist/cjs/index.js";
import { useDispatch, useSelector } from "react-redux";
import { showPopUp, showSignUp } from "./Redux/MySlices";
import axios from "axios";
const LoginUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((val) => val.mainslice.show);
  const username = useRef();
  const password = useRef();
  const LoginBtn = async () => {
    const usernm = username.current.value;
    const pass = password.current.value;
    const LoginNow = await axios.post("http://localhost:4000/user/Login", {
      usernm,
      pass,
    });
    if (LoginNow.data.mes) {
      alert("login succesfully....");
      username.current.value = null;
      password.current.value = null;
    }
    console.log(LoginNow);
  };
  return (
    <div className="">
      <Dialog.Root open={data}>
        <Dialog.Content maxWidth="350px">
          <Dialog.Title
            align={"center"}
            size={"7"}>
            Login <span className="text-orange-500">Here</span>
          </Dialog.Title>

          <Flex
            direction="column"
            gap="3">
            <label>
              <Text
                as="div"
                size="2"
                mb="1"
                weight="bold">
                UserName
              </Text>
              <TextField.Root
                ref={username}
                placeholder="Enter your full name"
              />
            </label>
            <label>
              <Text
                as="div"
                size="2"
                mb="1"
                weight="bold">
                Password
              </Text>
              <TextField.Root
                ref={password}
                placeholder="Enter your password"
              />
            </label>

            <a
              href="#"
              onClick={() => dispatch(showSignUp(true))}
              className="text-center text-cyan-950 underline">
              Create New Account
            </a>
          </Flex>

          <Flex
            gap="3"
            mt="4"
            justify="end">
            <Dialog.Close>
              <Button
                variant="soft"
                color="gray"
                onClick={() => dispatch(showPopUp(false))}>
                Close
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button onClick={LoginBtn}>Login</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default LoginUser;
