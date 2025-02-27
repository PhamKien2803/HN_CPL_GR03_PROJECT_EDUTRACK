import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grow from "@mui/material/Grow";
import { keyframes } from "@mui/system";
import SchoolIcon from "@mui/icons-material/School";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useTranslation } from "react-i18next";

// Define animations
const shake = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  50% { transform: rotate(15deg); }
  75% { transform: rotate(-10deg); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
`;



export default function RedesignedFeaturesWithPopup() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: (
        <SchoolIcon
          sx={{
            fontSize: 48,
            color: "#673ab7",
            animation: `${bounce} 2s infinite`,
          }}
        />
      ),
      title: t("comprehensive_study_management_title"),
      description: t("comprehensive_study_management_description"),
      details: t("comprehensive_study_management_details"),
    },
    {
      icon: (
        <NotificationsActiveIcon
          sx={{
            fontSize: 48,
            color: "#fdd835",
            animation: `${shake} 1.5s infinite`,
          }}
        />
      ),
      title: t("timely_exam_notifications_title"),
      description: t("timely_exam_notifications_description"),
      details: t("timely_exam_notifications_details"),
    },
    {
      icon: (
        <AssignmentIcon
          sx={{
            fontSize: 48,
            color: "#f4511e",
            animation: `${bounce} 2s infinite`,
          }}
        />
      ),
      title: t("exam_performance_tracking_title"),
      description: t("exam_performance_tracking_description"),
      details: t("exam_performance_tracking_details"),
    },
  ];
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 6,
          textAlign: "center",
          color: "#333",
        }}
      >
        {t("key_features_title")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 4,
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {features.map(({ icon, title, description, details }, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: { xs: "100%", sm: "30%" },
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Card */}
            <Card
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 2,
                borderRadius: "20px",
                background: "linear-gradient(135deg, #ffffff, #f4f4f4)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              {icon}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "medium",
                  mb: 1,
                  color: "#333",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.95rem",
                }}
              >
                {description}
              </Typography>
            </Card>

            {/* Popup */}
            <Grow in={hoveredIndex === index}>
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  mt: 2,
                  p: 3,
                  width: 320,
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
                  borderRadius: "16px",
                  zIndex: 10,
                  textAlign: "left",
                  border: "1px solid #e0e0e0",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.9rem",
                    color: "#555",
                  }}
                >
                  {details}
                </Typography>
              </Box>
            </Grow>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
