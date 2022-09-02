import React from "react";
import UseAssignment from "../../modules/studentPortal/assignment/UseAssignment";
import { AppContext } from "../../State";
import {
  openModal,
  updateFlag,
} from "../../commonComponents/newTable/NewTable";
export default function UseCommonCard() {
  const { state, dispatch } = React.useContext(AppContext);
  const [{ formInputs }] = UseAssignment();

  console.log("formInputs", formInputs);
  const handleClickOpen = () => {
    // dispatch({
    //   type: "setModal",
    //   payload: {
    //     openFormModal: true,
    //   },
    // });
    openModal(true)
  };
  const ctaEditButtonHandler = (data) => {
    console.log("data in editButtonHandler in common card", data);
    const test = state.editData;
    console.log("test data", test);
    dispatch({
      type: "setEditId",
      payload: data.id,
    });
    // dispatch({
    //   type: "setModal",
    //   payload: {
    //     openFormModal: true,
    //     modalUpdateFlag: true,
    //   },
    // });
    openModal(true);
    updateFlag(true);
    formInputs.map((item) => {
      test[item.name] = data[item.name];
    });
    dispatch({
      type: "setEditData",
      payload: test,
    });
  };
  return {
    handleClickOpen,
    ctaEditButtonHandler,
  };
}
