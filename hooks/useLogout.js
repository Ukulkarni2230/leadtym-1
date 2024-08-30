"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { clearUserData } from "../Redux/user/userReducer";

const useLogout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return () => {
    Cookies.remove("userDetails");
    Cookies.remove("token");
    Cookies.remove("onboard-step");

    dispatch(clearUserData());

    router.push("/login");
  };
};

export default useLogout;
