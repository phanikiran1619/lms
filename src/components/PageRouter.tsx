import StudentsList from './pages/admin/StudentsList';
import CoursesList from './pages/admin/CoursesList';
import PaymentsList from './pages/admin/PaymentsList';
import CourseDetail from './pages/instructor/CourseDetail';
import StudentProgress from './pages/instructor/StudentProgress';
import MyCourses from './pages/student/MyCourses';

interface PageRouterProps {
  role: 'admin' | 'instructor' | 'student';
  page: string;
}

const PageRouter = ({ role, page }: PageRouterProps) => {
  if (role === 'admin') {
    switch (page) {
      case 'students':
        return <StudentsList />;
      case 'courses':
        return <CoursesList />;
      case 'payments':
        return <PaymentsList />;
      default:
        return null;
    }
  }

  if (role === 'instructor') {
    switch (page) {
      case 'courses':
        return <CourseDetail />;
      case 'students':
        return <StudentProgress />;
      default:
        return null;
    }
  }

  if (role === 'student') {
    switch (page) {
      case 'courses':
        return <MyCourses />;
      default:
        return null;
    }
  }

  return null;
};

export default PageRouter;
