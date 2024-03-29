import { useState } from "react";
import { Heading } from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { Button } from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            label={"Email"}
            placeholder={"s.sachin@gmail.com"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            label={"Password"}
            placeholder={"********"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="pt-4">
            <Button
              label={"Sign In"}
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
            />
          </div>
          <BottomWarning
            label={"Not have an account?"}
            buttonText={"Sign Up"}
            to={"/"}
          />
        </div>
      </div>
    </div>
  );
};
