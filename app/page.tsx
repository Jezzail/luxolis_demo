/**
 * @File app/page.tsx
 */
"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

// This is a fake sleep function to simulate a loading state
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const Home = (): JSX.Element => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [validatePass, setValidatePass] = useState(true); // I set valid true by default to not show an error message when empty
  const [isLoading, setIsloading] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [isForgotModal, setForgotModal] = useState(false);

  // This function is used to validate the password
  const updatePass = (pass: string) => {
    setPass(pass);
    if (pass.length > 0) {
      // This regex will validate letters, numbers, special character and minimun lenght of 8
      var regex = new RegExp(
        "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$"
      );
      if (regex.test(pass)) {
        setValidatePass(true);
      } else setValidatePass(false);
    } else setValidatePass(true);
  };

  // This function is used to submit the form
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is a fake loading state
    setIsloading(true);
    await sleep(3000);
    setIsloading(false);
    // I think only prompt error with the password in bad practice, so I added the user as well
    if (user !== "test@luxpmsoft.com" || pass !== "test1234!")
      return setIsErrorModal(true);

    router.push("/home");
  };

  // This is a simple validation to disable the button when the fields are empty or the password is not valid
  const canSubmit = !user || !pass || !validatePass;

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-10 bg-cover bg-center bg-blue-pattern">
      <form
        className="flex flex-col items-center w-full max-w-[300px]"
        noValidate
        onSubmit={(e) => submitHandler(e)}
      >
        <Image
          src="/cart.svg"
          alt="cart"
          width={119}
          height={98}
          className="mb-[72px]"
        />
        <Input
          id="user"
          placeholder="USERNAME"
          icon="/user.svg"
          className="mb-5"
          value={user}
          setValue={setUser}
        />
        <Input
          id="pass"
          placeholder="PASSWORD"
          icon="/lock.svg"
          type="password"
          className="mb-[43px]"
          value={pass}
          setValue={updatePass}
          error={!validatePass ? "Wrong combination" : undefined}
        />
        <Button
          id="login"
          type="submit"
          variant="inverted"
          disabled={canSubmit}
          loading={isLoading}
        >
          LOGIN
        </Button>
        <div className="flex w-full justify-end mt-5 text-white font-medium">
          <div
            className="hover:underline cursor-pointer"
            onClick={() => {
              setForgotModal(true);
            }}
          >
            Forgot password?
          </div>
        </div>
      </form>
      {/*build simple modal for error message*/}
      {isErrorModal && (
        <Modal
          message="The credentials provided are incorrect"
          buttonText="Close"
          onClick={() => setIsErrorModal(false)}
        />
      )}
      {isForgotModal && (
        <Modal
          message="This should be a modal to reset the password"
          buttonText="Close"
          onClick={() => setForgotModal(false)}
        />
      )}
    </main>
  );
};

export default Home;
