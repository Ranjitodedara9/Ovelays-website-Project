import React, { useRef, useState } from "react";
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
  const [massage, setmassage] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((val) => val.mainslice.show);
  const username = useRef();
  const password = useRef();
  const LoginBtn = async (e) => {
    try {
      e.preventDefault();
      const usernm = username.current.value;
      const pass = password.current.value;
      const LoginNow = await fetch("http://localhost:4000/user/Login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernm,
          password: pass,
        }),
      });
      const getjes = await LoginNow.json();
      console.log(getjes);
      if (getjes.mes === "login successfuly") {
        username.current.value = null;
        password.current.value = null;
        setmassage(null);
      } else {
        setmassage(getjes.mes);
      }
    } catch (error) {
      console.log("aamaj vandho che");
    }
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
            {massage === "User not found" && (
              <p className="text-red-600">* {massage}</p>
            )}
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
            {massage === "incorected password" && (
              <p className="text-red-600">* {massage}</p>
            )}
            <span
              onClick={() => dispatch(showSignUp(true))}
              className="text-center text-cyan-950 underline">
              Create New Account
            </span>
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
