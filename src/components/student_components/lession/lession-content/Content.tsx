import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Button,
    Collapse,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Pagination,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { lession as Lession, slot as Slot, questionSlot as QuestionSlot } from "../../../../models/Interface"

interface Props {
    lession: Lession;
    slot: Slot[];
    questionSlot: QuestionSlot[];
}

const Content: React.FC<Props> = ({ lession, slot, questionSlot }) => {
    const [visibleSlots, setVisibleSlots] = useState<{ [key: string]: boolean }>({});
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 2;
    const navigate = useNavigate();

    const handleClicktoDiscussion = (questionid: string, slotId: string) => {
        navigate(`/dicussion-page/question?slotID=${slotId}&questionid=${questionid}`);
    };

    const toggleVisibility = (slotId: string) => {
        setVisibleSlots((prev) => ({
            ...prev,
            [slotId]: !prev[slotId],
        }));
    };

    const handlePageChange = (__event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const paginatedSlots = lession.SlotID.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <Box>
            {paginatedSlots.map((sl, index) => {
                const currentSlot = slot.find((s) => s.id === sl);

                return (
                    <Box
                        key={`slot-${index}`}
                        mb={2}
                        p={2}
                        border={1}
                        borderRadius={2}
                        borderColor="grey.300"
                        boxShadow={2}
                        onClick={() => toggleVisibility(sl)}
                    >
                        <Box bgcolor="grey.100"
                            borderRadius="8px"
                            p={2}>
                            {/* Slot Header */}
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Typography variant="h6" component="div" bgcolor={"lightpink"} borderRadius={2} p={0.5}>
                                    {currentSlot?.SlotName || `Slot ${index + 1}`}
                                </Typography>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <Typography variant="body2" color="textSecondary">
                                        {currentSlot?.TimeStart} - {currentSlot?.TimeEnd}
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to={`/lession-infor/details/${sl}`}
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                    >
                                        View Slot
                                    </Button>
                                </Box>
                            </Box>
                            <Typography variant="body1" color="textSecondary" mt={1} mb={1} fontWeight={"bold"}>
                                {currentSlot?.Description.split('\n').map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </Typography>
                        </Box>

                        <hr style={{ border: '1px solid lightgray', margin: '8px auto' }} />

                        {/* Questions Collapse */}
                        <Collapse in={visibleSlots[sl]}>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="subtitle1" color="primary" gutterBottom>
                                Questions:
                            </Typography>
                            <List>
                                {questionSlot
                                    .filter((qs) => qs.Slotid === sl)
                                    .map((qs, qIndex) => (
                                        <ListItem
                                            key={`qs-${qIndex}`}
                                            component="li"
                                            onClick={() => handleClicktoDiscussion(qs.QuestionID, sl)}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                                                    transform: 'scale(1.02)',
                                                },
                                                transition: 'background-color 0.3s, transform 0.3s',
                                            }}
                                        >
                                            <ListItemIcon>
                                                <HelpOutlineIcon color="action" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={`Q${qIndex + 1}: ${qs.content.substring(0, 50)}...`}
                                                secondary={qs.Status === 0 ? 'Not started' : 'Go'}
                                                secondaryTypographyProps={{
                                                    color: qs.Status === 0 ? 'error' : 'success',
                                                    fontWeight: 'bold',
                                                }}
                                            />
                                            <ArrowForwardIosIcon fontSize="small" color="action" />
                                        </ListItem>
                                    ))}
                            </List>
                        </Collapse>
                    </Box>
                );
            })}

            {/* Pagination */}
            <Pagination
                count={Math.ceil(lession.SlotID.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
            />
        </Box>
    );
};

export default Content;
