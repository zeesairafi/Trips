import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, FormControl, Input, Modal, VStack } from "native-base";
import tripStore from "../../stores/tripStore";

const AddTrip = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [createTrip, setCreateTrip] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
  });

  const handleSubmit = () => {
    tripStore.createTrip(createTrip);
  };

  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="flex-end"
        bottom="4"
        size="lg"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Create a Trip</Modal.Header>
          <Modal.Body>
            Enter the Trip Information
            <FormControl mt="3">
              <FormControl.Label>Trip Title:</FormControl.Label>
              <Input
                onChangeText={(value) =>
                  setCreateTrip({ ...createTrip, title: value })
                }
              />
              <FormControl.Label>Trip Picture</FormControl.Label>
              <Input
                placeholder="Add an image URL"
                onChangeText={(image) =>
                  setCreateTrip({ ...createTrip, image: image })
                }
              />
              <FormControl.Label>Trip description</FormControl.Label>
              <Input
                onChangeText={(value) =>
                  setCreateTrip({ ...createTrip, description: value })
                }
              />
              <FormControl.Label>Trip Price</FormControl.Label>
              <Input
                onChangeText={(value) =>
                  setCreateTrip({ ...createTrip, price: value })
                }
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setModalVisible(false), handleSubmit();
              }}
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack space={8} alignItems="center">
        <Button
          w="104"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Add a Trip
        </Button>
      </VStack>
    </>
  );
};

export default AddTrip;

const styles = StyleSheet.create({});
