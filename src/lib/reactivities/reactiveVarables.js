import { makeVar, gql } from "@apollo/client";

export const openModal = makeVar(false);
export const updateFlag = makeVar(false)
export const authState = makeVar(false)
export const editId = makeVar("")
export const editData = makeVar({});
export const userGroupData = makeVar({});
export const userData = makeVar({});
export const imageUrl = makeVar("");
export const valTel = makeVar("");
