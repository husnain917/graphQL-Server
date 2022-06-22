import styled from "@emotion/styled";

export const TabsStyle = {
    MainDiv: styled('div')((theme) => ({
        width: '60%',
        height: 'auto',
        padding: "0px 5px 0px 5px",
        border: "1px solid black",
        "@media (max-width: 900px)": {
            width: '100%',
        },
    })),
    InputLabel: styled('div')(() => ({
        color: 'gray',
        fontWeight: 500,
        fontSize: 14,
        padding: "10px 10px 10px 10px"
    })),
    MyInput: styled('input')(() => ({
        width: "100%",
        outline: "gray",
        border: "none",
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    })),
    PermissionText: styled('div')(() => ({
        fontSize: 14,
        fontWeight: 500,
        padding: "10px 10px 10px 10px"
    })),
    PermissionsTableHead: styled('div')(() => ({
        
    }))
}