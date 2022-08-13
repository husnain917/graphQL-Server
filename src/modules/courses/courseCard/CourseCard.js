import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Close, Delete, Edit } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material';
import useCourseCard from './useCourseCard';
import FormModal from '../../../commonComponents/formModal/FormModal';
import Logo from "../../../assets/logo192.ico"

export default function CourseCard( {data, formInputs, ctaFormHandler, ctaUpdateHandler}) {
    const { ctaEditButtonHandler } = useCourseCard()
    console.log("data in coureCard", data);
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {
                data?.map((item) => {
                    return (
                        <Card sx={{ width: 250, margin: 2 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Logo}
                                alt="Course_pic"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.courseName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.courseDesc}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.coursePrice}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Tooltip title="Update" sx={{marginTop: -3}}>
                                    <IconButton
                                        aria-label="update"
                                        size="small"
                                        onClick={() =>
                                            ctaEditButtonHandler(item)
                                        }
                                    >
                                        <Edit sx={{ color: '#96A0B5' }} />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>

                    );
                })
            }
            <FormModal
                formInputs={formInputs}
                ctaFormHandler={ctaFormHandler}
                ctaUpdateHandler={ctaUpdateHandler}
            />
        </Box>
    )
}