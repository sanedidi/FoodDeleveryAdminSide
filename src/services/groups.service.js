import { useMutation, useQuery } from '@tanstack/react-query';
import request from 'services/httpRequest';

const groupsServices = {
  createGroup: (data) => request.post('/group', data).then((res) => res?.data),
  getGroups: () => request.get('/group').then((res) => res?.data),
  getGroupById: (groupId) => request.get(`/group/${groupId}`).then((res) => res?.data),
  updateGroupById: (groupId) => request.put(`/group/${groupId}`).then((res) => res?.data),
  deleteGroupById: (groupId) => request.delete(`/group/${groupId}`).then((res) => res?.data),
  downloadGetGroups: () => request.get('/excel/groups').then((res) => res?.data),
};

export const useCreateGroup = () => {
  return useMutation({ mutationFn: (data) => groupsServices.createGroup(data) });
};

export const useGetGroups = (params) => {
  return useQuery({ queryKey: ['GET/GROUPS', params], queryFn: () => groupsServices.getGroups(params) });
};

export const useGetGroupById = ({ groupId }) => {
  return useQuery({
    queryKey: ['GET/GROUP/ID', groupId],
    queryFn: () => groupsServices.getGroupById(groupId),
    enabled: !!groupId,
  });
};

export const useUpdateGroupById = (mutationSettings) => {
  return useMutation({
    mutationFn: (data) => request.put(`group/${data.id}`, data),
    ...mutationSettings,
  });
};

export const useDeleteGroupById = () => {
  return useMutation({ mutationFn: (data) => request.delete(`group/${data.id}`, data) });
};

export const useGetDownloadGroups = () => {
  return useQuery({ queryKey: ['DOWNLOAD/GROUPS'], queryFn: () => groupsServices.downloadGetGroups() });
};
