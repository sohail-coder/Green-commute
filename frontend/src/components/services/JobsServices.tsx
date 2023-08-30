import { JobInfo } from 'components/organisms/SideNav';
import api from '../../api';

export const getAllJobs = async () => {
  const jobsData = await api.get(`/jobs/`);
  return jobsData.data;
};

export const filterJobs = async (skill: any, location: any) => {
  const allJobsData = await getAllJobs();
  const result: JobInfo[] = [];
  allJobsData.map((job: JobInfo) => {
    if (
      job.skill.name.toLowerCase().includes(skill?.toLowerCase()) &&
      job.location.name.toLowerCase().includes(location?.toLowerCase())
    ) {
      result.push(job);
    }
  });
  return result;
};

export const getFilteredJobResults = (
  maxDistance: string,
  searchData: JobInfo[]
) => {
  let filteredResults: JobInfo[] = [];
  filteredResults = searchData.filter((job: JobInfo) => {
    return job.distance < parseInt(maxDistance);
  });
  return filteredResults;
};

export const getSelectedJobData = (searchData: JobInfo[], jobId: number) => {
  let selectedJobData: JobInfo = searchData[0];
  searchData.forEach((element) => {
    if (Number(element.id) === jobId) {
      selectedJobData = element;
    }
  });
  return selectedJobData;
};
