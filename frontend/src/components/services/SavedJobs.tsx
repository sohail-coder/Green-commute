import { JobInfo } from 'components/organisms/SideNav';
import api from '../../api';

type element = {
  id: number,
  jobId: JobInfo,
  saved: number,
}

export const getSavedJobs = async () => {
  const { data } = await api.get("/savedJobs/");
  const result =  data.filter((element: element) => element.saved === 1).map((element: element) => element.jobId);
  return result;
};

export const addToSavedJobs = async (id: number) => {
  await api.put(`/savedJobs/update-status/${id}`)
  return getSavedJobStatus(id);
}

export const getSavedJobStatus = async (id: number) => {
  const {data} = await api.get(`savedJobs/status/${id}`)
  return data;
}

export const removeFromSavedJobs = async (id: number) => {
  await api.put(`/savedJobs/update-status/${id}`)
  return getSavedJobStatus(id);
};
