import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { AspectRatio, Box, Center, Heading, HStack, Stack } from "native-base";

const TripItem = ({ navigation, trip }) => {
  {
    /* trip: trip => data from props */
  }

  return (
    <Pressable
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <Box alignItems="center">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: trip.image,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {trip.title}
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {trip.description}
              </Text>
            </Stack>
            <Text fontWeight="400">{trip.price} </Text>
            <Text fontWeight="400"> {trip.date}</Text>

            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                ></Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Pressable>
  );
};

export default TripItem;

const styles = StyleSheet.create({
  tripImage: {
    height: 100,
    width: 100,
  },
});
