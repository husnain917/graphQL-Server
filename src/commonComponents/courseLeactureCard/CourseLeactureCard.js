import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {CM} from './CourseLeactureCardStyle'
import moment from 'moment';


export default function CourseLeactureCard({ data, onPress }) {
  return (
    // <CM.MainCard onClick={() => onPress(data)}>
    <CM.MainCard >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
          alt="green iguana"
        />
        <CM.MainCardContent>
          <CM.TitleTypography gutterBottom variant="h6" component="div">
            {data.lectureTitle}
          </CM.TitleTypography>
          <CM.CourseDiv>
            <CM.CourseTypography gutterBottom variant="subtitle2" component="span">
              Course id:&nbsp;
            </CM.CourseTypography>
            <Typography gutterBottom variant="body2" component="span" color="text.secondary">
              {data.coursesId}
            </Typography>
          </CM.CourseDiv>
          <CM.LectureDiv>
            <CM.CourseTypography gutterBottom variant="subtitle2" component="span">
              Lecture video:&nbsp;
            </CM.CourseTypography>
            <Typography gutterBottom variant="body2" component="span" color="text.secondary">
              {data.lectureVideo}
            </Typography>
          </CM.LectureDiv>
          <CM.DateDiv>
            <CM.CreatedAtTypography gutterBottom variant="subtitle2" component="span">
              Created at:&nbsp;
            </CM.CreatedAtTypography>
            <CM.DateTypography variant="body2" component="span" color="text.secondary">
              {moment().format(data.createdAt)}
            </CM.DateTypography>
          </CM.DateDiv>
        </CM.MainCardContent>
      </CardActionArea>
    </CM.MainCard>
  );
}