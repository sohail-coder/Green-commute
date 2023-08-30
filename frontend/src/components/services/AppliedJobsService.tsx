import api from '../../api';

export const addToAppliedobs = async (id: number) => {
  await api.put(`/appliedJobs/update-status/${id}`)
  return getAppliedJobStatus(id);
};

export const removeFromAppliedJobs = async (id: number) => {
  await api.put(`/appliedJobs/update-status/${id}`)
  return getAppliedJobStatus(id);
};

export const getAppliedJobStatus = async (id: number) => {
  const {data} = await api.get(`appliedJobs/status/${id}`)
  return data;
};
