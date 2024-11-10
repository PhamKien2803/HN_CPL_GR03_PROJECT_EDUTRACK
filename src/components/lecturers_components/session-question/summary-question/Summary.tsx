import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemText, ListItemIcon, Paper, Badge, CircularProgress } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Summary: React.FC = () => {
  // Hard-coded data
  const questionSummary = {
    totalComments: 0,
    totalVotes: 0,
    noCommentVotes: 0,
    noCommentsPosted: 0,
    mostActiveStudent: null,
    mostActiveGroup: null,
    leastActiveGroup: null,
    groupsNoAction: 0,
  };

  const passCriteria = {
    viewQuestion: false,
    commentsPosted: 1,
    starsRated: 1,
    votes: 3,
    viewDownload: 1,
    timeOfReading: 0,
  };

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Question Summary Section */}
      <Paper elevation={4} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Question Summary
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          <ListItem>
            <ListItemIcon>
              <CommentIcon sx={{ color: '#1976d2' }} />
            </ListItemIcon>
            <ListItemText
              primary="Total Comments Posted"
              secondary={questionSummary.totalComments}
              primaryTypographyProps={{ fontWeight: 'medium' }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ThumbUpIcon sx={{ color: '#ff9800' }} />
            </ListItemIcon>
            <ListItemText primary="Total Votes" secondary={questionSummary.totalVotes} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Badge badgeContent={questionSummary.noCommentVotes} color="secondary">
                <CommentIcon sx={{ color: '#757575' }} />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Haven't Voted for Comments" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PersonIcon sx={{ color: '#4caf50' }} />
            </ListItemIcon>
            <ListItemText primary="Most Active Student" secondary={questionSummary.mostActiveStudent || "None"} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CircularProgress size={24} variant="determinate" value={passCriteria.commentsPosted * 10} color="success" />
            </ListItemIcon>
            <ListItemText primary="Comments Progress" secondary={`${passCriteria.commentsPosted} posted`} />
          </ListItem>
        </List>
      </Paper>

      {/* Pass Criteria Section */}
      <Paper elevation={4} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Pass Criteria
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          <ListItem>
            <ListItemIcon>
              <VisibilityIcon sx={{ color: passCriteria.viewQuestion ? '#4caf50' : '#f44336' }} />
            </ListItemIcon>
            <ListItemText primary="View Question" secondary={passCriteria.viewQuestion ? "Yes" : "No"} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarIcon sx={{ color: '#ffeb3b' }} />
            </ListItemIcon>
            <ListItemText primary="Number of Stars Rated by Others" secondary={passCriteria.starsRated} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ThumbUpIcon sx={{ color: '#ff9800' }} />
            </ListItemIcon>
            <ListItemText primary="Number of Votes" secondary={passCriteria.votes} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DownloadIcon sx={{ color: '#673ab7' }} />
            </ListItemIcon>
            <ListItemText primary="View or Download" secondary={passCriteria.viewDownload} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccessTimeIcon sx={{ color: '#9e9e9e' }} />
            </ListItemIcon>
            <ListItemText primary="Time of Reading" secondary={`${passCriteria.timeOfReading} min`} />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Summary;
