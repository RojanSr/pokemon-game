import { Button, Flex, Image, Input } from "@chakra-ui/react";
import PokeBall from "../../../shared/assets/pokeball.svg";
import { Controller, useForm } from "react-hook-form";

export interface PokemonSearchField {
  pokemon_name: string;
}

interface Props {
  setSearchQuery: React.Dispatch<
    React.SetStateAction<PokemonSearchField | undefined>
  >;
}

const defaultValues: PokemonSearchField = {
  pokemon_name: "",
};

const PokeSearch = ({ setSearchQuery }: Props) => {
  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data: PokemonSearchField) => {
    if (data) {
      setSearchQuery(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex bg={"white"} py={4} px={6} borderRadius={"12px"}>
        <Controller
          control={control}
          name="pokemon_name"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Search your Pokemon!"
              variant={"unstyled"}
            />
          )}
        />

        <Button
          type="submit"
          bg={"#ff5350"}
          p={0}
          borderRadius={"6px"}
          boxShadow={" 0 0 0px #ff5350, 0 3px 8px #ff5350, 0 0 8px #ff5350"}
          cursor={"pointer"}
          transition={"0.1s ease-in-out"}
          _hover={{
            boxShadow: " 0 0 2px #ff5350, 0 3px 10px #ff5350, 0 0 10px #ff5350",
          }}
        >
          <Image src={PokeBall} w={"25px"} h={"25px"} />
        </Button>
      </Flex>
    </form>
  );
};

export default PokeSearch;
