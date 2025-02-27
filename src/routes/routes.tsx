import { ExamDetail } from "../components/student_components/examtest/ExamDetail";
import { ExamList } from "../components/student_components/examtest/ExamList";
import { HistoryExam } from "../components/student_components/examtest/exam-history/HistoryExam";
import Profile from "../components/student_components/profile/profile";
import EditProfile from "../components/student_components/profile/updateProfile";
import { AddExam } from "../page/home-page/lecturers-home/Exam/AddExam";
import LecturersHomePage from "../page/home-page/lecturers-home/LecturersHomePage";
import DicussionPage from "../page/home-page/student-home/DicussionPage";
import Lession from "../page/home-page/student-home/Lession";
import LessionInfor from "../page/home-page/student-home/LessionInfor";
import Lession_Lecturers from "../page/home-page/lecturers-home/Lecturers_Lesstion/Lession_Lecturers";
import SessionDicussion from "../page/home-page/lecturers-home/Session/SessionDicussion";
import SessionAssignment from "../page/home-page/lecturers-home/Session/SessionAssignment";
import SessionDetails from "../page/home-page/lecturers-home/Session/SessionDetails";
import DicussionAssignment from "../page/home-page/student-home/DicussionAssignment";
import LogoutButton from "../page/Auth/logout/logout";
import Contact from "../components/student_components/contact-support/contact";
import { AddingCourseSemester } from "../page/home-page/staff-home/ManageCourseSemester/AddingCourseSemester";
import { MangerCourse } from "../page/home-page/staff-home/ManageCourseSemester/MangerCourse";
import ManageExam from "../page/home-page/lecturers-home/Exam/ManageExam";
import { ViewExam } from "../page/home-page/lecturers-home/Exam/ViewExam";
import { ViewDetailResult } from "../page/home-page/lecturers-home/Exam/ViewDetailResult";
import { UpdateExam } from "../page/home-page/lecturers-home/Exam/UpdateExam";
import CreatingClass from "../page/home-page/staff-home/CreatingClass/CreatingClass";
import CouseraList from "../page/home-page/staff-home/CouseraList/CoursesList";
import StudentList from "../page/home-page/staff-home/CreatingClass/StudentList";
import DashBoardPage from "../page/home-page/student-home/DashBoardPage";
import { CheckPoint } from "../page/home-page/staff-home/Exam/CheckPoint";
import SemesterForm from "../page/home-page/staff-home/Semester Management/SemesterForm";
import DashboardStaff from "../page/home-page/staff-home/DashboardStaff";
import AccountManagement from "../page/home-page/staff-home/Account Management/AccountManagement";
import ExamTest from "../page/home-page/staff-home/Exam/ExamTest";
import { ViewResultManager } from "../page/home-page/staff-home/Exam/ViewResultManager";
import ClassManagement from "../page/home-page/staff-home/CreatingClass/ClassManagement";
import { ViewCourseSm } from "../page/home-page/staff-home/ManageCourseSemester/ViewCourseSm";
import StudentGuide from "../layouts/UserGuide/StudentGuide";
import LecturersGuide from "../layouts/UserGuide/LecturersGuide";


interface Router {
  name?: string;
  key?: string;
  path?: string;
  component: React.ComponentType;
}

const routesStudentHome: Router[] = [

  {
    name: "dashboard_Page",
    key: "dashboardPage",
    path: "/dashboardPage",
    component: DashBoardPage,
  },
  {
    name: "student-guide",
    key: "student-guide",
    path: "/student-guide",
    component: StudentGuide,
  },
  {
    name: "lession",
    key: "LessionPage",
    path: "/lession-course",
    component: Lession,
  },

  {
    name: "examtest",
    key: "ExamTestPage",
    path: "/exam-test",
    component: ExamList,
  },

  {
    name: "examtest",
    key: "ExamTestPage",
    path: "/examDetail",
    component: ExamDetail,
  },

  {
    name: "lession_infor",
    key: "LessionInforPage",
    path: "/lession-infor/details",
    component: LessionInfor,
  },

  {
    name: "Dicussion",
    key: "DicussionPage",
    path: "/dicussion-page/question",
    component: DicussionPage,
  },

  {
    name: "DicussionAssignment",
    key: "DicussionAssignment",
    path: "/dicussion-page/assignment",
    component: DicussionAssignment,
  },

  {
    name: "History",
    key: "History",
    path: "/history",
    component: HistoryExam,
  },

  {
    name: "Profile",
    key: "ProfilePage",
    path: "/profile",
    component: Profile,
  },

  {
    name: "Contact",
    key: "ContactPage",
    path: "/contact",
    component: Contact,
  },
  {
    name: "Update-Profile",
    key: "ProfilePage",
    path: "/edit-profile",
    component: EditProfile,
  },

  {
    name: "Logout",
    key: "LogoutPage",
    path: "/logout",
    component: LogoutButton,
  },
];

