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
import { MenuComp } from "components/MenuComponent";
import { AiOutlineEllipsis } from "react-icons/ai";
import {
  useGetCategoriesService,
  useDeleteCategory,
} from "services/categories.service";
import { Link } from "react-router-dom";
import { CategoryFilterIcon } from "components/SvgComponents/SvgComponents";
import { IoEye } from "react-icons/io5";
import { Skeleton, Stack } from "@chakra-ui/react";
import CategoryImage from "../src/components/Categories/components/CategoryImage";
import { useDisclosure } from "@chakra-ui/react";
import UseCategoriesAddProps from "../src/components/Categories/CategoriesAdd/UseCAtegoriesAddProps";
import { authStore } from "store/auth.store";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import { PLusCIrcleIcon } from "components/SvgComponents/SvgComponents";
import { Header } from "components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { usePostCategory } from "services/categories.service";
import { PlusIconDown } from "components/SvgComponents/SvgComponents";
import { CustomPagination } from "components/Custom/CustomPagination/CustomPagination";
import { DownloadIcon } from "@chakra-ui/icons";
import { Search2Icon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";
import {
  FilterIcon,
  PlusIcon,
  ReloadIcon,
  TrashIcon,
} from "components/SvgComponents/SvgComponents";
import { UnderHeader } from "components/UnderHeader";
import { CustomTable } from "components/Custom/CustomTable/CustomTable";
import ReactPaginate from "react-paginate";
import HeaderBox from "components/Categories/components/HeaderBox";
import { CreateIcon, FolderIcon } from "components/SvgComponents/SvgComponents";
import { MainProd } from "components/Products/components/mainProd";
export {
  MainProd,
  CreateIcon,
  FolderIcon,
  HeaderBox,
  ReactPaginate,
  CustomTable,
  UnderHeader,
  FilterIcon,
  PlusIcon,
  ReloadIcon,
  TrashIcon,
  useSearchParams,
  Search2Icon,
  DownloadIcon,
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
  PLusCIrcleIcon,
  Header,
  useNavigate,
  useParams,
  usePostCategory,
  PlusIconDown,
  CustomPagination,
  Link,
};
