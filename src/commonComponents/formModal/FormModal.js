import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { MenuItem, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { AppContext } from "../../State";
import { EditorState } from "draft-js";
export default function FormModal({ formInputs, ctaFormHandler, ctaUpdateHandler }) {
  const { state, dispatch } = useContext(AppContext);
  const handleCloseUpdate = () => {
    dispatch({
      type: "setModal",
      payload: {
        modalUpdateFlag: false,
        openFormModal: false,
      },
    });
  };
  return (
    <div>
      <Dialog open={state.openFormModal} onClose={handleCloseUpdate}>
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please read carefully and fill all required fields.
          </DialogContentText>
          <Box>
            {formInputs.map((item, index) => {
              const test = state.editData;
              return (
                <>
                  {item.type === "select" ? (
                    <TextField
                      margin="dense"
                      id="file"
                      label={item.label}
                      name={item.name}
                      select
                      fullWidth
                      variant="standard"
                      onChange={(e) => {
                        test[item.name] = e.target.value;
                        dispatch({
                          type: "setEditData",
                          payload: test,
                        });
                      }}
                    >
                      {item?.dropDownContent?.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  ) : item.type === "editor" ? (
                    <Editor
                      editorState={state.editData[item.name]}
                      onEditorStateChange={(getText) => {
                        test[item.name] = getText;
                        dispatch({
                          type: "setEditData",
                          payload: test,
                        });
                      }}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        blockType: {
                          className: "bordered-option-classname",
                        },
                        fontSize: {
                          className: "bordered-option-classname",
                        },
                        fontFamily: {
                          className: "bordered-option-classname",
                        },
                      }}
                    />
                  ) : (
                    <TextField
                      margin="dense"
                      id="file"
                      label={item.label}
                      name={item.name}
                      type={item.type}
                      fullWidth
                      variant="standard"
                      value={
                        item.name === "file" ? "" : state.editData[item.name]
                      }
                      onChange={(e) => {
                          test[item.name] = item.name === "file"
                            ? e.target.files[0].name
                            : e.target.value;
                        dispatch({
                          type: "setEditData",
                          payload: test,
                        });
                      }}
                    />
                  )}
                  <br />
                </>
              );
            })}
            <br />
            <Stack direction="row" spacing={1}>
              {state.modalUpdateFlag ? (
                <Button type="submit" variant="outlined" onClick={ctaUpdateHandler}>
                  Update
                </Button>
              ) : (
                <Button type="submit" variant="outlined" onClick={ctaFormHandler}>
                  submit
                </Button>
              )}

              <Button variant="outlined" onClick={handleCloseUpdate}>
                Close
              </Button>
            </Stack>
          </Box>
          <br />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
