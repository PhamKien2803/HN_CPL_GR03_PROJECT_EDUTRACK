import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Swal from "sweetalert2";
import Comment from "./Comment";
import { participants, answerQuestionSlot } from "../../../../models/Interface";
import { getAnswerQuestionSlot, getParticipants } from "../../../../service/ApiService";
import { postComment, updateComment, deleteComment } from "../../../../service/ApiService";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Discussion: React.FC = () => {
  const [searchParams] = useSearchParams();
  const questionID = searchParams.get("questionid");
  const [answerQuestionSlots, setAnswerQuestionSlots] = useState<answerQuestionSlot[]>([]);
  const [participants, setParticipants] = useState<participants[]>([]);
  const [text, setText] = useState<string>("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCommentId, setSelectedCommentId] = useState<string | null>(null);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = async () => {
    if (!text.trim()) {
      Swal.fire({
        icon: "question",
        title: "Question",
        text: "Please enter a comment before submitting.",
        confirmButtonText: "OK",
      });
      return;
    }

    // Character limit check
    if (text.length > 800) {
      toast.error("Comment cannot exceed 800 characters.");
      return;
    }

    if (editingCommentId) {
      const updatedComment = { ...answerQuestionSlots.find(comment => comment.id === editingCommentId), comment: text } as answerQuestionSlot;
      try {
        await updateComment(updatedComment);
        setAnswerQuestionSlots(answerQuestionSlots.map(comment => (comment.id === editingCommentId ? updatedComment : comment)));
        setEditingCommentId(null);
        setText("");
      } catch (error) {
        console.error("Error updating comment:", error);
      }
    } else {
      const newComment: answerQuestionSlot = {
        id: Math.random().toString(36).substr(2, 9),
        comment: text,
        QuestionID: questionID || "",
        UserID: "he173077",
        Rating: 0,
        Replies: [],
        Timestamped: new Date().toISOString(),
      };

      try {
        await postComment(newComment);
        setAnswerQuestionSlots([...answerQuestionSlots, newComment]);
        setText("");
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    }
  };

  useEffect(() => {
    fetchAnswerQuestionSlot();
    fetchParticipants();
  }, []);

  const fetchAnswerQuestionSlot = async () => {
    try {
      const res: answerQuestionSlot[] = await getAnswerQuestionSlot();
      setAnswerQuestionSlots(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchParticipants = async () => {
    try {
      const res: participants[] = await getParticipants();
      setParticipants(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsernameById = (userID: string) => {
    const user = participants.find((participant) => participant.id === userID);
    return user ? user.UserName : "Unknown User";
  };

  const filterCommentQuestion = answerQuestionSlots.filter(
    (comment) => comment?.QuestionID === questionID
  );

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, commentId: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedCommentId(commentId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCommentId(null);
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = answerQuestionSlots.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setText(commentToEdit.comment);
      setEditingCommentId(commentId);
    }
    handleMenuClose();
  };

  const handleDeleteComment = (commentId: string) => {
    handleMenuClose();
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this comment? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteComment(commentId);
          setAnswerQuestionSlots(answerQuestionSlots.filter((comment) => comment.id !== commentId));
          Swal.fire("Deleted!", "Your comment has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting comment:", error);
          Swal.fire("Error", "There was an error deleting your comment.", "error");
        }
      }
    });
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setText("");
  };

  return (
    <Fragment>
      <ToastContainer position="top-right" autoClose={3000} />

      <Box
        sx={{
          maxWidth: "750px",
          margin: "20px auto",
          padding: "25px",
          border: "1px solid #e0e0e0",
          borderRadius: "16px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          value={text}
          onChange={handleTextChange}
          placeholder="Type your answer here..."
          multiline
          rows={3}
          fullWidth
          variant="outlined"
          sx={{
            marginBottom: "20px",
            borderRadius: "12px",
            backgroundColor: "#f4f6f8",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#b0bec5",
              },
              "&:hover fieldset": {
                borderColor: "#3f51b5",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#3f51b5",
              },
            },
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          {editingCommentId ? (
            <>
              <Button
                onClick={handleCancelEdit}
                sx={{
                  fontWeight: "bold",
                  color: "#757575",
                  textTransform: "none",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  padding: "10px 20px",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "20px",
                  backgroundColor: "#3f51b5",
                  "&:hover": { backgroundColor: "#303f9f" },
                }}
              >
                Save
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              sx={{
                padding: "10px 20px",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "20px",
                backgroundColor: "#3f51b5",
                "&:hover": { backgroundColor: "#303f9f" },
              }}
            >
              Send
            </Button>
          )}
        </Box>
      </Box>

      <Typography variant="h6" sx={{ margin: "1rem", fontWeight: "bold", color: "#3f51b5" }}>
        Your Comments
      </Typography>

      {filterCommentQuestion.map((answer) => (
        <Paper
          key={answer.id}
          elevation={3}
          sx={{
            marginBottom: "10px",
            padding: "15px",
            borderRadius: "12px",
            backgroundColor: "#f9f9f9",
            position: "relative",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Comment
            username={getUsernameById(answer?.UserID)}
            rating={answer?.Rating}
            text={answer?.comment}
            questionID={answer?.QuestionID}
            timestamp={answer?.Timestamped}
            answerId={answer?.id}
          />
          <IconButton
            aria-label="more"
            onClick={(event) => handleMenuOpen(event, answer?.id)}
            sx={{ position: "absolute", top: 10, right: 10, color: "#3f51b5" }}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && selectedCommentId === answer.id}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleEditComment(answer.id)}>Edit</MenuItem>
            <MenuItem onClick={() => handleDeleteComment(answer.id)}>Delete</MenuItem>
          </Menu>
        </Paper>
      ))}
    </Fragment>
  );
};

export default Discussion;
