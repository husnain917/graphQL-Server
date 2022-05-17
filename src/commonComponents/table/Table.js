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
  ctaUpdateHandler
}) {

  const { state, dispatch } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterValue, setFilterValue] = useState("");
  const [searchQuery, setSearchQuery] = useState('')
  const [searchShow, setSearchShow] = useState(false)

  const openAnchor = Boolean(anchorEl);
  //filter data for filters
  const filterDataArray = data?.filter((item) => {
    if (filterValue === "") {
      return item;
    } else if (filterValue === item[filterdata.key]) {
      return item;
    } else if (filterValue === "All") {
      return item;
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
  };
  //open dropDown panel
  const handleAnchorClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //close dropDown panel
  const handleAnchorClose = (value) => {
    setAnchorEl(null);
    setFilterValue(typeof value == "object" ? filterValue : value);
  };

  const searchingFor = (searchQuery) => {
    return function (data) {
      return (
        (data?.id || data?.name || data?.email).toLowerCase().includes(
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
      <FormModal formInputs={formInputs} ctaFormHandler={ctaFormHandler} ctaUpdateHandler={ctaUpdateHandler} />
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

                <TableStyle.AddIcon onClick={handleClickOpen} />
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
                  <TableStyle.AddIcon onClick={handleClickOpen} />
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
                  <TableStyle.AddIcon onClick={handleClickOpen} />
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
                          {subitem?.type === "image" ? (
                            <TableStyle.Image src={exactKey} />
                          ) : subitem?.type === "editor" ? (
                            <p
                              dangerouslySetInnerHTML={{ __html: exactKey }}
                            ></p>
                          ) : subitem?.type === "crud" ? (
                            <>
                              <Tooltip title="Delete">
                                <IconButton
                                  aria-label="delete"
                                  size="small"
                                  onClick={() => ctaDeleteHandler(row)}
                                >
                                  <TableStyle.DeleteIcon />
                                </IconButton>
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
