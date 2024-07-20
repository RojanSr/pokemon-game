import { createStandaloneToast } from "@chakra-ui/react";
import { AxiosError } from "axios";

export interface ResponseData {
  errors?: { [key: string]: string[] };
  message: string;
}

const { toast } = createStandaloneToast();

export const reponseErrorHandler = (res: AxiosError<ResponseData>) => {
  if (typeof res.response?.data === "string") {
    toast({
      title: res.response.data,
      description: res.message || "",
      position: "top",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }
};
