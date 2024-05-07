import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const modulesServices = {
  createModule: (data) => request.post("/module", data),
  getModules: (courseId) => request.get(`/module/course/${courseId}`).then((res) => res?.data),
  getModuleById: (moduleId) => request.get(`/module/${moduleId}`).then(res => res?.data),
  updateModuleById: (moduleId) => request.put(`/module/${moduleId}`).then(res => res?.data),
  deleteModuleById: (moduleId) => request.delete(`/module/${moduleId}`).then(res => res?.data),
  downloadGetModules: () => request.get('/excel/modules').then((res) => res?.data),
};

export const useCreateModule = () => {
  return useMutation({ mutationFn: (data) => modulesServices.createModule(data)})
}

export const useGetModules = ({courseId}) => {
  return useQuery({ queryKey: ['GET/MODULES/ID', courseId], queryFn: () => modulesServices.getModules(courseId), enabled: !!courseId});
};

export const useGetModuleById = ({moduleId}) => {
  return useQuery({queryKey: ["GET/MODULE/ID", moduleId], queryFn: () => modulesServices.getModuleById(moduleId), enabled: !!moduleId})
}

export const useUpdateModuleById = (mutationSettings) => {
  return useMutation({
     mutationFn: (data) => request.put(`module/${data.id}`, data),
     ...mutationSettings
    })
}

export const useDeleteModuleById = () => {
  return useMutation({mutationFn: (data) => request.delete(`module/${data.id}`, data)})
}

export const useGetDownloadModules = () => {
  return useQuery({ queryKey: ['DOWNLOAD/MODULES'], queryFn: () => modulesServices.downloadGetModules()});
};