const routesLecturersHome: Router[] = [
  {
    name: "lecturers_home",
    key: "homepage_lecturer",
    path: "/lecturer/homePage",
    component: LecturersHomePage,
  },
  {
    name: "lecturers_guide",
    key: "lecturers_guide",
    path: "/lecturer/lecturers-guide",
    component: LecturersGuide,
  },
  {
    name: "AddExam",
    key: "AddExam",
    path: "/addingExam",
    component: AddExam,
  },

  {
    name: "SessionDetails",
    key: "SessionDetails",
    path: "/lecturer/session-details",
    component: SessionDetails,
  },

  {
    name: "SessionDicussion",
    key: "SessionDicussion",
    path: "/lecturer/session-question",
    component: SessionDicussion,
  },

  {
    name: "SessionAssignment",
    key: "SessionAssignment",
    path: "/lecturer/session-assignment",
    component: SessionAssignment,
  },

  {
    name: "lession",
    key: "LessionPage",
    path: "/lecturer/lession-course",
    component: Lession_Lecturers,
  },

  {
    name: "lession",
    key: "LessionPage",
    path: "/lecturer/lession-course",
    component: Lession_Lecturers,
  },
  {
    name: "Profile",
    key: "ProfilePage",
    path: "/profile",
    component: Profile,
  },

  {
    name: "Update-Profile",
    key: "ProfilePage",
    path: "/edit-profile",
    component: EditProfile,
  },
  {
    name: "Logout",
    key: "LogoutPage",
    path: "/logout",
    component: LogoutButton,
  },

  {
    name: "AddExam",
    key: "AddExam",
    path: "/addingExam",
    component: AddExam,
  },

  {
    name: "manageExam",
    key: "manageExam",
    path: "/manageExam",
    component: ManageExam,
  },
  {
    name: "viewExam",
    key: "viewExam",
    path: "/viewExam",
    component: ViewExam,
  },
  {
    name: "ViewDetailResult",
    key: "ViewDetailResult",
    path: "/viewDetailResult",
    component: ViewDetailResult,
  },
  {
    name: "updateExam",
    key: "updateExam",
    path: "/updateExam",
    component: UpdateExam,
  },
  {
    name: "Contact",
    key: "ContactPage",
    path: "/contact",
    component: Contact,
  },

];

const routesStaffHome: Router[] = [
  {
    key: "dashboard_Staff",
    path: "/staff/dashboardStaff",
    component: DashboardStaff,
  },
  {
    key: "manage_class",
    path: "/staff/manage_class",
    component: ClassManagement,
  },
  {
    key: "create_class",
    path: "/staff/create-class",
    component: CreatingClass,
  },
  {
    key: "manage_course_semester",
    path: "/staff/manage_course_semester",
    component: MangerCourse,
  },
  {
    key: "couseras_list",
    path: "/staff/couseras_list",
    component: CouseraList,
  },
  {
    key: "check_point",
    path: "staff/exam-check-point",
    component: CheckPoint,
  },
  {
    key: "view_result_manager",
    path: "/staff/viewResultManager",
    component: ViewResultManager,
  },
  {
    key: "AddingCourseSemester",
    path: "/AddingCourseSemester",
    component: AddingCourseSemester,
  },
  {
    key: "manage_exam_point",
    path: "/staff/manage-exam-point",
    component: ExamTest,
  },
  {
    key: "student-details",
    path: "/class/:classId/students",
    component: StudentList,
  },
  {
    key: "manage_semester",
    path: "/staff/manage-semesters",
    component: SemesterForm,
  },
  {
    key: "account-management",
    path: "/staff/account-management",
    component: AccountManagement,
  },
  {
    key: "create-account-staff",
    path: "/staff/viewCourse",
    component: ViewCourseSm,
  },
  {
    name: "Profile",
    key: "ProfilePage",
    path: "/profile",
    component: Profile,
  },
  {
    name: "Update-Profile",
    key: "ProfilePage",
    path: "/edit-profile",
    component: EditProfile,
  },

  {
    name: "Logout",
    key: "LogoutPage",
    path: "/logout",
    component: LogoutButton,
  },

];

export { routesLecturersHome, routesStaffHome, routesStudentHome };
