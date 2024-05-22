import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import { CustomInput } from "../src/components/Custom/CustomInput/CustomInput";
import CustomModal from "../src/components/Custom/CustomModal/CustomModal";
import Lang from "components/lang/Lang.jsx";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { CustomBtn } from "components/Custom/CustomBtn";
import MenuComp from "components/MenuComponent/MenuComp";
import { AiOutlineEllipsis } from "react-icons/ai";
import {
  useGetCategoriesService,
  useDeleteCategory,
} from "services/categories.service";
import { CategoryFilterIcon } from "components/SvgComponents/SvgComponents";
import { IoEye } from "react-icons/io5";
import { Skeleton, Stack } from "@chakra-ui/react";
import CategoryImage from "../src/components/Categories/components/CategoryImage";
import { useDisclosure } from "@chakra-ui/react";
import UseCategoriesAddProps from "../src/components/Categories/CategoriesAdd/UseCAtegoriesAddProps";
import { authStore } from "store/auth.store";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { PLusCIrcleIcon } from 'components/SvgComponents/SvgComponents'

export {
  React,
  useEffect,
  Box,
  CustomBtn,
  CustomModal,
  Lang,
  Textarea,
  makeAnimated,
  useState,
  CustomInput,
  authStore,
  axios,
  UseCategoriesAddProps,
  DeleteIcon,
  EditIcon,
  MenuComp,
  AiOutlineEllipsis,
  useGetCategoriesService,
  useDeleteCategory,
  CategoryFilterIcon,
  IoEye,
  Skeleton,
  Stack,
  CategoryImage,
  useDisclosure,
  Select,
  toast,
  Toaster,
  PLusCIrcleIcon
};
