import { ExamDetail } from "../components/student_components/examtest/ExamDetail";
import { ExamList } from "../components/student_components/examtest/ExamList";
import { HistoryExam } from "../components/student_components/examtest/exam-history/HistoryExam";
import Profile from "../components/student_components/profile/profile";
import EditProfile from "../components/student_components/profile/updateProfile";
import LogoutButton from "../page/Auth/logout/logout";
import { AddExam } from "../page/home-page/lecturers-home/Exam/AddExam";
import LecturersHomePage from "../page/home-page/lecturers-home/LecturersHomePage";
import Lession_Lecturers from "../page/home-page/lecturers-home/Lecturers_Lesstion/Lession_Lecturers";
import SessionAssignment from "../page/home-page/lecturers-home/Session/SessionAssignment";
import SessionDetails from "../page/home-page/lecturers-home/Session/SessionDetails";
import SessionDicussion from "../page/home-page/lecturers-home/Session/SessionDicussion";
import StaffHomePage from "../page/home-page/staff-home/StaffHomePage";
import DicussionAssignment from "../page/home-page/student-home/DicussionAssignment";
import DicussionPage from "../page/home-page/student-home/DicussionPage";
import Lession from "../page/home-page/student-home/Lession";
import LessionInfor from "../page/home-page/student-home/LessionInfor";
import StudentHome from "../page/home-page/student-home/StudentHome";


interface Router {
    name?: string;
    key?: string;
    path?: string;
    component: React.ComponentType;
}

const routesStudentHome: Router[] = [

    {
        name: "student_home",
        key: "StudentHomePage",
        path: "/home-page",
        component: StudentHome
    },

    {
        name: "lession",
        key: "LessionPage",
        path: "/lession-course",
        component: Lession
    },

    {
        name: "examtest",
        key: "ExamTestPage",
        path: "/exam-test",
        component: ExamList
    },
    {
        name: "examtest",
        key: "ExamTestPage",
        path: "/examDetail",
        component: ExamDetail
    },

    {
        name: "lession_infor",
        key: "LessionInforPage",
        path: "/lession-infor/details/:id",
        component: LessionInfor
    },

    {
        name: "Dicussion",
        key: "DicussionPage",
        path: "/dicussion-page/question",
        component: DicussionPage
    },

    {
        name: "DicussionAssignment",
        key: "DicussionAssignment",
        path: "/dicussion-page/assignment",
        component: DicussionAssignment
    },

    {
        name: "History",
        key: "History",
        path: "/history",
        component: HistoryExam
    },

    {
        name: "Profile",
        key: "ProfilePage",
        path: "/profile",
        component: Profile
    },

    {
        name: "Update-Profile",
        key: "ProfilePage",
        path: "/edit-profile",
        component: EditProfile
    },
    {
        name: "Logout",
        key: "LogoutPage",
        path: "/logout",
        component: LogoutButton
    },

];

const routesLecturersHome: Router[] = [
    {
        name: "lecturers_home",
        key: "homepage_lecturer",
        path: "/lecturer/homePage",
        component: LecturersHomePage
    },

    {
        name: "lession",
        key: "LessionPage",
        path: "/lecturer/lession-course",
        component: Lession_Lecturers
    },
    {
        name: "SessionDetails",
        key: "SessionDetails",
        path: "/lecturer/session-details",
        component: SessionDetails
    },

    {
        name: "SessionDicussion",
        key: "SessionDicussion",
        path: "/lecturer/session-question",
        component: SessionDicussion
    },

    {
        name: "SessionAssignment",
        key: "SessionAssignment",
        path: "/lecturer/session-assignment",
        component: SessionAssignment
    },

    {

        name: "lession",
        key: "LessionPage",
        path: "/lecturer/lession-course",
        component: Lession_Lecturers
    },
    {
        name: "Profile",
        key: "ProfilePage",
        path: "/profile",
        component: Profile
    },

    {
        name: "Update-Profile",
        key: "ProfilePage",
        path: "/edit-profile",
        component: EditProfile
    },
    {
        name: "Logout",
        key: "LogoutPage",
        path: "/logout",
        component: LogoutButton
    },

    {
        name: "AddExam",
        key: "AddExam",
        path: "/addingExam",
        component: AddExam
    }

];

const routesStaffHome: Router[] = [
    {
        key: "homepage_staff",
        path: "/staff/homePage",
        component: StaffHomePage
    }
];



export { routesLecturersHome, routesStaffHome, routesStudentHome };
