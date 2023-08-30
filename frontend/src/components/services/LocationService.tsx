import api from '../../../api';
interface Props {
  id: number;
  name: string;
  aqi: number;
}
export const getAllLocations = async () => {
  const { data } = await api.get('/locations');
  return data;
};

export const getAqiByLocationName = async (location: string) => {
  let aqi;
  const { data } = await api.get(`/locations`);
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.toLowerCase().includes(location.toLowerCase())) {
      aqi = data[i].aqi;
    }
  }
  return aqi;
};

export const getAqiByJobLocations = async (locations: string[]) => {
  const { data } = await api.get('/locations');
  const res: Props[] = [];
  data.map((location: Props) => {
    if (locations.includes(location.name)) {
      res.push(location);
    }
  });
  return res;
};
