import { Image, SafeAreaView, Text, View, Button } from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";
import Loading from "../Loading";
import styles from "./styles";
import { AspectRatio, Box, Center, Heading, Stack, HStack } from "native-base";

const TripDetail = ({ navigation, route }) => {
  if (tripStore.loading) return <Loading />;
  const trip = route.params.trip;
  return (
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
            ></Text>
          </Stack>
          <Text fontWeight="400">
            {trip.description} {trip.date}
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
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
  );

  // return (
  //   <SafeAreaView>
  //     <View style={styles.titleView}>
  //       <Text style={styles.name}>
  //         {trip.name} {trip.name}
  //       </Text>
  //       <Image style={styles.image} source={{ uri: baseURL + trip.image }} />
  //     </View>
  //   </SafeAreaView>
  // );
};

export default observer(TripDetail);

{
  /* <Box alignItems="center">
//     <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{ */
}
//     borderColor: "coolGray.600",
//     backgroundColor: "gray.700"
//   }} _web={{
//     shadow: 2,
//     borderWidth: 0
//   }} _light={{
//     backgroundColor: "gray.50"
//   }}>
//       <Box>
//         <AspectRatio w="100%" ratio={16 / 9}>
//           <Image source={{
//           uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
//         }} alt="image" />
//         </AspectRatio>
//         <Center bg="violet.500" _dark={{
//         bg: "violet.400"
//       }} _text={{
//         color: "warmGray.50",
//         fontWeight: "700",
//         fontSize: "xs"
//       }} position="absolute" bottom="0" px="3" py="1.5">
//           PHOTOS
//         </Center>
//       </Box>
//       <Stack p="4" space={3}>
//         <Stack space={2}>
//           <Heading size="md" ml="-1">
//             The Garden City
//           </Heading>
//           <Text fontSize="xs" _light={{
//           color: "violet.500"
//         }} _dark={{
//           color: "violet.400"
//         }} fontWeight="500" ml="-0.5" mt="-1">
//             The Silicon Valley of India.
//           </Text>
//         </Stack>
//         <Text fontWeight="400">
//           Bengaluru (also called Bangalore) is the center of India's high-tech
//           industry. The city is also known for its parks and nightlife.
//         </Text>
//         <HStack alignItems="center" space={4} justifyContent="space-between">
//           <HStack alignItems="center">
//             <Text color="coolGray.600" _dark={{
//             color: "warmGray.200"
//           }} fontWeight="400">
//               6 mins ago
//             </Text>
//           </HStack>
//         </HStack>
//       </Stack>
//     </Box>
//   </Box>;
