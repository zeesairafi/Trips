import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, FormControl, Input, Modal, VStack } from "native-base";

const AddTrip = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
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
              <FormControl.Label>Trip Picture</FormControl.Label>
              <FormControl.Label>Trip description</FormControl.Label>
              <FormControl.Label>Trip Price</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setModalVisible(false);
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
