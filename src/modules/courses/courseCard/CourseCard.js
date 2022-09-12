import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Edit } from '@mui/icons-material'
import { Container, Divider, Grid, IconButton, Paper, Toolbar, Tooltip } from '@mui/material';
import useCourseCard from './useCourseCard';
import FormModal from '../../../commonComponents/formModal/FormModal';
import moment from 'moment';
import UseWindowDimensions from "../../../customHooks/UseWindowDimensions";
import { NewTableStyle } from "../../../commonComponents/newTable/NewTableStyle";
import AddIcon from "@mui/icons-material/Add";
import { Link } from 'react-router-dom';



export default function CourseCard({ data, title, formInputs, ctaFormHandler, ctaUpdateHandler, handleClickOpen }) {
    const { ctaEditButtonHandler } = useCourseCard();
    const { width } = UseWindowDimensions();
    return (
        <Paper sx={{ borderRadius: 4, }}>
            <Toolbar
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant='h6'>{title}</Typography>
                <div>
                    {width > 600 ? (
                        <NewTableStyle.AddButton
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={handleClickOpen}
                        >
                            Add
                        </NewTableStyle.AddButton>
                    ) : (
                        <IconButton
                            color="inherit"
                            aria-label="search"
                            disableFocusRipple
                            disableRipple
                            onClick={handleClickOpen}
                        >
                            <NewTableStyle.AddIcon />
                        </IconButton>
                    )}
                </div>
            </Toolbar>
            <Divider />
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", padding: 2, marginTop: 3 }}>
                <Container>
                    <Grid container>
                        {
                            data?.map((item) => {
                                return (
                                    <>
                                        <Grid item lg={4} md={6} sm={12} xs={12}>
                                            <Card sx={{ margin: '10px', border: '1px solid #CCC', boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px" }}>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image="https://robohash.org/random.png"
                                                    alt="Image Not Found"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {item.courseName}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {item.courseDesc}
                                                    </Typography>
                                                </CardContent>
                                                <hr />
                                                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <IconButton
                                                        aria-label="update"
                                                        size="small"
                                                        onClick={() =>
                                                            ctaEditButtonHandler(item)
                                                        }
                                                    >
                                                        <Edit color='primary' />
                                                    </IconButton>
                                                    <Typography variant='caption'>{moment(item.createdAt).fromNow()}</Typography>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </>
                                );
                            })
                        }

                    </Grid>
                </Container>
            </Box>
            <FormModal
                formInputs={formInputs}
                ctaFormHandler={ctaFormHandler}
                ctaUpdateHandler={ctaUpdateHandler}
            />
        </Paper >
    )
}