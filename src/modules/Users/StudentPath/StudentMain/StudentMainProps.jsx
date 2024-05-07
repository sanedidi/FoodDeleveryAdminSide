import React, { useState } from 'react';
import { useGetSearchCourse } from 'services/courses.service';
import request from 'services/httpRequest';

export const StudentMainProps = () => {
  const [courseSearch, setCourseSearch] = useState('');

  const getCourses = useGetSearchCourse({
    search: courseSearch,
  });
  const onChange = (e) => {
    setCourseSearch(e.target.value);
  };
  const [course, SetCourse] = useState([]);
  React.useEffect(() => {
    request.get('/course').then((response) => {
      SetCourse(response.data.courses);
    });
  }, []);

  if (!course) return null;

  const doubleValue = getCourses?.data?.courses?.map((course, index) => {
    return {
      ...course,
      index: index + 1,
    };
  });
  //   console.log(getCourses);
  return {
    doubleValue,
    onChange,
    getCourses,
  };
};
