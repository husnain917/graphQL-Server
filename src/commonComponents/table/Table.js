//Import from Libraries
import React, { useContext, useState } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
  Hidden,
} from "@mui/material";
//Import from Files
import GlobalSearch from "../globalSearch/GlobalSearch";
import { TableStyle } from "./TableStyle";
import FormModal from "../formModal/FormModal";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import { AppContext } from "../../State";
import CommonConfirmModal from "../commonConfirmModal/CommonConfirmModal";
import { logDOM } from "@testing-library/react";
import CommonModal from '../commonModal/CommonModal'
import { isNullableType } from "graphql";
export default function Table({
  title,
  tableHeadings,
  printedKeys,
  formInputs,
  filterdata,
  data,

  // Handlers
  ctaFormHandler,
  ctaDeleteHandler,
  ctaUpdateHandler,
  handleChange,
  disableAddIcon,
}) {

  const { state, dispatch } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterValue, setFilterValue] = useState("");
  const [searchQuery, setSearchQuery] = useState('')
  const [searchShow, setSearchShow] = useState(false)

  const openAnchor = Boolean(anchorEl);
  const handleAnchorClose = (value) => {
    setAnchorEl(null);
    setFilterValue(typeof value == "object" ? filterValue : value);
  };
  //filter data for filters
  const filterDataArray = data?.filter((item) => {
    if (filterValue === "") {
      return item;
    } else if (filterValue === item.role) {
      return item;
    }
    else if (filterValue === item.status) {
      return item;
    }
    else if (filterValue === item.courseStatus) {
      return item
    }
    else if (filterValue === item.eventStatus) {
      return item
    }
    else if (filterValue === "All") {
      return item;
    }
    else if (filterValue === item.feeStatus) {
      return item
    }
    else if (filterValue === item.attendance) {
      return item
    }
  });

  //open add form model
  const handleClickOpen = () => {
    dispatch({
      type: "setModal",
      payload: {
        openFormModal: true,
      },
    });
  };
  //open edit form modal
  const ctaEditButtonHandler = async (data) => {
    const test = state.editData;
    dispatch({
      type: "setEditId",
      payload: data.id
    })
    dispatch({
      type: "setModal",
      payload: {
        openFormModal: true,
        modalUpdateFlag: true,
      },
    });
    formInputs.map((item) => {
      test[item.name] = data[item.name];
    });
    dispatch({
      type: "setEditData",
      payload: test,
    });
    console.log(state.editId);

  };
  //open dropDown panel
  const handleAnchorClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //close dropDown panel

  const searchingFor = (searchQuery) => {
    return function (data) {
      return (
        (data?.name || data?.courseName || data?.studentName || data?.city || data?.eventName || data?.faqQuestion || data?.id).toLowerCase().includes(
          searchQuery?.toLowerCase(),
        )
      );
    };
  };

  return (
    <>
      {/* Drop Down menu for filter Button */}
      <DropDownMenu
        handleAnchorClose={handleAnchorClose}
        anchorEl={anchorEl}
        openAnchor={openAnchor}
        title={title}
        filterTag={filterdata.filterTag}
      />
      {/* Drop Down menu for filter Button */}

      {/* Form Modal */}
      <FormModal formInputs={formInputs} ctaFormHandler={ctaFormHandler} ctaUpdateHandler={ctaUpdateHandler} handleChange={handleChange} />
      {/* Form Modal */}

      <Toolbar disableGutters>
        <TableStyle.BoxElement searchShow>
          {/* Table Header For Big Screens */}
          <Hidden smDown>
            <TableStyle.SeachContainer>
              <Typography variant="h6" component="div" noW3rap={true}>
                {title}
              </Typography>
              <TableStyle.SearchAndBtnsContainer>
                <GlobalSearch
                  onChangeText={(val) => { setSearchQuery(val) }}
                  placeholder="Search here..."
                  searchCancel={() => { setSearchQuery('') }}
                />

                {title === "FAQS" ? (
                  ""
                ) : (
                  <TableStyle.FilterListIcon onClick={handleAnchorClick} />
                )}

                {
                  state.user?.role === 'OWNER' ?
                    <TableStyle.AddIcon onClick={handleClickOpen} />

                    :
                    state.user?.role === 'ADMIN' ?
                      title === "Courses" || title === "All Students" ?
                        <></>
                        :
                        <TableStyle.AddIcon onClick={handleClickOpen} />
                      :
                      <TableStyle.AddIcon onClick={handleClickOpen} />


                }


              </TableStyle.SearchAndBtnsContainer>
            </TableStyle.SeachContainer>
          </Hidden>

          {/* Table Header For Small Screens */}

          <Hidden smUp>
            <TableStyle.MobileViewTableHeader searchShow={searchShow}>
              <Typography
                variant="h6"
                component="div"
                noWrap={true}
                sx={{ display: searchShow && "none" }}
              >
                {/* All Students */}
                {title}
              </Typography>
              {searchShow && (
                <TableStyle.SearchBox>
                  <TableStyle.FilterListIcon />
                  <GlobalSearch
                    onChangeText={(val) => { setSearchQuery(val) }}
                    placeholder="Search here..."
                    searchCancel={() => { setSearchQuery('') }}
                  />
                  <IconButton
                    size="large"
                    disableFocusRipple
                    disableRipple
                    onClick={(val) => {
                      setSearchShow(!searchShow);
                      setSearchQuery('');
                    }}
                  >
                    <TableStyle.CloseIconBox>
                      <TableStyle.CloseIcon />
                    </TableStyle.CloseIconBox>
                  </IconButton>
                  {
                    !disableAddIcon &&
                    <TableStyle.AddIcon onClick={handleClickOpen} />
                  }
                </TableStyle.SearchBox>
              )}
              {!searchShow && (
                <TableStyle.HeaderIconsContainer>
                  <TableStyle.FilterListIcon onClick={handleAnchorClick} />
                  <IconButton
                    size="large"
                    color="inherit"
                    aria-label="search"
                    disableFocusRipple
                    disableRipple
                    onClick={() => setSearchShow(!searchShow)}
                  >
                    <TableStyle.SearchIcon />
                  </IconButton>
                  {
                    !disableAddIcon &&
                    <TableStyle.AddIcon onClick={handleClickOpen} />
                  }
                </TableStyle.HeaderIconsContainer>
              )}
            </TableStyle.MobileViewTableHeader>
          </Hidden>
        </TableStyle.BoxElement>
      </Toolbar>

      {/* Table  */}

      <TableContainer component={Paper}>
        <TableStyle.CustomTable size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {tableHeadings?.map((item, i) => {
                return <TableCell align="center">{item && item}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {filterDataArray?.filter(searchingFor(searchQuery)).map((row, index) => {
              return (
                <>
                  <TableStyle.CustomTableRow key={index}>
                    {printedKeys?.map((subitem, subIndex) => {
                      const exactKey = row[subitem?.key];
                      return (
                        <TableStyle.CustomTableCell
                          align="center"
                          key={subIndex + 10}
                        >
                          {
                            subitem?.type === "image" ? (
                              <TableStyle.Image src={exactKey} />
                            ) :
                              subitem?.type === "editor" ? (
                                <p
                                  dangerouslySetInnerHTML={{ __html: exactKey }}
                                ></p>
                              ) : subitem?.type === "crud" ? (
                                <>
                                  <TableStyle.IconDiv>
                                    <Tooltip title="Delete">
                                      <CommonConfirmModal ctaDeleteHandler={ctaDeleteHandler} row={row} title={title} />
                                    </Tooltip>
                                    <Tooltip title="Update">
                                      <IconButton
                                        aria-label="update"
                                        size="small"
                                        onClick={() => ctaEditButtonHandler(row)}
                                      >
                                        <TableStyle.EditIcon />
                                      </IconButton>
                                    </Tooltip>
                                  </TableStyle.IconDiv>
                                </>
                              ) : (
                                exactKey

                              )}
                        </TableStyle.CustomTableCell>
                      );
                    })}
                  </TableStyle.CustomTableRow>
                </>
              );
            })}
          </TableBody>
        </TableStyle.CustomTable>
      </TableContainer>
    </>
  );
}
