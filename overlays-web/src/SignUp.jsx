import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Dialog } from "@radix-ui/themes/dist/cjs/index.js";
import { Text } from "@radix-ui/themes/dist/cjs/index.js";
import { TextField } from "@radix-ui/themes/dist/cjs/index.js";
import { Flex } from "@radix-ui/themes/dist/cjs/index.js";
import { Button } from "@radix-ui/themes/dist/cjs/index.js";
import { showPopUp, showSignUp } from "./Redux/MySlices";
import axios from "axios";
const SignUp = () => {
  const data = useSelector((val) => val.mainslice.signUp);
  const dispatch = useDispatch();
  console.log(data);

  const username = useRef();
  const email = useRef();
  const password = useRef();

  const senduser = async () => {
    const usernm = username.current.value;
    const mail = email.current.value;
    const pass = password.current.value;
    console.log(usernm, mail, pass);
    if (usernm === "" || mail === "" || pass === "") {
      alert("fill input area");
    } else {
      const adduser = await axios.post("http://localhost:4000/user/SignUp", {
        usernm,
        mail,
        pass,
      });
      console.log(adduser);
      username.current.value = " ";
      email.current.value = " ";
      password.current.value = " ";
      dispatch(showPopUp("showLogin"));
    }
  };
  return (
    <div>
      <Dialog.Root open={data}>
        <Dialog.Content maxWidth="350px">
          <Dialog.Title
            align={"center"}
            size={"7"}>
            Create your <span className="text-orange-500">Account</span>
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
                placeholder="Enter your username"
              />
            </label>
            <label>
              <Text
                as="div"
                size="2"
                mb="1"
                weight="bold">
                Email
              </Text>
              <TextField.Root
                ref={email}
                placeholder="Enter your email"
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
                placeholder="create password"
                type="password"
              />
            </label>

            <span
              onClick={() => dispatch(showSignUp("hidesignup"))}
              className="text-center text-cyan-950 underline">
              already Have Account
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
                onClick={() => dispatch(showSignUp("close"))}>
                Close
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button onClick={senduser}>SignUP</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default SignUp;
